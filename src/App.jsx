import React from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Cart from "./components/Cart"; 
import Footer from "./components/Footer"

function App() {
  return (
    <CartProvider>
      <Header />
      <Cards />
      <Cart />
      <Footer/>
    </CartProvider>
  );
}

export default App;
