
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import LoadingSpinner from "./components/utils/LoadingSpinner";
import CartContext from "./context/CartContext";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import TuggleButton from "./components/classWork/TuggleButton";

function App() {
  const [productsArray, setProductsArray] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const[counter,setCounter]=useState([]);
  const[cartItems,setCartItems]=useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(true);

 

  const fetchProducts = () => {
    setLoadingSpinner(true);
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((data) => {
        setProductsArray(data);
        setFilteredProducts(data);
        setCategories(uniqValues(data));
        
        setLoadingSpinner(false);
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

  const addingToCart=(addingProductToCart)=>{
// const productToCart= productsArray.filter(
//   (productObj) => productObj.id === addingProductToCart)
// console.log(cartItems,counter)


  };
const onAdd=(productsArray)=>{
  const exist=cartItems.find(x=>x.id===productsArray.id)
  if(exist){
    setCartItems(cartItems.map((x)=>x.id===productsArray.id?{...exist,qty: exist.qty+1}:x)
  )}
  else{
    setCartItems([...cartItems,{...productsArray,qty:1}])
  }
}

  return (
    <div className="App">
      {/* <TuggleButton /> */}
      
      <CartContext.Provider value={{addingToCart,counter,setCounter,onAdd}} >
      <Header
        filterCategories={categories}
        newpProductList={newpProductList}
        // fetchAgian={fetchProducts}
      />
      
      <ShoppingCart />

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
