module "opennext" {
  source  = "nhs-england-tools/opennext/aws"
  version = "1.0.0" # Use the latest release from https://github.com/nhs-england-tools/terraform-aws-opennext/releases

  prefix              = "welkedeelauto"                     # Prefix for all created resources
  opennext_build_path = "./../frontend/.open-next"          # Path to your .open-next folder
  hosted_zone_id      = aws_route53_zone.welkedeelauto.zone_id  # The Route53 hosted zone ID for your domain name

  server_options = {
    reserved_concurrent_executions : 1
  }
  image_optimization_options = {
    reserved_concurrent_executions : 1
  }
  revalidation_options = {
    reserved_concurrent_executions : 1
  }

  warmer_options = {
    reserved_concurrent_executions : 1
  }

  cloudfront = {
    aliases             = [var.domain]
    acm_certificate_arn = module.acm_global.acm_certificate_arn
#     assets_paths        = ["/images/*"]
  }
}
