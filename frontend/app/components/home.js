"use client";

import ProviderResults from "@/app/components/provider-results";
import RoutingInput from "@/app/components/routing-input";
import { useRouter, useSearchParams } from "next/navigation";
import { useImmer } from "use-immer";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const params = useSearchParams();
  const [currentUrl, setCurrenUrl] = useState(false);

  const [tripInformation, setTripInformation] = useImmer({
    distance_kilometer: params.get("distance_kilometer") ?? 100,
    time_minutes: params.get("time_minutes") ?? 60,
    roundtrip: params.get("roundtrip") === "true" ?? false,
    free_parking: params.get("free_parking") === "true" ?? false,
  });

  useEffect(() => {
    updateNavigationParams(tripInformation);
  }, [tripInformation]);

  const updateNavigationParams = (tripInfo) => {
    let newUrl =
      "/?" +
      Object.keys(tripInfo)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(tripInfo[key])}`
        )
        .join("&");
    router.replace(newUrl, { scroll: false, shallow: true });
    setCurrenUrl("https://welkedeelauto.nl" + newUrl);
  };

  return (
    <main>
      <RoutingInput
        tripInformation={tripInformation}
        setTripInformation={setTripInformation}
        currentUrl={currentUrl}
      />
      <ProviderResults tripInformation={tripInformation} />
    </main>
  );
}
