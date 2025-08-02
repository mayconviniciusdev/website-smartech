"use client";

import dynamic from "next/dynamic";
const Contact = dynamic(() => import("./content/contact"), { ssr: false });

import { Headers } from "./content/header";
import { About } from "./content/about";
import { Services } from "./content/services";
import { Portfolio } from "./content/portfolio";
import { Testimonials } from "./content/testimonials";
import { Footer } from "./content/footer";

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