import "./Product.css";
import AppContext from "../../context/AppContext";
import { useContext, useState } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { IconButton } from "@mui/material";
// import { DeleteOutlined } from "@material-ui/icons";

const Product = ({ image, title, price, id, qty }) => {
  const [value, setValue] = useState();
  const { onAdd, onRemove, qtyCheck } = useContext(AppContext);

  return (
    <div className="product-card">
      {/* <Grid container spacing={3}> */}
      <Card>
        <div className="product-image">
          <CardMedia component="img" height="250" image={image} alt="pic" />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}</h6>
          <div style={{display:"flex",flexWrap:"nowrap",justifyContent:"center",alignItems: 'center', gap: '10px',margin:"5px" }}>
            <button onClick={() => {onRemove(id); }}>-</button>
            <h4>{` ${qtyCheck(id)} `}</h4>
            <button onClick={() => {onAdd(id); }}>+</button>
          </div>
          <Link to={`products/${id}`}>
            <div style={{margin:"5px"}}><button>Details</button></div>
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

        {/* <CardHeader
          action={
            <IconButton>
              
            </IconButton>
          }
        /> */}
      </Card>
      {/* </Grid> */}
      {/* <img src={image} alt="pic" /> */}
      {/* <ProductsCardDesign image={image} title={title} price={price} id={id} /> */}
    </div>
  );
};
export default Product;
