import React from "react";
import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";
import Work from "./Home/Work";
import Clients from "./Home/Clients";
import CV from "./Home/CV";
import Reviews from "./Home/Reviews";
import Contact from "./Home/Contact";
import LangToggler from "./Home/LangToggler";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Work />
      <Clients />
      <CV />
      <Reviews />
      <Contact />
      <LangToggler />
    </div>
  );
}

export default App;
