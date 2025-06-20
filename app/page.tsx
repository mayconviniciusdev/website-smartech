"use client";

import dynamic from "next/dynamic";
const Contact = dynamic(() => import("./content/contact/contact"), { ssr: false });

import { About } from "./content/about";
import { Footer } from "./content/footer";
import { Headers } from "./content/header";
import { Portfolio } from "./content/portfolio";
import { Services } from "./content/services";
import { Testimonials } from "./content/testimonials";

const PageContent = () => {
  return (
    <main>
      <Headers/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default PageContent;