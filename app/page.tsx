"use client";

import { About } from "./content/about";
import { Headers } from "./content/header";
import { Services } from "./content/services";

const PageContent = () => {
  return (
    <main>
      <Headers/>
      <About/>
      <Services/>
    </main>
  );
}

export default PageContent;