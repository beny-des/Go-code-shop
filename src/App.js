// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import TuggleButton from "./components/classWork/TuggleButton";


function App() {
  const [productsArray, setProductsArray] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((result) => result.json())
    .then((data) => {
      setProductsArray(data);
      setFilteredProducts(data);
      setCategories(uniqValues(data));
    });
  }, []);
  
  
  // -------search the array for category and giving as one of each for the dropdown filter
    function uniqValues(array) {
      return array
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index);
    }
    



  // -----function for filtering & show the products array based on the category the user picked
  function newpProductList(filteredList) {
    const fillterCategory =
      filteredList === "All"
        ? productsArray
        : productsArray.filter(
            (productObj) => productObj.category === filteredList
          );
    setFilteredProducts(fillterCategory);
  }

  return (
    <div className="App">
      {/* <TuggleButton /> */}
      <Header filterCategories={categories} newpProductList={newpProductList} />
      <Products products={filteredProducts} />
    </div>
  );
}

export default App;
