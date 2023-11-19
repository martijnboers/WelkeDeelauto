terraform {
  backend "s3" {
    bucket         = "terraform-state-welkedeelauto"
    key            = "infra"
    region         = "eu-west-1"
    dynamodb_table = "terraform-state-welkedeelauto"
    encrypt        = true
  }

  # Provider-specific settings
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }

  # Terraform version
  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "personal"
  region  = var.region

  # skip_requesting_account_id should be disabled to generate valid ARN in apigatewayv2_api_execution_arn
  skip_requesting_account_id = false
}

provider "aws" {
  alias  = "global"
  region = "us-east-1"

  default_tags {
    tags = {
      Project     = "terraform-aws-opennext"
      Environment = "prod"
    }
  }
}
