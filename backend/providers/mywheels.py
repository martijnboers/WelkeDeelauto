from decimal import Decimal
from typing import List

from scrapy.http import HtmlResponse

from cache.store import strip_all_get_decimal
from models.interface import ProviderInterface, VehicleOption, Calculator


class MyWheelsCalculator(Calculator):
    max_per_day: Decimal

    def total_price(self) -> Decimal:
        km_price = self.vehicle_request.distance_kilometer * self.price_per_km
        time_price = self.vehicle_request.time_minutes * self.price_per_minute
        return km_price + min(time_price, self.max_per_day)


class MyWheels(ProviderInterface):
    async def get_vehicles_options(self) -> List[VehicleOption]:
        pricing_page = self.get_pricing_html()[0]
        response = HtmlResponse(
            url=pricing_page.url, body=pricing_page.html, encoding="utf-8"
        )

        xpaths = [
            "/html/body/div/div[1]/main/div[2]/div/div[1]/div/div/div[1]/div/div[5]/div[1]/span[1]",  # small per hour
            "/html/body/div/div[1]/main/div[2]/div/div[1]/div/div/div[1]/div/div[5]/div[2]",  # small max per day
            "/html/body/div/div[1]/main/div[2]/div/div[1]/div/div/div[1]/div/div[5]/div[3]/div",  # small max per km
            "/html/body/div/div[1]/main/div[2]/div/div[1]/div/div/div[2]/div/div[5]/div[1]/span[1]",  # medium per hour
            "/html/body/div/div[1]/main/div[2]/div/div[1]/div/div/div[2]/div/div[5]/div[2]",  # medium max per day
            "/html/body/div/div[1]/main/div[2]/div/div[1]/div/div/div[2]/div/div[5]/div[3]/div",  # medium per km
            "/html/body/div/div[1]/main/div[2]/div/div[1]/div/div/div[3]/div/div[5]/div[1]/span[1]",  # special per hour
            "/html/body/div/div[1]/main/div[2]/div/div[1]/div/div/div[3]/div/div[5]/div[2]",  # special max per day
            "/html/body/div/div[1]/main/div[2]/div/div[1]/div/div/div[3]/div/div[5]/div[3]/div",  # special per km
        ]

        (
            small_per_hour,
            small_per_day,
            small_per_km,
            medium_per_hour,
            medium_max_per_day,
            medium_per_km,
            special_per_hour,
            special_max_per_day,
            special_per_km,
        ) = tuple(
            strip_all_get_decimal(response.xpath(xpath).extract()[0].strip())
            for xpath in xpaths
        )

        return [
            VehicleOption(
                calculator=MyWheelsCalculator(
                    price_per_minute=small_per_hour / 60,
                    price_per_km=small_per_km,
                    max_per_day=small_per_day,
                    vehicle_request=self.vehicle_request,
                ),
                vehicle_image="mywheels-small.png",
                provider="MyWheels",
                type="Klein",
            ),
            VehicleOption(
                calculator=MyWheelsCalculator(
                    price_per_minute=medium_per_hour / 60,
                    price_per_km=medium_per_km,
                    max_per_day=medium_max_per_day,
                    vehicle_request=self.vehicle_request,
                ),
                vehicle_image="mywheels-middle.png",
                provider="MyWheels",
                type="Middel",
            ),
            VehicleOption(
                calculator=MyWheelsCalculator(
                    price_per_minute=special_per_hour / 60,
                    price_per_km=special_per_km,
                    max_per_day=special_max_per_day,
                    vehicle_request=self.vehicle_request,
                ),
                vehicle_image="mywheels-special.png",
                provider="MyWheels",
                type="Speciaal",
            ),
        ]
