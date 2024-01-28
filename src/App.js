import ClientReviews from "./components/ClientReviews";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SomeWorks from "./components/SomeWorks";
import Trust from "./components/Trust";
import WhatIdo from "./components/WhatIdo";

function App() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Trust />
      <WhatIdo />
      <SomeWorks />
      <ClientReviews />
    </div>
  );
}

export default App;
