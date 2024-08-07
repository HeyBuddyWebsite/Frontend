import React from "react";
import Section1 from "../components/portfolio/Section1";
import Section2 from "../components/portfolio/Section2";
import Section3 from "../components/portfolio/Section3";
import Section4 from "../components/portfolio/Section4";


const Page = () => {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="mx-auto w-[100%] pb-4 lg:pb-16">
        <Section1 />
      </div>

      <Section2 />

      <div className="mx-auto w-[100%] pb-4 lg:pb-16">
        <Section3 />
      </div>
      <div className="mx-auto w-[100%]">
        <Section4 />
      </div>
    </main>
  );
};

export default Page;
