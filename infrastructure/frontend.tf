module "opennext" {
  source  = "github.com/martijnboers/terraform-aws-opennext/"

  prefix              = "welkedeelauto"                     # Prefix for all created resources
  opennext_build_path = "./../frontend/.open-next"          # Path to your .open-next folder
  hosted_zone_id      = aws_route53_zone.welkedeelauto.zone_id  # The Route53 hosted zone ID for your domain name

  cloudfront = {
    aliases             = [var.domain]
    acm_certificate_arn = module.acm_global.acm_certificate_arn
  }
}
