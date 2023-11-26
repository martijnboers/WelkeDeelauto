import Link from "next/link";

export default function About() {
  return (
    <section className="flex items-center bg-gray-100 py-11 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-sharedride-100 px-2 py-px text-xs font-medium leading-5 text-sharedride-500 shadow-sm dark:bg-gray-700 dark:text-gray-400">
            FAQ
          </span>
          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-gray-700 dark:text-gray-300 md:text-5xl">
            Wat doet deze website?
          </h2>
          <p className="mb-24 text-lg font-medium text-gray-500 dark:text-gray-400">
            Al jarenlang maak ik gebruik van deelauto's, en ik wilde een
            eenvoudige manier creëren om alle prijzen overzichtelijk te hebben.
            Aangezien de kosten van deze diensten sterk variëren door benzine prijzen of
            concurrentie tonen andere online bronnen verouderde prijzen. Daarom
            heb ik deze website zo gemaakt dat deze automatisch de laatste
            prijzen ophaalt en een makkelijke methode geeft om deelauto
            aanbieders te vergelijken voor jou trip. De broncode is vrij
            beschikbaar indien je benieuwd bent hoe dit werkt: <br />
            <Link href={"https://github.com/martijnboers/WelkeDeelauto"}>
              https://github.com/martijnboers/WelkeDeelauto
            </Link>
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-16 w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative h-full rounded-md bg-gray-50 px-8 pb-8 pt-16 shadow-md transition duration-200 dark:bg-gray-900 ">
              <div className="absolute left-1/2 top-0 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white transition duration-200 dark:bg-gray-800">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sharedride-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-patch-question h-6 w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                    <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="mb-4 max-w-xs text-xl font-bold leading-7 text-gray-700 dark:text-gray-300">
                Waarom zou je verschillende aanbieders gebruiken?
              </h2>
              <p className="font-medium text-gray-500 transition duration-200 dark:text-gray-500">
                Als je experimenteert met de afstand en tijd, zul je merken dat
                verschillende aanbieders goedkoper of duurder kunnen worden. Op
                dit moment lijkt het erop dat elektrische auto's over het
                algemeen voordeliger zijn, tenzij je van plan bent om de auto de
                hele dag te gebruiken of meer kilometers wilt afleggen dan de
                actieradius van de auto toelaat.
              </p>
            </div>
          </div>
          <div className="mb-16 w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative h-full rounded-md bg-gray-50 px-8 pb-8 pt-16 shadow-md transition duration-200 dark:bg-gray-900 ">
              <div className="absolute left-1/2 top-0 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white transition duration-200 dark:bg-gray-800">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sharedride-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-patch-question h-6 w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                    <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="mb-4 max-w-xs text-xl font-bold leading-7 text-gray-700 dark:text-gray-300">
                Let op andere kosten
              </h2>
              <p className="font-medium text-gray-500 transition duration-200 dark:text-gray-500">
                Het verschilt of het parkeren is inbegrepen, en elke aanbieder
                hanteert specifieke regels met betrekking tot het reserveren van
                auto's en de tijdsperioden waarin je een auto kunt reserveren.
                Bij aanbieders zoals Snappcar is het essentieel om duidelijk te
                communiceren met de eigenaar, vooral bij terugkomst, aangezien
                er een kans bestaat dat de eigenaar de auto zelf wil gebruiken.
              </p>
            </div>
          </div>
          <div className="mb-16 w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative h-full rounded-md bg-gray-50 px-8 pb-8 pt-16 shadow-md transition duration-200 dark:bg-gray-900 ">
              <div className="absolute left-1/2 top-0 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white transition duration-200 dark:bg-gray-800">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sharedride-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-patch-question h-6 w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                    <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="mb-4 max-w-xs text-xl font-bold leading-7 text-gray-700 dark:text-gray-300">
                De website laad geen auto's meer
              </h2>
              <p className="font-medium text-gray-500 transition duration-200 dark:text-gray-500">
                Het kan voorkomen dat de website geen auto's meer weergeeft,
                omdat de structuur van de website van een aanbieder dusdanig is
                veranderd dat de prijzen niet meer automatisch kunnen worden
                opgehaald. Als dit gebeurt, kun je me een bericht sturen op
                martijn@plebian.nl.
              </p>
            </div>
          </div>
          <div className="mb-16 w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative h-full rounded-md bg-gray-50 px-8 pb-8 pt-16 shadow-md transition duration-200 dark:bg-gray-900 ">
              <div className="absolute left-1/2 top-0 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white transition duration-200 dark:bg-gray-800">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sharedride-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-patch-question h-6 w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                    <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="mb-4 max-w-xs text-xl font-bold leading-7 text-gray-700 dark:text-gray-300">
                Hoe kan ik meehelpen met betere resultaten
              </h2>
              <p className="font-medium text-gray-500 transition duration-200 dark:text-gray-500">
                Merk je dat de weergegeven prijzen niet kloppen? Maak dan een
                'issue' aan op Github of dien zelf een wijziging in als je
                programmeerkennis hebt! Op dit moment is deze dienst kosteloos,
                zolang de kosten voor mijn hostingprovider en Google Maps niet
                te hoog oplopen.
              </p>
            </div>
          </div>
          <div className="mb-16 w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative h-full rounded-md bg-gray-50 px-8 pb-8 pt-16 shadow-md transition duration-200 dark:bg-gray-900 ">
              <div className="absolute left-1/2 top-0 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white transition duration-200 dark:bg-gray-800">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sharedride-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-patch-question h-6 w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                    <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="mb-4 max-w-xs text-xl font-bold leading-7 text-gray-700 dark:text-gray-300">
                Toekomstige features
              </h2>
              <p className="font-medium text-gray-500 transition duration-200 dark:text-gray-500">
                Ik zou graag op de kaart de beschikbare auto's van landelijke
                aanbieders zoals GreenWheel, MyWheels en Sixt Share willen
                tonen. Het lijkt me ook interessant om gebruikers de
                mogelijkheid te bieden de kosten van dezelfde rit met het
                openbaar vervoer te bekijken.
              </p>
            </div>
          </div>
          <div className="mb-16 w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative h-full rounded-md bg-gray-50 px-8 pb-8 pt-16 shadow-md transition duration-200 dark:bg-gray-900 ">
              <div className="absolute left-1/2 top-0 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white transition duration-200 dark:bg-gray-800">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sharedride-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-patch-question h-6 w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                    <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="mb-4 max-w-xs text-xl font-bold leading-7 text-gray-700 dark:text-gray-300">
                Meer informatie
              </h2>
              <p className="font-medium text-gray-500 transition duration-200 dark:text-gray-500">
                Voor meer informatie over de voordelen van
                deelauto's, bezoek de website ritjeweg.nl. Hoewel de homepage
                vergelijkbare maar verouderde functionaliteit heeft, biedt de
                site uitstekende artikelen over het gebruik van deelauto's.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
