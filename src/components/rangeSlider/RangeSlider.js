import Slider from "@mui/material/Slider";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
// import * as React from 'react';

const RangeSlider = () => {
  const { priceValue, val, setVal, sliderPriceFilter } =
    useContext(CartContext);

  // --slider onChange
  const handleChange = (newValue) => {
    setVal(newValue);
    // sliderPriceFilter(newValue)
  };

  return (
    <Slider
      value={val}
      min={priceValue[0]}
      max={priceValue[1]}
      onChange={(e, value) => {
        sliderPriceFilter(value);
        handleChange(value);
      }}
      valueLabelDisplay="auto"
    />
  );
};
export default RangeSlider;
