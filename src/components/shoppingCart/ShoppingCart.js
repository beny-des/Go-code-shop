import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ShoppingCart=()=>{
    const {counter,setCounter}=useContext(CartContext);
  

    return(
        <div>
    {console.log(counter)}

</div>
    )};
export default ShoppingCart

