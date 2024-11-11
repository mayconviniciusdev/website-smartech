"use client";

import { About } from "./content/about";
import { Headers } from "./content/header";

const PageContent = () => {
  return (
    <main>
      <Headers/>
      <About/>
    </main>
  );
}

export default PageContent;