import React, { lazy, Suspense } from "react";
import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";

// Lazy load below-the-fold components for better performance
const Work = lazy(() => import("./Home/Work"));
const Clients = lazy(() => import("./Home/Clients"));
const CV = lazy(() => import("./Home/CV"));
const Reviews = lazy(() => import("./Home/Reviews"));
const Contact = lazy(() => import("./Home/Contact"));
const LangToggler = lazy(() => import("./Home/LangToggler"));

// Loading fallback
const LoadingFallback = () => (
  <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Work />
        <Clients />
        <CV />
        <Reviews />
        <Contact />
        <LangToggler />
      </Suspense>
    </div>
  );
}

export default App;
