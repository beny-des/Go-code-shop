import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "../shoppingCart/ShoppingCart.css";

const ShoppingCart=()=>{

    const {cartItems}=useContext(CartContext);
 

    return(
        <div className="shoppingCart">

     <span><h1 className="cartHeadline">Shopping Cart :</h1></span>
    {cartItems.map((product)=>{
        return(
            
            <div className="selectedProducts">
            <div className="" key={product.id} >
              <img src={product.image} alt='pic' width="100px"/>
            </div>
            
            <div className="productInfo" > 
              <h5> {product.title}</h5>
              <h6>{product.price}</h6>
              <h6>{product.qty}</h6>
 
            </div>
            </div>

  
        )
    })}

</div>
    )}
export default ShoppingCart

