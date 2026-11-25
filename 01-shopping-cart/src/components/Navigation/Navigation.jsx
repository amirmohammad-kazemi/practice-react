import { useState } from "react";
import products from "../../../data/products";
import "./Navigation.css";

function Navigation({
  favoritProducts,
  basket,
  isOpen,
  setIsOpen,
  deleteFromBasket,
  clearCart,
  clearFavorits,
}) {
  let totalPrice = 0;
  basket.forEach((p) => (totalPrice += +p.price));

  return (
    <div id="navigation">
      <button className="inline-flex justify-center w-full px-4 h-[37.7px]! text-sm font-medium leading-5 bg-black transition duration-150 ease-in-out text-white border border-gray-300/10 rounded-md focus:outline-none focus:border-blue-300/20 active:bg-gray-800">
        {/* <!-- <i className="fa-solid fa-home"></i> --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 left-0 mx-auto md:static h-5 md:h-5 lg:h-5 shrink-0"
          viewBox="0 0 1020 769"
        >
          <polygon
            fill="#006537"
            points="484.8124 560.0603 302.0609 655.3444 238.4124 617.2945 238.4124 462.4662 484.8124 560.0603"
          ></polygon>
          <polygon
            fill="#006869"
            points="972.5712 207.8379 484.6647 462.7753 10.7595 275.1003 498.7369 20.1923 972.5712 207.8379"
          ></polygon>
          <line
            fill="#1a3d3d"
            x1="929.7475"
            y1="307.461"
            x2="929.6513"
            y2="307.6423"
          ></line>
          <polygon
            fill="#006869"
            points="1010.2748 576.281 951.4402 632.8758 896.4012 572.396 934.1612 536.0524 934.0697 227.9393 972.5606 207.8255 972.3776 534.6349 1010.2748 576.281"
          ></polygon>
          <polygon
            fill="#00524c"
            points="972.5669 246.8789 972.5027 335.57 934.0989 357.7689 934.0747 266.9936 972.5669 246.8789"
          ></polygon>
          <polygon
            fill="#004b26"
            points="478.5395 760.6504 238.4571 617.3325 238.4571 604.062 484.6701 560.0356 489.1606 570.333 478.5395 760.6504"
          ></polygon>
          <polygon
            fill="#00524c"
            points="585.898 409.8693 484.472 463.0223 10.7549 275.1038 498.7374 20.1923 585.898 409.8693"
          ></polygon>
          <polygon
            fill="#00322d"
            points="972.5669 207.8394 972.5027 255.9601 934.0989 300.7406 934.0747 227.9542 972.5669 207.8394"
          ></polygon>
          <polygon
            fill="#1eb35b"
            points="816.6519 386.7124 816.6519 527.0091 478.1841 760.5632 302.0575 655.3487 816.6519 386.7124"
          ></polygon>
        </svg>
      </button>

      <button className="inline-flex justify-center w-full px-4 h-[37.7px]! text-sm font-medium leading-5 bg-black transition duration-150 ease-in-out text-white border border-gray-300/10 rounded-md focus:outline-none focus:border-blue-300/20 active:bg-gray-800">
        <i className="fa-solid fa-book"></i>
      </button>

      <button className="primary-button active-btn">
        <i className="fa-solid fa-shop"></i>
      </button>

      <div className="dropdown">
        <span className="rounded-md shadow-sm">
          <button
            className="primary-button"
            type="button"
            aria-haspopup="true"
            aria-expanded={isOpen}
            onClick={() => {
              setIsOpen((prev) => (prev === "favorit" ? null : "favorit"));
            }}
          >
            <span>
              <i className="fa-solid fa-heart"></i>
            </span>
            <span className="badge"> {favoritProducts.length} </span>
          </button>
        </span>
        <div
          className={
            isOpen === "favorit" ? "dropdown-menu" : "hidden dropdown-menu"
          }
        >
          <div className="dropdown-popup" role="menu">
            <div className="px-4 total-price-parent py-3">
              <p className="text-sm leading-5">علاقه مندی‌ها</p>
              <span id="product-count">({favoritProducts.length})</span>
            </div>
            <div className="normal-padding">
              {favoritProducts.length ? (
                favoritProducts.map((product) => {
                  return (
                    <article
                      key={product.id}
                      tabIndex="1"
                      className="basket-product"
                    >
                      <div className="basket-product.content">
                        <div className="basket-product.cover">
                          <img
                            src={product.img}
                            className="size-full object-cover"
                            alt=""
                          />
                        </div>
                        <div className="basket-product-content.details">
                          <div>
                            <p className="basket-product-title">
                              {product.title}
                            </p>
                            <p className="basket-product-desc">
                              {product.description}
                            </p>
                          </div>
                          <div className="basket-product.footer">
                            <div className="emerald-price">
                              <span>{product.price}</span>
                              <span>ت</span>
                            </div>
                            <button className="red-text">
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <h1>علاقه مندی ای یافت نشد </h1>
              )}
            </div>
            <div className="content-between">
              <button className="clear-button" onClick={clearFavorits}>
                پاکسازی علاقه مندی‌ها
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <span className="rounded-md shadow-sm">
          <button
            className="primary-button"
            type="button"
            aria-haspopup="true"
            aria-expanded={isOpen}
            onClick={() => {
              setIsOpen((prev) => (prev === "basket" ? null : "basket"));
            }}
          >
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="badge"> {basket.length} </span>
          </button>
        </span>
        <div
          className={
            isOpen === "basket" ? "dropdown-menu" : "hidden dropdown-menu"
          }
        >
          <div className="dropdown-popup" role="menu">
            <div className="px-4 total-price-parent py-3">
              <p className="text-sm leading-5">سبد خرید</p>
              <span id="product-count">({basket.length})</span>
            </div>
            <div className="normal-padding">
              {basket.length ? (
                basket.map((p) => {
                  return (
                    <article key={p.id} tabIndex="1" className="basket-product">
                      <div className="basket-product.content">
                        <div className="basket-product.cover">
                          <img
                            src={p.img}
                            className="size-full object-cover"
                            alt=""
                          />
                        </div>
                        <div className="basket-product-content.details">
                          <div>
                            <p className="basket-product-title">{p.title}</p>
                            <p className="basket-product-desc">
                              {p.description}
                            </p>
                            <p className="basket-product-quantity">
                              تعداد : {p.quantity}
                            </p>
                          </div>
                          <div className="basket-product.footer">
                            <div className="emerald-price">
                              <span>{p.price.toLocaleString()}</span>
                              <span>ت</span>
                            </div>
                            <button
                              id={p.id}
                              className="red-text"
                              onClick={(e) => {
                                deleteFromBasket(e.target.id)
                              }}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <p>محصولی در سبد وجود ندارد </p>
              )}
            </div>
            <div className="content-between">
              <button className="clear-button" onClick={clearCart}>
                پاکسازی سبد خرید
              </button>

              {basket.length !== 0 && (
                <div className="total-price-parent">
                  <span> مبلغ کل: </span>
                  <div className="flex items-center">
                    <span className="text-lg text-emerald-600 font-Vazir-Bold!">
                      <p>{totalPrice}</p>
                    </span>
                    <span className="text-sm text-emerald-500">ت</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
