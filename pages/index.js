import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-blue-500">
      <NextSeo
        title="Home: fixpal"
        description="Welcome to fixpal homepage."
        canonical="https://fixpal.co.uk"
        openGraph={{
          url: "https://fixpal.co.uk",
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
