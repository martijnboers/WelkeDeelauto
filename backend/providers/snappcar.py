from decimal import Decimal
from typing import List

from pydantic import Field

from models.interface import ProviderInterface, VehicleOption, Calculator


class SnappCarCalculator(Calculator):
    average_price: Decimal = Field(default=Decimal("40"))
    liter_per_km: Decimal = Field(default=Decimal("0.041"))
    liter_price: Decimal = Field(default=Decimal("2.122"))

    def total_price(self) -> Decimal:
        price = self.average_price

        if self.vehicle_request.distance_kilometer > 200:
            price += (self.vehicle_request.distance_kilometer - 200) * self.price_per_km

        price += (
            self.liter_per_km * self.liter_price
        ) * self.vehicle_request.distance_kilometer
        return price


class SnappCar(ProviderInterface):
    async def get_vehicles_options(self) -> List[VehicleOption]:
        return [
            VehicleOption(
                calculator=SnappCarCalculator(
                    price_per_minute=Decimal("0.00"),
                    price_per_km=Decimal("0.15"),
                    vehicle_request=self.vehicle_request,
                ),
                vehicle_image="snappcar.png",
                provider="Snappcar",
                type="Gemiddelde kosten",
            )
        ]
