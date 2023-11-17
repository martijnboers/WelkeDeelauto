export default function VehicleSkeleton({ number }) {
  return Array(number)
    .fill(0)
    .map((el, index) => (
      <div key={index} className="p-4 md:w-1/2 xl:w-1/4">
        <div className="animate-pulse rounded-lg bg-gray-100 p-6">
          <div className="mb-4 h-40 w-full bg-gray-200"></div>
          <div className="mb-2 h-4 w-1/2 bg-gray-200"></div>
          <div className="mb-2 h-6 w-full bg-gray-200"></div>
          <div className="mb-2 h-4 w-1/2 bg-gray-200"></div>
        </div>
      </div>
    ));
}
