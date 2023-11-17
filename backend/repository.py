import asyncio
from typing import List

from models.interface import VehicleOption
from models.models import ProviderVehiclesRequest
from providers.greenwheels import GreenWheels
from providers.mywheels import MyWheels
from providers.owncar import OwnCar
from providers.sharenow import ShareNow
from providers.sixtshare import SixtShare


async def get_options_ordered(
    vehicle_request: ProviderVehiclesRequest,
) -> List[VehicleOption]:
    providers = [
        GreenWheels(
            vehicle_request=vehicle_request,
            pricing_urls=["https://www.greenwheels.nl/en-us/rates"],
        ),
        MyWheels(
            vehicle_request=vehicle_request,
            pricing_urls=["https://mywheels.nl/en/tarieven"],
        ),
        ShareNow(
            vehicle_request=vehicle_request,
            pricing_urls=[
                "https://www.share-now.com/nl/en/peugeot-e-208/",
                "https://www.share-now.com/nl/en/fiat-500e/",
            ],
        ),
        SixtShare(
            vehicle_request=vehicle_request,
            pricing_urls=["https://www.sixt.nl/share/tarieven/#/"],
        ),
        OwnCar(vehicle_request=vehicle_request),
    ]
    return sorted(
        [
            vehicle
            for provider_result in await asyncio.gather(
                *(p.get_vehicles_options() for p in providers)
            )
            for vehicle in provider_result
        ],
        key=lambda x: x.total_price,
    )
