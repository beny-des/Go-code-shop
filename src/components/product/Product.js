import "./Product.css";
import CartContext from "../../context/CartContext";
import { useContext,useState } from "react";
import Rating from '@mui/material/Rating';


const Product = ({ image, title, price,id })=>
{
  const [value, setValue] = useState();
  const {onAdd} =useContext(CartContext)

  return(
  <div className="product-card">
      <div className="product-image">
        <img src={image} alt='pic' />
      </div>
      
      <div className="product-info">
        
        <h5>{title}</h5>
        <h6>{price}</h6>
        Add to cart: <button onClick={()=>{onAdd(id)}}>+</button>

      RATE :<br/>
      
      <Rating max={5} size={'large'}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </div>
    </div>
  )}
  export default Product