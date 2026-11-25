import { useState } from "react";
import "./App.css";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Navigation from "./components/Navigation/Navigation";

import productsData from "./../data/products.js";
import Product from "./components/Product/Product";
import { use } from "react";

function App() {
  const [products, setProducts] = useState(productsData);
  const [isOpen, setIsOpen] = useState(null);
  const [favoritProducts, setFavoritProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  function addToFavorit(id) {
    const target = products.find((product) => product.id === id);

    if (favoritProducts.some((product) => product.id === id)) {
      setFavoritProducts((prev) =>
        prev.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      );
    } else {
      setFavoritProducts((prevFavoritProducts) => [
        ...prevFavoritProducts,
        target,
      ]);
    }
  }

  function addToBasket(id) {
    const isIn = basket.some((p) => p.id === id);
    const product = products.find((p) => p.id === id);

    if (isIn) {
      setBasket((prev) =>
        prev.map((product) =>
          product.id === id
            ? { ...product, quantity: (product.quantity || 1) + 1 }
            : product,
        ),
      );
    } else {
      setBasket((prev) => [...prev, product]);
    }
  }

  function deleteFromBasket(id) {
    
    
    setBasket((prev) => {
      return prev.filter((product) => product.id !== id);
    });
  }

  function clearCart() {
    setBasket([]);
  }
  function clearFavorits() {
    setFavoritProducts([]);
  }

  return (
    <>
      <Breadcrumb />
      <section
        id="products-row"
        className="container mx-auto grid grid-cols-4 gap-5"
      >
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            img={product.img}
            addToFavorit={addToFavorit}
            addToBasket={addToBasket}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ))}
      </section>
      <Navigation
        favoritProducts={favoritProducts}
        basket={basket}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        deleteFromBasket={deleteFromBasket}
        clearCart={clearCart}
        clearFavorits={clearFavorits}
      />
    </>
  );
}

export default App;
