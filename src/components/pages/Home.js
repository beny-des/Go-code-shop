import Header from "../header/Header";
import Products from "../products/Products";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import ShoppingCart from "../shoppingCart/ShoppingCart";
// import TuggleButton from "../classWork/TuggleButton";
import AppContext from "../../context/AppContext";
import CartContext from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [error, setError] = useState(false);
  const [priceValue, setPriceValue] = useState([1, 1000]);
  const [val, setVal] = useState([priceValue[0], priceValue[1]]);
  const [priceFiltered, setPriceFiltered] = useState([]);

  const { productsArray, setProductsArray } = useContext(AppContext);

  useEffect(() => {
    setLoadingSpinner(true);
    setError(false);
    fetch("https://gocode-bituach-yashir.glitch.me/products")
      .then((result) => result.json())
      .then((data) => {
        setProductsArray(data);
        setFilteredProducts(data);
        setCategories(uniqValues(data));
        setLoadingSpinner(false);
        minMaxPrices(data);
        setPriceFiltered(data);
      })
      .catch(function () {
        setError(true);
        setLoadingSpinner(false);
      });
  }, [setProductsArray]);

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
    setPriceFiltered(fillterCategory);
  }

  //  -- sort products by price
  function minMaxPrices(data) {
    const sliderPrices = data
      .map((product) => product.price)
      .sort((a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
    setPriceValue([sliderPrices[0], sliderPrices[sliderPrices.length - 1]]);
  }

  // --filtering & show products array based on slider

  function sliderPriceFilter(priceValue) {
    console.log(priceValue);
    const filteredPrice = priceFiltered.filter(
      (productObj) =>
        productObj.price >= priceValue[0] && productObj.price <= priceValue[1]
    );

    setFilteredProducts(filteredPrice);
  }

  return (
    <div>
      {/* <TuggleButton /> */}
      <CartContext.Provider
        value={{
          priceValue: priceValue,
          setPriceValue: setPriceValue,
          val: val,
          setVal: setVal,
          sliderPriceFilter: sliderPriceFilter,
        }}
      >
        <Header
          filterCategories={categories}
          newpProductList={newpProductList}

          // fetchAgian={fetchProducts}
        />
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
};

export default Home;
