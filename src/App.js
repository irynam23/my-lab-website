import React from "react";
import "../src/components/general.scss";
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
