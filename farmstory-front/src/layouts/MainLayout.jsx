import React from "react";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { Slider } from "../components/main/Slider";
import { Best } from "../components/main/Best";
import { Quick } from "../components/main/Quick";
import { Latest } from "../components/main/Latest";
import { Info } from "../components/main/Info";

export const MainLayout = () => {
  return (
    <div id="container">
      <Header />
      <main>
        <Slider />
        <Best />
        <Quick />
        <Latest />
        <Info />
      </main>
      <Footer />
    </div>
  );
};
