import React from "react";

import Nav from "./pages/Nav";
import InfoCard from "./pages/InfoCard";
import Search from "./pages/Search";
import Repositories from "./pages/Repositories";
import Design from "./pages/Design";
import Footer from "./pages/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <InfoCard />
      <Search />
      <Repositories />
      <Design />
      <Footer />
    </>
  );
}

export default App;
