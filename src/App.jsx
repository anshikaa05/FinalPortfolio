import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About";
import Experience from "./Components/experiences/Experiences";
import Services from "./Components/services/Services";
import RecentWork from "./Components/recentwork/RecentWork";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import BackgroundEffect from "./Components/Background";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      {/* 🔹 Background layer (image + blur overlay + animated blobs) */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/your-bg-image.jpg')",
        }}
      >
        {/* Optional blur/tint overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[8px]"></div>

        {/* Optional gradient / animation blobs */}
        <BackgroundEffect />
      </div>

      {/* 🔹 Foreground content */}
      <main className="relative z-10">
        <Nav />
        <Header />
        <About />
        <Experience />
        <RecentWork />
        <Contact />
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
