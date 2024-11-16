"use client";

import { About } from "./content/about";
import { Headers } from "./content/header";
import { Portfolio } from "./content/portfolio";
import { Services } from "./content/services";

const PageContent = () => {
  return (
    <main>
      <Headers/>
      <About/>
      <Services/>
      <Portfolio/>
    </main>
  );
}

export default PageContent;