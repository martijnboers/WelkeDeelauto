from decimal import Decimal
from typing import List

from scrapy.http import HtmlResponse

from cache.store import strip_all_get_decimal
from models.interface import ProviderInterface, VehicleOption, Calculator


class ShareNowCalculator(Calculator):
    hour_price: Decimal

    def total_price(self) -> Decimal:
        hours = self.vehicle_request.time_minutes / 60
        minutes = self.vehicle_request.time_minutes % 60
        total_price = +(Decimal(hours) * self.hour_price) + (
            Decimal(minutes) * self.price_per_minute
        )
        if self.vehicle_request.distance_kilometer > 200:
            total_price += (
                self.vehicle_request.distance_kilometer - 200
            ) * self.price_per_km

        return total_price


class ShareNow(ProviderInterface):
    async def get_vehicles_options(self) -> List[VehicleOption]:
        peugeot = self.get_pricing_html()[0]
        fiat = self.get_pricing_html()[1]

        peugeot_response = HtmlResponse(
            url=peugeot.url, body=peugeot.html, encoding="utf-8"
        )
        fiat_response = HtmlResponse(url=fiat.url, body=peugeot.html, encoding="utf-8")

        fiat_xpaths = [
            "/html/body/div[1]/div/div/div/div/section[2]/div/div[3]/div/div[1]/div[1]/div/div[1]/h3",  # fiat per minute
            "/html/body/div[1]/div/div/div/div/section[2]/div/div[3]/div/div[1]/div[2]/div/div[2]/div/span/p/strong",  # fiat per km
            "/html/body/div[1]/div/div/div/div/section[2]/div/div[3]/div/div[1]/div[2]/div/div[1]/h3",  # fiat per hour
        ]

        (fiat_per_minute, fiat_per_km, fiat_per_hour) = tuple(
            strip_all_get_decimal(fiat_response.xpath(xpath).extract()[0].strip())
            for xpath in fiat_xpaths
        )

        peugeot_xpaths = [
            "/html/body/div[1]/div/div/div/div/section[2]/div/div[3]/div/div[1]/div[1]/div/div[1]/h3",  # peugeot per minute
            "/html/body/div[1]/div/div/div/div/section[2]/div/div[3]/div/div[1]/div[2]/div/div[2]/div/span/p/strong",  # peugeot per km
            "/html/body/div[1]/div/div/div/div/section[2]/div/div[3]/div/div[1]/div[2]/div/div[1]/h3",  # peugeot per hour
        ]

        (peugeot_per_minute, peugeot_per_km, peugeot_per_hour) = tuple(
            strip_all_get_decimal(peugeot_response.xpath(xpath).extract()[0].strip())
            for xpath in peugeot_xpaths
        )

        return [
            VehicleOption(
                calculator=ShareNowCalculator(
                    price_per_minute=fiat_per_minute,
                    price_per_km=fiat_per_km,
                    hour_price=fiat_per_hour,
                    vehicle_request=self.vehicle_request,
                ),
                electric=True,
                vehicle_image="share-now-fiat-500.png",
                provider="SHARE NOW",
                type="Fiat 500",
            ),
            VehicleOption(
                calculator=ShareNowCalculator(
                    price_per_minute=peugeot_per_minute,
                    price_per_km=peugeot_per_km,
                    hour_price=peugeot_per_hour,
                    vehicle_request=self.vehicle_request,
                ),
                electric=True,
                vehicle_image="share-now-peugeot.png",
                provider="SHARE NOW",
                type="Peugeot e-208",
            ),
        ]
