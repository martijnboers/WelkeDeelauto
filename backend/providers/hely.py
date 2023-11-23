import json
from typing import List
from decimal import Decimal

import jq
from scrapy.http import HtmlResponse

from cache.store import strip_all_get_decimal
from models.interface import ProviderInterface, VehicleOption, Calculator


class Hely(ProviderInterface):
    async def get_vehicles_options(self) -> List[VehicleOption]:
        pricing_page = self.get_pricing_html()[0]
        response = HtmlResponse(
            url=pricing_page.url, body=pricing_page.html, encoding="utf-8"
        )

        city_car = e_city_car = transporter_car = e_comfort_car = None

        for element in (
            jq.compile(".. | select(.priceTableTariffRows?) | .priceTableTariffRows")
            .input_text(response.css("script::text").extract()[0])
            .all()[0]
        ):
            if element["cell1Heading"]["en"] == "CITY CAR":
                city_car = strip_all_get_decimal(element["cell2Heading"]["en"])
            if element["cell1Heading"]["en"] == "E-CITY CAR":
                e_city_car = strip_all_get_decimal(element["cell2Heading"]["en"])
            if element["cell1Heading"]["en"] == "TRANSPORTER CAR":
                transporter_car = strip_all_get_decimal(element["cell2Heading"]["en"])
            if element["cell1Heading"]["en"] == "E-COMFORT CAR":
                e_comfort_car = strip_all_get_decimal(element["cell2Heading"]["en"])

        return [
            VehicleOption(
                calculator=Calculator(
                    price_per_minute=city_car / 60,
                    price_per_km=Decimal(0),
                    vehicle_request=self.vehicle_request,
                ),
                vehicle_image="hely-city-car.png",
                provider="Hely",
                type="City Car",
            ),
            VehicleOption(
                calculator=Calculator(
                    price_per_minute=e_city_car / 60,
                    price_per_km=Decimal(0),
                    vehicle_request=self.vehicle_request,
                ),
                electric=True,
                vehicle_image="hely-e-city-car.png",
                provider="Hely",
                type="E-City Car",
            ),
            VehicleOption(
                calculator=Calculator(
                    price_per_minute=transporter_car / 60,
                    price_per_km=Decimal(0),
                    vehicle_request=self.vehicle_request,
                ),
                vehicle_image="hely-comfort.png",
                provider="Hely",
                type="Transporter Car",
            ),
            VehicleOption(
                calculator=Calculator(
                    price_per_minute=e_comfort_car / 60,
                    price_per_km=Decimal(0),
                    vehicle_request=self.vehicle_request,
                ),
                electric=True,
                vehicle_image="hely-comfort.png",
                provider="Hely",
                type="E-Comfort Car",
            ),
        ]
