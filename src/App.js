import ClientReviews from "./components/ClientReviews";
import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SomeWorks from "./components/SomeWorks";
import Trust from "./components/Trust";
import WhatIdo from "./components/WhatIdo";
import { BrowserRouter as Rourter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
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
          <Route path="/works" element={<SomeWorks />} />
        </Routes>
      </Rourter>
      <Footer />
    </div>
  );
}

export default App;
