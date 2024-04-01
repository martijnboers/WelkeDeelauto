import './css/global.css'
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export const metadata = {
    title: 'Welke Deelauto?',
    metadataBase: new URL('https://welkedeelauto.nl'),
    background_color: "#ffffff",
    name: 'Welke Deelauto?',
    short_name: 'Welke Deelauto?',
    description: 'Hulp bij het kiezen van de goedkoopste deel auto',
    start_url: '/',
    display: "standalone",
    theme_color: "#ffffff",
    keywords: ["Deel autos", "Prijs", "Vergelijken", "Greenwheels", "MyWheels", "Snappcar", "Sixt Share"],
    openGraph: {
        title: 'Welke Deelauto',
        description: 'Vergelijk prijzen van deel auto aanbieders',
        images: ['https://welkedeelauto.nl/_next/image?url=%2Fopengraph-image.png&w=1200&h=675&q=75'],
        url: 'https://welkedeelauto.nl',
    },
    icons: {
        icon: '/favicon.ico',
    }
}

export default function RootLayout({children}) {
    return (
        <html lang="nl">
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
