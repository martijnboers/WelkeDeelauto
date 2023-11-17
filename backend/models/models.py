from datetime import datetime

from pydantic import BaseModel, Field


class ProviderVehiclesRequest(BaseModel):
    distance_kilometer: int
    time_minutes: int
    roundtrip: bool
    free_parking: bool


class ProviderStoreItem(BaseModel):
    url: str
    html: str
    generated_at: float = Field(default=datetime.now().timestamp())
