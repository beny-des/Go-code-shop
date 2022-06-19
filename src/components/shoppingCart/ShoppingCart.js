import { useContext } from "react";
import AppContext from "../../context/AppContext";
import "../shoppingCart/ShoppingCart.css";


const ShoppingCart=()=>{

    const {cartItems,onRemove}=useContext(AppContext);
 

    return(
        <div className="shoppingCart">
            
    {cartItems.map((product)=>{
        return(
            <>
            <span><h2 className="cartHeadline">Shopping Cart :</h2></span>

            <div key={product.id} className="selectedProducts" >
            <div className="" >
              <img src={product.image} alt='pic' width="100px"/>
            </div>
                        <div className="productInfo" > 
              <h5> {product.title}</h5>
              <h6>Price:{product.price}$</h6>
              <h6>qty: {product.qty}</h6>
              remove: <button onClick={()=>{onRemove(product.id)}}>-</button>


            </div>
            </div>

              </> 
        )
    })}

</div>

   )}
export default ShoppingCart

