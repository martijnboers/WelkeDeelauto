"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import VehicleSkeleton from "@/app/components/vehicles-skeleton";

export default function Vehicles({ tripInformation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripInformation),
      signal
    };

    // Make an API call to fetch the data
    fetch(process.env.BACKEND_URL + "/providers", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result); //
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even in case of an error
      });
    return () => controller.abort();
  }, [tripInformation]);

  if (!data) return <p>No vehicles found</p>;
  if (loading) return <VehicleSkeleton number={8}></VehicleSkeleton>;

  return (
    <>
      {data.map((item) => (
        <Vehicle key={item.id} data={item} />
      ))}
    </>
  );
}

function Vehicle({ data }) {
  // Render your component using the data
  return (
    <div className="p-4 md:w-1/2 xl:w-1/4">
      <div className="rounded-lg bg-gray-100 p-6">
        <Image
          src={"/" + data.vehicle_image}
          alt="Picture of car"
          width={400}
          height={400}
        />
        <h3 className="title-font text-xs font-medium tracking-widest text-blue-500">
          {data.type}
        </h3>
        <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
          {data.provider}
        </h2>
        <p className="text-base leading-relaxed">
          Hoeveel kost het: €{data.total_price}
        </p>
      </div>
    </div>
  );
}
