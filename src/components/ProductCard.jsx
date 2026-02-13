function ProductCard({name,price,onAdd}){
   return(
    <div style={{border:"1px solid #ccc" ,padding:"16px",margin:"16px"}}>
        <h3>{name}</h3>
        <p>Price:${price}</p>
        <button onClick={onAdd}>Add to Cart</button>
    </div>
   ); 
}


export default ProductCard;