"use client";

import dynamic from "next/dynamic";
const Contact = dynamic(() => import("./components/sections/contact"), { ssr: false });

import { Headers } from "./components/sections/header";
import { About } from "./components/sections/about";
import { Services } from "./content/services";
import { Portfolio } from "./components/sections/portfolio";
import { Testimonials } from "./content/testimonials";
import { Footer } from "./components/sections/footer";

const PageContent = () => {
  return (
    <main>
      <Headers/>
      <Services/>
      <Portfolio/>
      <About/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default PageContent;