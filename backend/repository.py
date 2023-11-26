import asyncio
from typing import List

from models.interface import VehicleOption
from models.models import ProviderVehiclesRequest
from providers.greenwheels import GreenWheels
from providers.hely import Hely
from providers.mywheels import MyWheels
from providers.owncar import OwnCar
from providers.sharenow import ShareNow
from providers.sixtshare import SixtShare
from providers.snappcar import SnappCar


async def get_options_ordered(
    vehicle_request: ProviderVehiclesRequest,
) -> List[VehicleOption]:
    providers = [
        GreenWheels(
            vehicle_request=vehicle_request,
            pricing_urls=["https://www.greenwheels.nl/en-us/rates"],
            free_parking=False,
        ),
        MyWheels(
            vehicle_request=vehicle_request,
            pricing_urls=["https://mywheels.nl/en/tarieven"],
            free_parking=False,
        ),
        ShareNow(
            vehicle_request=vehicle_request,
            pricing_urls=[
                "https://www.share-now.com/nl/en/peugeot-e-208/",
                "https://www.share-now.com/nl/en/fiat-500e/",
                "https://www.share-now.com/nl/en/pricing/"
            ],
            free_parking=True,
        ),
        SixtShare(
            vehicle_request=vehicle_request,
            pricing_urls=["https://www.sixt.nl/share/tarieven/#/"],
            free_parking=True,
        ),
        Hely(
            vehicle_request=vehicle_request,
            pricing_urls=["https://hely.com/tarieven?lng=en"],
            free_parking=True,
        ),
        OwnCar(vehicle_request=vehicle_request, free_parking=False),
        SnappCar(vehicle_request=vehicle_request, free_parking=False),
    ]

    if vehicle_request.free_parking is True:
        providers = filter(lambda x: x.free_parking, providers)

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
