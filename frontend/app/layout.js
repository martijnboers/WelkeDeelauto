import './css/global.css'
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export const metadata = {
    title: 'Welke Deelauto?',
    description: 'Hulp met het kiezen van een deelauto',
    metadataBase: new URL('https://welkedeelauto.nl')
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
