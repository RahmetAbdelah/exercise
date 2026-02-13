import {useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";



function App() {
  const [cart,setCart]=useState([]);

  function addToCart(product){
   
    setCart((prevCart) => [...prevCart, product]);
  }
  function removeFromCart(index){
    setCart(cart.filter((_,i)=> i !== index));
  }
  return(
    <Router>
      <Navbar brand="Touch By Mina" cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Booking"  element={<Booking />}/>
        <Route path="/Shop"  element={<Shop addToCart={addToCart}/>}/>
        <Route path="/Cart" element={<Cart cart={cart}  removeFromCart={removeFromCart}/>}/>
     
      </Routes>
     
    </Router>
  );
}

export default App
