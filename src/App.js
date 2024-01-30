import ClientReviews from "./components/ClientReviews";
import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SomeWorks from "./components/SomeWorks";
import Trust from "./components/Trust";
import WhatIdo from "./components/WhatIdo";
import { BrowserRouter as Rourter, Routes, Route } from "react-router-dom";
import Section1 from "./components/proattireComponents/Section1";
import ScrollToTop from "react-scroll-up";
import { FaArrowCircleUp } from "react-icons/fa";

function App() {
  return (
    <div className="">
      <ScrollToTop showUnder={160} duration={4000}>
        <span>
          <FaArrowCircleUp />
        </span>
      </ScrollToTop>
      <Nav />
      <Rourter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Hero />
                <Trust />
                <WhatIdo />
                <SomeWorks />
                <ClientReviews />
              </React.Fragment>
            }
          />
          <Route
            path="/proattire"
            element={
              <React.Fragment>
                <Section1 />
              </React.Fragment>
            }
          />
        </Routes>
      </Rourter>
      <Footer />
    </div>
  );
}

export default App;
