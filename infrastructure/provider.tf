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
      version = ">= 2.7.0"
      source  = "hashicorp/aws"
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
  region  = "eu-west-1"

  # skip_requesting_account_id should be disabled to generate valid ARN in apigatewayv2_api_execution_arn
  skip_requesting_account_id = false
}
