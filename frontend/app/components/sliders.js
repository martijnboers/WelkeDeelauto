import React from "react";
import { getHumanReadable } from "@/app/util/util";

export default function Sliders({ tripInformation, updateTripDetails }) {
  const handleKmChange = (e) => {
    updateTripDetails("distance_kilometer", e.target.value);
  };

  const handleTimeChange = (e) => {
    updateTripDetails("time_minutes", e.target.value);
  };
  return (
    <>
      <div className="relative flex items-center py-5">
        <div className="flex-grow border-t border-dashed border-gray-400"></div>
        <span className="mx-4 flex-shrink text-gray-400">Handmatig</span>
        <div className="flex-grow border-t border-dashed border-gray-400"></div>
      </div>

      <div className="relative mb-3">
        <label htmlFor="km-range" className="text-sm leading-7 text-gray-600">
          Benodigde kilometers
        </label>
        <input
          id="km-range"
          type="range"
          value={tripInformation.distance_kilometer}
          min="0"
          max="1000"
          onChange={handleKmChange}
          name="kilometers"
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
        />
        <div id="km-range-value" className="text-center text-sm text-gray-700">
          {tripInformation.distance_kilometer + " Kilometer"}
        </div>
      </div>

      <div className="relative mb-3">
        <label htmlFor="time-range" className="text-sm leading-7 text-gray-600">
          Huur tijd
        </label>
        <input
          id="time-range"
          type="range"
          value={tripInformation.time_minutes}
          min="0"
          max="1440"
          step="15"
          name="kilometers"
          onChange={handleTimeChange}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
        />
        <div
          id="time-range-value"
          className="text-center text-sm text-gray-700"
        >
          {getHumanReadable(tripInformation.time_minutes)}
        </div>
      </div>
    </>
  );
}
