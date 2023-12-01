import React from "react";
import Hero from "../containers/Section/Hero/Hero";
import SeparationLine from "../components/SeparationLine/SeparationLine";
import Projects from "../containers/Section/Projects/Projects";
import Footer from "../containers/Footer/Footer";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <SeparationLine />
        <Projects />
        <SeparationLine />
      </main>
      <Footer />
    </>
  );
};

export default Home;
