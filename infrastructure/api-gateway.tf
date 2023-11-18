
resource "aws_cloudwatch_log_group" "gateway_logs" {
  name              = "/aws/gateway/welkdeelauto"
  retention_in_days = 14
}

module "api_gateway" {
  source = "terraform-aws-modules/apigateway-v2/aws"

  name          = "Welkedeelauto"
  description   = "Welkedeelauto HTTP API Gateway"
  protocol_type = "HTTP"

  cors_configuration = {
    allow_headers = [
      "content-type", "x-amz-date", "authorization", "x-api-key", "x-amz-security-token", "x-amz-user-agent"
    ]
    allow_methods = ["*"]
    allow_origins = ["*"]
  }

  # Custom domain
  domain_name                 = var.api_domain
  domain_name_certificate_arn = module.acm.acm_certificate_arn

  # Access logs
  default_stage_access_log_destination_arn = aws_cloudwatch_log_group.gateway_logs.arn
  default_stage_access_log_format          = "$context.identity.sourceIp - - [$context.requestTime] \"$context.httpMethod $context.routeKey $context.protocol\" $context.status $context.responseLength $context.requestId $context.integrationErrorMessage"

  # Routes and integrations
  integrations = {
    "POST /" = {
      lambda_arn             = module.lambda_image.lambda_function_arn
      payload_format_version = "2.0"
      timeout_milliseconds   = 12000
    }

    "$default" = {
      lambda_arn = module.lambda_image.lambda_function_arn
    }
  }

  tags = {
    Name = "http-apigateway"
  }
}
