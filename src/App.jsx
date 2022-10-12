import * as React from "react";
import { GlobalStyle } from "./globalStyle.js";

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Products from "./components/Products";
import { productData } from "./components/Products/data.js";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />

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
