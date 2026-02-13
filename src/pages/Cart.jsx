 
function Cart({cart,removeFromCart}){
   
    const total=cart.reduce((sum,item)=>sum+item.price,0);
   
    return(
       
       
     <div>
        
        <h1>your cart</h1>
         {cart.length===0 && <p> your cart is empty </p>}
         {cart.map((item,index)=>(
            <div key={index} style={{marginBottom:"1rem"}}>
                <p>
                    {item.name}-${item.price}
                </p>
                <button onClick={()=>removeFromCart(index)}>Remove</button>
            </div>    
         ))}
       
       <h3>Total:${total}</h3>
       {cart.length>0 && (<button onClick={()=>alert("check out comming soon")}>checkout</button>)}


     </div>
    );
}

export default Cart;