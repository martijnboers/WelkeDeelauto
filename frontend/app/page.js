'use client'

import ProviderResults from "@/app/components/provider-results";
import RoutingInput from "@/app/components/routing-input";
import {useState, useEffect} from "react";
import {useRouter, useSearchParams} from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const params = useSearchParams();


    const [tripInformation, setTripInformation] = useState({
        distance_kilometer: params.get("distance_kilometer") ?? 100,
        time_minutes: params.get("time_minutes60") ?? 60,
        roundtrip: params.get("roundtrip") ?? false,
        free_parking: params.get("free_parking") ?? false
    });

    const handleInputChange = (key, newValue) => {
        setTripInformation((prevData) => ({...prevData, [key]: newValue}));
    };

    // useEffect(() => {
    //     updateNavigationParams(tripInformation);
    // }, [tripInformation]);
    //
    // const updateNavigationParams = (tripInfo) => {
    //     router.replace("/?"+ Object.keys(tripInfo)
    //         .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(tripInfo[key])}`)
    //         .join('&'), { scroll: false });
    // };

    return (
        <main>
            <RoutingInput tripInformation={tripInformation} updateTripDetails={handleInputChange}/>
            <ProviderResults tripInformation={tripInformation}/>
        </main>
    )
}
