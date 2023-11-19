module "next_serverless" {
  source  = "Nexode-Consulting/nextjs-serverless/aws"

  deployment_name = "nextjs-welkedeelauto"
  region          = var.region
  base_dir        = "./../frontend/"

  next_lambda_env_vars = {
    BACKEND_URL = "api.welkedeelauto.nl"
  }

  runtime = "nodejs18.x"

  cloudfront_acm_certificate_arn = module.acm_global.acm_certificate_arn
  cloudfront_aliases             = [var.domain]
}
