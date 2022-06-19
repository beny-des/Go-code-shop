import Slider from "@mui/material/Slider";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
// import * as React from 'react';


const RangeSlider = () => {
  const { priceValue, setPriceValue, sliderPriceFilter } =
    useContext(CartContext);



  // --slider onChange
  const handleChange = (event, newValue) => {
    
    setPriceValue(newValue);
    // sliderPriceFilter(newValue);
  };

  return (
    <Slider
      // getAriaLabel={() => 'Temperature range'}
      value={priceValue}
      min={ [priceValue[0]]}
      max={[priceValue[priceValue.length - 1]]}
      onChange={handleChange}
      valueLabelDisplay="on"
      // getAriaValueText={valuetext}
    />
  );
};
export default RangeSlider;
