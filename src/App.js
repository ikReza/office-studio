import React from "react";
import "./components/styles/style.css";

import NavigationBar from "./components/NavigationBar";
import WelcomePage from "./components/WelcomePage";
import Services from "./components/Services";

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
    </>
  );
}

export default App;
