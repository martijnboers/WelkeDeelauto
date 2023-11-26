import Home from "@/app/components/home";

export const metadata = {
    title: "Welke Deelauto?",
    keywords: ["Deel autos", "Prijs", "Vergelijken", "Greenwheels", "MyWheels", "Snappcar", "Sixt Share"],
    openGraph: {
        title: 'Welke Deelauto',
        description: 'Vergelijk prijzen van deel auto aanbieders',
        images: ['https://welkedeelauto.nl/_next/image?url=%2Fopengraph-image.png&w=1200&h=675&q=75'],
        url: 'https://welkedeelauto.nl',
    },
    metadataBase: new URL('https://welkedeelauto.nl'),
    icons: {
        icon: '/favicon.ico',
    }
};

export default function Page() {
    return <Home></Home>
}
