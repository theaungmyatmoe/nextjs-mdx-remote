import '../styles/globals.css'
import Head from "next/head";
import NavBar from "../components/NavBar";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Aung Myat Moe</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
            </Head>
            <NavBar/>
            <main className="container py-3">
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp
