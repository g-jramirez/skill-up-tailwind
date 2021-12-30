import Head from "next/head";

import Header from "components/Header";
import Footer from "components/Footer";
import { Hero } from "../components/Hero";
import { HeroWithCTAs } from "../components/HeroWithCTAs";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Next + Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <HeroWithCTAs CTA1="Primary" CTA2="Secondary" url="#" />
        <Hero leftAligned={true} />
        <Hero leftAligned={false} />
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
