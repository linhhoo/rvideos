import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/organisms/Header";
import Videos from "@/components/organisms/Videos";

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

      <footer></footer>
    </React.Fragment>
  );
};

export default React.memo(Home);
