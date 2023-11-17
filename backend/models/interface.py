import uuid
from abc import ABC, abstractmethod
from decimal import Decimal
from typing import List, Optional, Dict

from pydantic import BaseModel, Field, computed_field

from cache.store import get_provider_html
from models.models import ProviderVehiclesRequest, ProviderStoreItem


class Calculator(ABC, BaseModel):
    vehicle_request: ProviderVehiclesRequest
    price_per_minute: Optional[Decimal]
    price_per_km: Optional[Decimal]

    def total_price(self) -> Decimal:
        return (self.vehicle_request.distance_kilometer * self.price_per_km) + (
            self.vehicle_request.time_minutes * self.price_per_minute
        )


class VehicleOption(BaseModel):
    vehicle_image: str
    provider: str
    type: str

    calculator: Calculator = Field(exclude=True)

    @computed_field
    @property
    def total_price(self) -> Decimal:
        return self.calculator.total_price().quantize(Decimal("0.00"))

    @computed_field
    @property
    def id(self) -> str:
        return str(uuid.uuid4())


class ProviderInterface(ABC, BaseModel):
    vehicle_request: ProviderVehiclesRequest
    pricing_urls: Optional[List[str]] = Field(required=False, default=None)

    def get_pricing_html(self) -> List[ProviderStoreItem]:
        assert self.pricing_urls
        return [get_provider_html(url) for url in self.pricing_urls]

    @abstractmethod
    async def get_vehicles_options(self) -> List[VehicleOption]:
        raise NotImplementedError("Forgot to implement total method")
