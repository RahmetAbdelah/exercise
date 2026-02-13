import {Link} from "react-router-dom";
import { useState } from 'react';
import "./navbar.css";

function Navbar({brand,cartCount}){
    const [menuOpen , setMenuOpen]=useState(false);
    
    return(
        <nav style={{padding:"1rem",borderBottom:"1px solid #ccc"}}>
            <h2>{brand}</h2>
             <div className="desktop-links" style={{display:"inline",marginLeft:"2rem"}}  >
                <Link to="/" style={{ marginLeft: "1rem" }}>Home</Link>
<Link to="/services" style={{ marginLeft: "1rem" }}>Services</Link>
<Link to="/booking" style={{ marginLeft: "1rem" }}>Booking</Link>
<Link to="/shop" style={{ marginLeft: "1rem" }}>Shop</Link>
<Link to="/cart" style={{ marginLeft: "1rem" }}>
  Cart
</Link>


                
                </div> 
            <button onClick={()=>setMenuOpen(!menuOpen)} style={{marginLeft:"1rem"}}>
                ☰
            </button>
            <span style={{ marginLeft: "1rem" }}>
  🛒 Cart:{cartCount}
</span>

            {menuOpen  && (
                <div className="mobile-menu"  style={{marginTop:"1rem"}}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
<Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
<Link to="/booking" onClick={() => setMenuOpen(false)}>Booking</Link>
<Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
                </div>
            )}
        </nav>
    );
}
export default Navbar;