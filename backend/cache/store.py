import hashlib
import os
import re

import redis
import requests
from fake_useragent import UserAgent
from decimal import Decimal

from models.models import ProviderStoreItem

redis_connection = redis.Redis(
    host=os.getenv("REDIS_HOST", "localhost"), port=6379, decode_responses=True
)


def hash_key(selector) -> str:
    return hashlib.sha256(selector.encode("utf-8")).hexdigest()


def strip_all_get_decimal(dirty) -> Decimal:
    pattern = r"\b\d+(?:,\d{1,2})?\b"

    match = re.search(pattern, dirty)
    return Decimal(match.group(0).replace(",", "."))


def get_provider_html(url: str) -> ProviderStoreItem:
    item = redis_connection.hgetall(hash_key(url))

    if not item:
        item = ProviderStoreItem(
            url=url,
            html=requests.get(url, headers={"User-Agent": UserAgent().random}).content,
        )
        redis_connection.hset(hash_key(item.url), mapping=item.model_dump())
        return item

    return ProviderStoreItem(**item) if item else None
