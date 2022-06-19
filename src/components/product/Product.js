import "./Product.css";
import AppContext from "../../context/AppContext";
import { useContext, useState } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const Product = ({ image, title, price, id }) => {
  const [value, setValue] = useState();
  const { onAdd } = useContext(AppContext);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt="pic" />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
        Add to cart:{" "}
        <button onClick={() => {onAdd(id); }}>
          +
        </button>
        <Link to={`products/${id}`}>
          <button>Details</button>
        </Link>
        RATE :<br />
        <Rating
          max={5}
          size={"large"}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
    </div>
  );
};
export default Product;
