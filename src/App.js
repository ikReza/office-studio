import React from "react";
import "./components/styles/style.css";

import NavigationBar from "./components/NavigationBar";
import WelcomePage from "./components/WelcomePage";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

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

      <Footer />
    </>
  );
}

export default App;
