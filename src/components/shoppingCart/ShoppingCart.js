import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "../shoppingCart/ShoppingCart.css";


const ShoppingCart=()=>{

    const {cartItems,onRemove}=useContext(CartContext);
 

    return(
        <div className="shoppingCart">
            
     <span><h2 className="cartHeadline">Shopping Cart :</h2></span>
    {cartItems.map((product)=>{
        return(
            //  <div className="selectedProducts" >אולי אצטרך בהמשך להכניס לתוך ה
            // key={product.id} 

            <div key={product.id} className="selectedProducts" >
            <div className="" >
              <img src={product.image} alt='pic' width="100px"/>
            </div>
                        <div className="productInfo" > 
              <h5> {product.title}</h5>
              <h6>{product.price}</h6>
              <h6>{product.qty}</h6>
              remove: <button onClick={()=>{onRemove(product.id)}}>-</button>


            </div>
            </div>

  
        )
    })}

</div>
    )}
export default ShoppingCart

