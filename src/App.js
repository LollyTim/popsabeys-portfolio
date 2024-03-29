import ClientReviews from "./components/ClientReviews";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SomeWorks from "./components/SomeWorks";
import Trust from "./components/Trust";
import WhatIdo from "./components/WhatIdo";
import { useRef } from "react";
import {
  BrowserRouter as Rourter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Section1 from "./components/proattireComponents/Section1";
// import ScrollToTop from "react-scroll-up";
import { FaArrowCircleUp } from "react-icons/fa";
import SectionOne from "./components/tdbizComponents/Section1";
import Tradepla from "./components/tradeplaComponents/Tradepla";
// import Equity from "./components/equityandLawComponents/Equity";
import Elearning from "./components/eLearningComponents/Elearning";
import Equity from "./components/equityandLawComponents/Equity";
import UiShowcase from "./components/uishowcase/UiShowcase";
import Business from "./components/Business";
import Loading from "./components/Loading";
import Headroom from "react-headroom";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  const mywork = useRef(null);
  const contact = useRef(null);
  const navigate = useNavigate();
  const scrollToSection = (sectionRef, path) => {
    navigate(path);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  const [shouldShowLoading, setShouldShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a 2-second loading time (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/contact") {
      setIsLoading(false);
      setShouldShowLoading(false);
    }
  }, [window.location.pathname]);

  return (
    <div className="select-none">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Toaster
            toastOptions={{
              style: {
                width: "200px",
                background: "white",
                color: "#010314",
              },
            }}
          />
          <Headroom className="hidden lg:flex lg:flex-col ">
            <Nav
              scrollToSection={scrollToSection}
              mywork={mywork}
              contact={contact}
            />
          </Headroom>
          <div className=" lg:hidden flex">
            <Nav
              scrollToSection={scrollToSection}
              mywork={mywork}
              contact={contact}
            />
          </div>
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
            <Route path="/contact" exact element={<Contact />} />
          </Routes>

          <Footer
            scrollToSection={scrollToSection}
            contact={contact}
            className="overflow-hidden"
          />
        </>
      )}
    </div>
  );
}

export default App;
