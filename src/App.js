import "./App.css";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails.js";
import AppContext from "./context/AppContext";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [productsArray, setProductsArray] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // -----add poroduct to cart
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
    }
    // else, add to cart with qty = 1
    else {
      const newProduct = productsArray.find((x) => x.id === id);

      setCartItems([...cartItems, { ...newProduct, qty: 1 }]);
    }
  };

  //----- remove poroduct from cart
  const onRemove = (id) => {
    // ---filtering the shopping cart by product qty >0
    const product = cartItems[cartItems.findIndex((p) => p.id === id)];
    // --if qty>1 then find the id in the cart array..if (true) give me the object (prod) and change
    //  his qty value if (false) leave the object as it is
    if (product.qty > 1) {
      setCartItems(
        cartItems.map((prod) =>
          prod.id === id ? { ...prod, qty: prod.qty - 1 } : prod
        )
      );
      // else give me all the objects (product) that have diffrent id
    } else {
      const removeProduct = cartItems.filter((product) => product.id !== id);
      setCartItems(removeProduct);
    }
  };

  const qtyCheck = (id) => {
    const productQty = cartItems.find((product) => product.id === id);
    console.log(productQty);

    if (productQty) {
      // console.log("productQty", productQty.qty);
      return productQty.qty;
    } else {
      return 0;
    }
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          cartItems: cartItems,
          setCartItems: setCartItems,
          onAdd: onAdd,
          onRemove: onRemove,
          productsArray: productsArray,
          setProductsArray: setProductsArray,
          qtyCheck: qtyCheck,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
