# --- ECR ---
resource "aws_ecr_repository" "api" {
  name                 = "lambda-api"
  image_tag_mutability = "MUTABLE"
  force_delete         = true

  image_scanning_configuration {
    scan_on_push = true
  }
}

# --- Build & push image ---
locals {
  repo_url = aws_ecr_repository.api.repository_url
}

resource "null_resource" "image" {
  triggers = {
    hash = md5(join("-", [for x in fileset("", "../backend/{*.py,*.txt,.dockerignore,Dockerfile}") : filemd5(x)]))
  }

  provisioner "local-exec" {
    command = <<EOF
      aws ecr get-login-password --profile personal --region eu-west-1 | docker login --username AWS --password-stdin ${local.repo_url}
      docker build --platform linux/x86_64 -t ${local.repo_url}:latest ../backend
      docker push ${local.repo_url}:latest
    EOF
  }
}

data "aws_ecr_image" "latest" {
  repository_name = aws_ecr_repository.api.name
  image_tag       = "latest"
  depends_on      = [null_resource.image]
}

# --- IAM Role ---
resource "aws_iam_role" "lambda" {
  name = "lambda"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Action    = "sts:AssumeRole"
      Principal = { Service = "lambda.amazonaws.com" }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_logs" {
  role       = aws_iam_role.lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# --- Lambda ---
resource "aws_cloudwatch_log_group" "api" {
  name              = "/aws/lambda/api"
  retention_in_days = 14
}

resource "aws_lambda_function" "api" {
  function_name    = "api"
  role             = aws_iam_role.lambda.arn
  image_uri        = "${aws_ecr_repository.api.repository_url}:latest"
  package_type     = "Image"
  source_code_hash = trimprefix(data.aws_ecr_image.latest.id, "sha256:")
  timeout          = 10

  environment {
    variables = {}
  }

  depends_on = [
    null_resource.image,
    aws_iam_role_policy_attachment.lambda_logs,
    aws_cloudwatch_log_group.api,
  ]
}
