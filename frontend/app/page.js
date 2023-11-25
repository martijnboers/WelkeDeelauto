'use client'

import ProviderResults from "@/app/components/provider-results";
import RoutingInput from "@/app/components/routing-input";
import {useRouter, useSearchParams} from 'next/navigation';
import {useImmer} from "use-immer";
import {useEffect} from "react";

export default function Home() {
    const router = useRouter();
    const params = useSearchParams();


    const [tripInformation, setTripInformation] = useImmer({
        distance_kilometer: params.get("distance_kilometer") ?? 100,
        time_minutes: params.get("time_minutes60") ?? 60,
        roundtrip: params.get("roundtrip") ?? false,
        free_parking: params.get("free_parking") ?? false,
    });

    useEffect(() => {
        updateNavigationParams(tripInformation);
    }, [tripInformation]);

    const updateNavigationParams = (tripInfo) => {
        router.replace("/?"+ Object.keys(tripInfo)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(tripInfo[key])}`)
            .join('&'), { scroll: false, shallow: true });
    };

    return (
        <main>
            <RoutingInput tripInformation={tripInformation} setTripInformation={setTripInformation}/>
            <ProviderResults tripInformation={tripInformation}/>
        </main>
    )
}
