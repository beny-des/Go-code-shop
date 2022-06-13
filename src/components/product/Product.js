import "./Product.css"
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const Product = ({ image, title, price,id })=>
{
  const {addingToCart} =useContext(CartContext)
  const {onAdd} =useContext(CartContext)

  return(
  <div className="product-card">
      <div className="product-image">
        <img src={image} alt='pic' />
      </div>
      
      <div className="product-info">
        
        <h5>{title}</h5>
        <h6>{price}</h6>
        Add to cart: <button onClick={onAdd(id)}>+</button>
        
              
        
      
        

        
    
      </div>
    </div>
  )};
  export default Product;