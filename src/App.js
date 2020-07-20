import React from "react";
import "./components/styles/style.css";

import NavigationBar from "./components/NavigationBar";
import WelcomePage from "./components/WelcomePage";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import Team from "./components/Team";

function App() {
  return (
    <>
      <NavigationBar />

      <section id="page-top">
        <WelcomePage />
      </section>

      <section className="page-section" id="services">
        <Services />
      </section>

      <section className="bg-light page-section" id="portfolio">
        <Portfolio />
      </section>

      <section className="page-section" id="about">
        <About />
      </section>

      <section className="bg-light page-section" id="team">
        <Team />
      </section>

      <section className="page-section" id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
