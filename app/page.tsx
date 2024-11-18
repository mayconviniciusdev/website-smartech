"use client";

import { About } from "./content/about";
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
    </main>
  );
}

export default PageContent;