import time
from typing import List

from fastapi import FastAPI
from mangum import Mangum
from starlette.middleware.cors import CORSMiddleware

from models.models import ProviderVehiclesRequest
from models.interface import VehicleOption
from repository import get_options_ordered

app = FastAPI()

origins = ["http://localhost", "http://localhost:3000", "https://welkedeelauto.nl"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

duck = str


@app.get("/")
def home() -> duck:
    return "🦆"


@app.post("/providers")
async def routing_request(request: ProviderVehiclesRequest) -> List[VehicleOption]:
    return await get_options_ordered(request)


handler = Mangum(app, lifespan="off")
