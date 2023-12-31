resource "aws_route53_zone" "welkedeelauto" {
  name = var.domain
}

module "acm" {
  source  = "terraform-aws-modules/acm/aws"
  version = "~> 3.0"

  domain_name               = var.domain
  zone_id                   = aws_route53_zone.welkedeelauto.zone_id
  subject_alternative_names = [var.api_domain]

  wait_for_validation = true

  tags = {
    Name = "Cert ${var.domain}"
  }
}

module "acm_global" {
  source  = "terraform-aws-modules/acm/aws"
  version = "4.3.2"

  domain_name = var.domain
  zone_id     = aws_route53_zone.welkedeelauto.zone_id

  providers = {
    aws = aws.global
  }
}

#resource "aws_route53_record" "next_cloudfront_alias" {
#  zone_id = aws_route53_zone.welkedeelauto.zone_id
#  name    = var.domain
#  type    = "A"
#
#  allow_overwrite = true
#
#  alias {
#    name                   = module.next_serverless.cloudfront_url
#    zone_id                = module.next_serverless.distribution.next_distribution.hosted_zone_id
#    evaluate_target_health = false
#  }
#}

resource "aws_route53_record" "api" {
  zone_id = aws_route53_zone.welkedeelauto.zone_id
  name    = var.api_domain
  type    = "A"

  alias {
    name                   = module.api_gateway.apigatewayv2_domain_name_configuration[0].target_domain_name
    zone_id                = module.api_gateway.apigatewayv2_domain_name_configuration[0].hosted_zone_id
    evaluate_target_health = false
  }
}

