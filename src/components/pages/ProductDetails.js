import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import "./ProductDetails.css"

const ProductDetails = () => {
  const { productId } = useParams();
  const [viewDetails, setViewDetails] = useState({});

  const {onAdd}=useContext(AppContext);

useEffect(() => {
    fetch(`https://gocode-bituach-yashir.glitch.me/products/${productId}`)
      .then((res) => res.json())
      .then((productDetails) => {
        setViewDetails(productDetails);
      });
  });

  return (
    <div className="productDetails-card">
      <div className="productDetails-image">
        <img className="img-detalis" src={viewDetails.image} alt="pic"  />
      </div>
      <div className="product-info">
        <h5>{viewDetails.title}</h5>
        <h6>{viewDetails.price}</h6>
      
        Add to cart: 
        <button onClick={() => {onAdd(viewDetails.id); }}>+</button>
       <h6>{viewDetails.qty}</h6>
        <Link to={"/"}>HOME</Link>
        </div>
    </div>
  )
};

export default ProductDetails;
