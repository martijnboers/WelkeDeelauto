from decimal import Decimal
from typing import List

from scrapy.http import HtmlResponse

from cache.store import strip_all_get_decimal
from models.interface import ProviderInterface, VehicleOption, Calculator


class SixtShareCalculator(Calculator):
    unlock_fee: int
    pay_km_from: int = 200
    three_hour_price: int
    six_hour_price: int

    def total_price(self) -> Decimal:
        price = self.unlock_fee
        hours = self.vehicle_request.time_minutes / 60
        minutes = self.vehicle_request.time_minutes % 60

        if 3 <= hours <= 6:
            price += self.three_hour_price
            price += self.price_per_minute * minutes
            self.pay_km_from = 80
        elif hours > 6:
            price += self.six_hour_price
            price += self.price_per_minute * minutes
            self.pay_km_from = 120
        else:
            price += self.price_per_minute * self.vehicle_request.time_minutes

        if self.vehicle_request.distance_kilometer > self.pay_km_from:
            price += self.price_per_km * (
                self.vehicle_request.distance_kilometer - self.pay_km_from
            )

        return Decimal(price)


class SixtShare(ProviderInterface):
    async def get_vehicles_options(self) -> List[VehicleOption]:
        pricing_page = self.get_pricing_html()[0]
        response = HtmlResponse(
            url=pricing_page.url, body=pricing_page.html, encoding="utf-8"
        )

        xpaths = [
            "/html/body/main/section[5]/section[3]/div/div/section[1]/div/div[2]/table/tbody/tr[1]/td[2]",  # price per minute
            "/html/body/main/section[5]/section[3]/div/div/section[1]/div/div[2]/table/tbody/tr[3]/td[2]",  # price per km
            "/html/body/main/section[5]/section[3]/div/div/section[2]/div/div[2]/table/tbody/tr[1]/td[2]",  # three hours class 1
            "/html/body/main/section[5]/section[3]/div/div/section[2]/div/div[2]/table/tbody/tr[1]/td[3]",  # six hours class 1
            "/html/body/main/section[5]/section[3]/div/div/section[2]/div/div[2]/table/tbody/tr[2]/td[2]",  # three hours class 2
            "/html/body/main/section[5]/section[3]/div/div/section[2]/div/div[2]/table/tbody/tr[2]/td[3]",  # six hours class 2
            "/html/body/main/section[5]/section[3]/div/div/section[2]/div/div[2]/table/tbody/tr[3]/td[2]",  # three hours class 3
            "/html/body/main/section[5]/section[3]/div/div/section[2]/div/div[2]/table/tbody/tr[3]/td[3]",  # six hours class 3
        ]

        (
            price_per_minute,
            price_per_km,
            three_hours_class_1,
            six_hours_class_1,
            three_hours_class_2,
            six_hours_class_2,
            three_hours_class_3,
            six_hours_class_3,
        ) = tuple(
            strip_all_get_decimal(response.xpath(xpath).extract()[0].strip())
            for xpath in xpaths
        )

        class_3_calc = SixtShareCalculator(
            price_per_minute=price_per_minute,
            price_per_km=price_per_km,
            three_hour_price=int(three_hours_class_3),
            six_hour_price=int(six_hours_class_3),
            unlock_fee=3,
            vehicle_request=self.vehicle_request,
        )
        return [
            VehicleOption(
                calculator=SixtShareCalculator(
                    price_per_minute=price_per_minute,
                    price_per_km=price_per_km,
                    three_hour_price=int(three_hours_class_1),
                    six_hour_price=int(six_hours_class_1),
                    unlock_fee=1,
                    vehicle_request=self.vehicle_request,
                ),
                vehicle_image="sixt-share-class-1.png",
                provider="Sixt Share",
                type="Klasse 1",
            ),
            VehicleOption(
                calculator=SixtShareCalculator(
                    price_per_minute=price_per_minute,
                    price_per_km=price_per_km,
                    three_hour_price=int(three_hours_class_2),
                    six_hour_price=int(six_hours_class_2),
                    unlock_fee=1,
                    vehicle_request=self.vehicle_request,
                ),
                vehicle_image="sixt-share-class-2.png",
                provider="Sixt Share",
                type="Klasse 2",
            ),
            VehicleOption(
                calculator=class_3_calc,
                vehicle_image="sixt-share-class-3.png",
                provider="Sixt Share",
                type="Klasse 3",
            ),
            VehicleOption(
                calculator=class_3_calc,
                vehicle_image="sixt-share-class-4.png",
                provider="Sixt Share",
                type="Klasse 4",
            ),
        ]
