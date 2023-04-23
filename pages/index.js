import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="FIXPAL"
        description="Fixing your home, fixing your day"
        canonical="https://www.fixpal.co.uk"
        openGraph={{
          url: 'https://www.fixpal.co.uk',
          title: 'FIXPAL',
          description: 'Fixing your home, fixing your day',
          images: [
            {
              url: 'https://www.fixpal.co.uk/images/logo-no-background.png',
              width: 800,
              height: 600,
              alt: 'FIXPAL',
            },
          ],
        }}
      />
      <Head>
        <title>Fixpal - Home Repairs</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
