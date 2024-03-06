import ClientReviews from "./components/ClientReviews";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SomeWorks from "./components/SomeWorks";
import Trust from "./components/Trust";
import WhatIdo from "./components/WhatIdo";
import { useRef } from "react";
import { BrowserRouter as Rourter, Routes, Route } from "react-router-dom";
import Section1 from "./components/proattireComponents/Section1";
import ScrollToTop from "react-scroll-up";
import { FaArrowCircleUp } from "react-icons/fa";
import SectionOne from "./components/tdbizComponents/Section1";
import Tradepla from "./components/tradeplaComponents/Tradepla";
// import Equity from "./components/equityandLawComponents/Equity";
import Elearning from "./components/eLearningComponents/Elearning";
import Equity from "./components/equityandLawComponents/Equity";
import UiShowcase from "./components/uishowcase/UiShowcase";
import Business from "./components/Business";
import Loading from "./components/Loading";

function App() {
  const mywork = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a 2-second loading time (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="select-none">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Nav
            scrollToSection={scrollToSection}
            mywork={mywork}
            contact={contact}
          />
          <Rourter>
            <Routes>
              <Route
                path="/"
                element={
                  <React.Fragment>
                    <Hero />
                    <Trust />
                    <WhatIdo />
                    <SomeWorks
                      scrollToSection={scrollToSection}
                      mywork={mywork}
                    />
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
              <Route
                path="/tdbizz"
                element={
                  <React.Fragment>
                    <SectionOne />
                  </React.Fragment>
                }
              />
              <Route
                path="/tradepla"
                element={
                  <React.Fragment>
                    <Tradepla />
                  </React.Fragment>
                }
              />
              <Route
                path="/elearning"
                element={
                  <React.Fragment>
                    <Elearning />
                  </React.Fragment>
                }
              />
              <Route
                path="/uishowcase"
                element={
                  <React.Fragment>
                    <UiShowcase />
                  </React.Fragment>
                }
              />
              <Route
                path="/equity"
                element={
                  <React.Fragment>
                    <Equity />
                  </React.Fragment>
                }
              />
              <Route path="/business" exact element={<Business />} />
            </Routes>
          </Rourter>
          <Footer
            scrollToSection={scrollToSection}
            contact={contact}
            className="overflow-hidden"
          />
          <ScrollToTop
            showUnder={600}
            duration={2000}
            style={{ zindex: 100 }}
            className="overflow-hidden max-[768px]:hidden lg:flex overflow-x-hidden overflow-y-hidden"
          >
            <FaArrowCircleUp className="text-[30px] text-slate-40 max-[768px]:hidden lg:flex rotate-[-1deg] overflow-hidden overflow-x-hidden overflow-y-hidden" />
          </ScrollToTop>
        </>
      )}
    </div>
  );
}

export default App;
