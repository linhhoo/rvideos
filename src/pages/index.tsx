import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/organisms/Header";
import Videos from "@/components/organisms/Videos";
import Footer from "@/components/molecules/Footer";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Rvideos</title>
        <meta name="description" content="Rvideos - Share video from Youtube" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Videos />
      </main>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default React.memo(Home);
