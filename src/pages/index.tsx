import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Header from "@/components/organisms/Header";

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
        <h1 className="text-3xl font-bold text-red">
          Hello world! {process.env.NEXT_PUBLIC_USER_NAME_PREFIX}{" "}
          {process.env.NEXT_PUBLIC_USER_NAME_PREFIX}
        </h1>
        <Button>hello</Button>
        <Icon name="user" />
      </main>

      <footer></footer>
    </React.Fragment>
  );
};

export default React.memo(Home);
