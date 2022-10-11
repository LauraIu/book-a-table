import * as React from "react";
import { GlobalStyle } from "./globalStyle.js";

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Products from "./components/Products";
import { productData } from "./components/Products/data.js";
import Booking from "./components/Booking";

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <Header />
      </header>
      <main>
        <Introduction />
        <Products
          heading="The best pizzas ever"
          text="TASTE THE ORIGINAL RECIEP!"
          data={productData}
        />
        <Booking />
      </main>
      <footer>
        MammaMia | All Right reserved
        <br />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Booking</li>
          <li>Contact</li>
        </ul>
      </footer>
    </>
  );
}

export default App;
