import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
import CartContext from "./context/CartContext";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import TuggleButton from "./components/classWork/TuggleButton";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails.js";




function App() {
  const [productsArray, setProductsArray] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [counter, setCounter] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [error, setError] = useState(false);

  const fetchProducts = () => {
    setLoadingSpinner(true);
    setError(false);
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((data) => {
        setProductsArray(data);
        setFilteredProducts(data);
        setCategories(uniqValues(data));
        setLoadingSpinner(false);
      
      })
      .catch(function () {
        return (setError(true), setLoadingSpinner(false))
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // -------search the array for category and giving us one of each for the dropdown filter
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

  const onAdd = (id) => {
    // check if product in cart
    const exist = cartItems.find((x) => x.id === id);
    // if product exists, add to qty
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      console.log(cartItems);
    }
    // else, add to cart with qty = 1
    else {
      const newProduct = productsArray.find((x) => x.id === id);
      setCartItems([...cartItems, { ...newProduct, qty: 1 }]);
    }
  };

  // useEffect(() => console.log({loadingSpinner}), [loadingSpinner]);


 

  return (
    <div className="App">
      {/* <TuggleButton /> */}

<Link to="/">Home</Link> <br/>
<Link to="productDetails">ProductDetails</Link>


      <CartContext.Provider value={{ counter, setCounter, onAdd, cartItems }}>
        <Header
          filterCategories={categories}
          newpProductList={newpProductList}
          // fetchAgian={fetchProducts}
        />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="productDetails" element={<ProductDetails />} />

      </Routes>
        <ShoppingCart />

        {error && (
          <h1 style={{ textAlign: "center", fontSize: "90px" }}>
            Server error
          </h1>
        )}
        
        {loadingSpinner ? (
          <LoadingSpinner />
        ) : (
          <Products products={filteredProducts} />
        )}
      </CartContext.Provider>
    </div>
  );
}


export default App;
