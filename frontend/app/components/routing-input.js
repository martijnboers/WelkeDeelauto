// noinspection JSUnresolvedReference

"use client";
import React, { useRef, useState } from "react";
import process from "@/next.config";
import {
  Autocomplete,
  DirectionsRenderer,
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";
import flatPale from "../map-styles/flat-pale.json";
import Sliders from "@/app/components/sliders";
import Options from "@/app/components/options";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { useUrl } from "nextjs-current-url";

const TOKEN = process.env.GOOGLE_MAPS_ACCESS_TOKEN;

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 52.377956,
  lng: 4.89707,
};

export default function RoutingInput({ tripInformation, updateTripDetails }) {
  const { isLoaded } = useJsApiLoader({
    id: "e3b5ba4bb308558e",
    googleMapsApiKey: TOKEN,
    libraries: ["places"],
  });

  const { href } = useUrl() ?? {};
  const [copied, setCopied] = useState(false);

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const originRef = useRef(null);
  const destinationRef = useRef(null);

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);

    updateTripDetails(
      "distance_kilometer",
      Math.floor(results.routes[0].legs[0].distance.value / 1000)
    );
    updateTripDetails(
      "time_minutes",
      Math.floor(results.routes[0].legs[0].duration.value / 60)
    );
  }

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <section className="body-font relative text-gray-600">
      <div className="absolute inset-0 bg-gray-300">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            styles: flatPale,
          }}
        >
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
          <></>
        </GoogleMap>
      </div>

      <div className="container mx-auto flex px-5 py-20">
        <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <div className="flex justify-between">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
              Waar wil je naar toe?
            </h2>
            <div className="absolute right-6 top-5">
              <CopyToClipboard text={href} onCopy={() => setCopied(true)}>
                <button className="ml-4 inline-flex h-10 w-14 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    />
                  </svg>
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <p className="mb-5 mt-2 leading-relaxed text-gray-600">
            Vul hier je start en eind adres in om de voordeligste
            deel-vervoerder te kiezen!
          </p>
          <ol className="border-gray-250 relative border-l dark:border-gray-700">
            <li className="mb-5 ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="relative mb-4">
                <label
                  htmlFor="start-address"
                  className="text-base leading-7 text-gray-600"
                >
                  Start adres
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <Autocomplete
                    onPlaceChanged={calculateRoute}
                    onLoad={() => setDirectionsResponse(null)}
                    restrictions={{ country: ["nl", "de", "be"] }}
                  >
                    <input
                      type="search"
                      id="start-address"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Amsterdam"
                      ref={originRef}
                      required
                    />
                  </Autocomplete>
                </div>
              </div>
            </li>
            <li className="ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="relative mb-2">
                <label
                  htmlFor="end-address"
                  className="text-base leading-7 text-gray-600"
                >
                  Eind adres
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <Autocomplete
                    onPlaceChanged={calculateRoute}
                    onLoad={() => setDirectionsResponse(null)}
                    restrictions={{ country: ["nl", "de", "be"] }}
                  >
                    <input
                      type="search"
                      id="end-address"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Den Haag"
                      ref={destinationRef}
                      required
                    />
                  </Autocomplete>
                </div>
              </div>
            </li>
          </ol>
          <Options
            tripInformation={tripInformation}
            updateTripDetails={updateTripDetails}
          />
          <Sliders
            tripInformation={tripInformation}
            updateTripDetails={updateTripDetails}
          />
        </div>
      </div>
    </section>
  ) : (
    <div>Loading map</div>
  );
}
