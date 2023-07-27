import React from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Prouduct from "./component/Prouduct";
import Slider from "./component/Slider";
import Testamonial from "./component/Testamonial/Testamonial";
import Try from "./component/Try";

function App() {
  return (
   <div>
    <Header/>
    <Hero/>
    <Slider/>
    <Try/>
    <Prouduct/>
    <Testamonial/>
    <Footer/>
   </div>
  );
}

export default App;
