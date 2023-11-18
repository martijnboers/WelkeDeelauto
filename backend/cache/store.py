import hashlib
import re
from decimal import Decimal

import requests
from fake_useragent import UserAgent

from models.models import ProviderStoreItem

local_cache = {}


def hash_key(selector) -> str:
    return hashlib.sha256(selector.encode("utf-8")).hexdigest()


def strip_all_get_decimal(dirty) -> Decimal:
    pattern = r"\b\d+(?:,\d{1,2})?\b"

    match = re.search(pattern, dirty)
    return Decimal(match.group(0).replace(",", "."))


def get_provider_html(url: str) -> ProviderStoreItem:
    item = local_cache.get(hash_key(url))

    if not item:
        item = ProviderStoreItem(
            url=url,
            html=requests.get(url, headers={"User-Agent": UserAgent().random}).content,
        )
        local_cache[hash_key(item.url)] = item

    return item
