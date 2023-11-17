from decimal import Decimal
from typing import List

from models.interface import ProviderInterface, VehicleOption, Calculator


class OwnCar(ProviderInterface):
    """
    https://www.ns.nl/uitgelicht/reisvergelijker
    """

    async def get_vehicles_options(self) -> List[VehicleOption]:
        return [
            VehicleOption(
                calculator=Calculator(
                    price_per_minute=Decimal("0.00"),
                    price_per_km=Decimal("0.215"),
                    vehicle_request=self.vehicle_request,
                ),
                vehicle_image="own-car.png",
                provider="Eigen auto",
                type="Benzine Auto",
            )
        ]
