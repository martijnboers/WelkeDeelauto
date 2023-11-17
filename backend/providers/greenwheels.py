from typing import List

from scrapy.http import HtmlResponse

from cache.store import strip_all_get_decimal
from models.interface import ProviderInterface, VehicleOption, Calculator


class GreenWheels(ProviderInterface):
    async def get_vehicles_options(self) -> List[VehicleOption]:
        pricing_page = self.get_pricing_html()[0]
        response = HtmlResponse(
            url=pricing_page.url, body=pricing_page.html, encoding="utf-8"
        )

        xpaths = [
            "/html/body/main/div[2]/div/div[4]/div/div[1]/div[2]/div/div[1]/div[3]/div[1]/h3",  # station per hour
            "/html/body/main/div[2]/div/div[4]/div/div[1]/div[2]/div/div[1]/div[3]/div[2]/h3",  # station per km
            "/html/body/main/div[2]/div/div[4]/div/div[1]/div[1]/div/div[1]/div[3]/div[1]/h3",  # stadsauto per hour
            "/html/body/main/div[2]/div/div[4]/div/div[1]/div[1]/div/div[1]/div[3]/div[2]/h3",  # stadsauto per km
        ]

        (
            station_per_hour,
            station_per_km,
            stadsauto_per_hour,
            stadsauto_per_km,
        ) = tuple(
            strip_all_get_decimal(response.xpath(xpath).extract()[0].strip())
            for xpath in xpaths
        )

        return [
            VehicleOption(
                calculator=Calculator(
                    price_per_minute=station_per_hour / 60,
                    price_per_km=station_per_km,
                    vehicle_request=self.vehicle_request,
                ),
                vehicle_image="greenwheels-station.png",
                provider="Greenwheels",
                type="Station wagon",
            ),
            VehicleOption(
                calculator=Calculator(
                    price_per_minute=stadsauto_per_hour / 60,
                    price_per_km=stadsauto_per_km,
                    vehicle_request=self.vehicle_request,
                ),
                vehicle_image="greenwheels-stadsauto.png",
                provider="Greenwheels",
                type="Stadsauto",
            ),
        ]
