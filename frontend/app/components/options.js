export default function Options({ tripInformation, setTripInformation }) {
  const handleRoundTrip = (e) => {
    setTripInformation(update => {
      update.roundtrip = e.target.checked
    });
    let kilometers = tripInformation.distance_kilometer;
    let minutes = tripInformation.time_minutes;

    if (e.target.checked) {
      kilometers = kilometers * 2;
      minutes = minutes * 2;
    } else {
      kilometers = kilometers / 2;
      minutes = minutes / 2;
    }

    setTripInformation(update => {
      update.distance_kilometer = Math.floor(kilometers)
    });

    setTripInformation(update => {
      update.time_minutes = Math.floor(minutes)
    });
  };

  const handleFreeParking = (e) => {
    setTripInformation(update => {
      update.free_parking = e.target.checked
    });
  };

  return (
    <div className="mt-4 grid gap-2 sm:grid-cols-2">
      <label
        htmlFor="roundtrip"
        className="block flex w-full rounded-lg border border-gray-200 bg-white p-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
      >
        <input
          type="checkbox"
          className="mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
          id="roundtrip"
          value={tripInformation.roundtrip}
          onChange={handleRoundTrip}
        />
        <span className="ms-3 text-sm text-gray-500 dark:text-gray-400">
          Heen en weer
        </span>
      </label>

      <label
        htmlFor="include-scooters"
        className="block flex w-full rounded-lg border border-gray-200 bg-white p-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
      >
        <input
          type="checkbox"
          className="mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
          id="include-scooters"
          value={tripInformation.free_parking}
          onChange={handleFreeParking}
        />
        <span className="ms-3 text-sm text-gray-500 dark:text-gray-400">
          Gratis parkeren
        </span>
      </label>
    </div>
  );
}
