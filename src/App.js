import React from "react";
import "./components/styles/style.css";

import NavigationBar from "./components/NavigationBar";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <>
      <NavigationBar />

      <section id="page-top">
        <WelcomePage />
      </section>
    </>
  );
}

export default App;
