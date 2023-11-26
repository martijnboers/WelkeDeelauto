import Vehicles from "@/app/components/vehicles";

export default function ProviderResults({ tripInformation }) {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              Gedeelde vervoersmogelijkheden
            </h1>
            <div className="h-1 w-20 rounded bg-sharedride-500"></div>
          </div>
          <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
            De verstrekte informatie is altijd actueel, maar wordt
            geautomatiseerd gegenereerd op basis van een standaard (gratis)
            abonnement. Door speciale aanbiedingen of nieuwe regels kunnen de
            prijzen desondanks afwijken. Het is raadzaam om altijd de prijs
            handmatig in de betreffende app/website zelf te controleren. Deze
            website is niet verbonden aan de aanbieders van de deelauto's.
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          <Vehicles tripInformation={tripInformation} />
        </div>
      </div>
    </section>
  );
}
