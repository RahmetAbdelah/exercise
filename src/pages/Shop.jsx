import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop({addToCart}){
    return(
      
        <div>
            <h1>Shop</h1>
            {products.map((product)=>(<ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                onAdd={()=>addToCart && addToCart(product)}
                />
            ))}
        </div>
    );
}

export default Shop;