import React from "react";
import Header from "../components/Header";
import Web3 from "../components/Web3";
import New from "../components/New";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <>
      <Header />
      <main className="lgxl-padding lg:grid lg:grid-cols-6 lg:gap-[1.8rem] lg:gap-y-12 lg:pb-12 lg:pt-1">
        <h1 className="sr-only">News</h1>
        <Web3 />
        <New />
        <Trending />
      </main>
    </>
  );
}
