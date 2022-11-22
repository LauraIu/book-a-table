import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyle.js";

import Navbar from "./components/Navbar/index.js";
import Sidebar from "./components/Sidebar/index.js";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Products from "./components/Products";
import { productData } from "./components/Products/data.js";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Header />
      <Introduction />
      <Products
        heading="The best pizzas ever"
        text="TASTE THE ORIGINAL RECIEP!"
        data={productData}
      />
      <Booking />
      <Footer />
    </>
  );
}

export default App;
