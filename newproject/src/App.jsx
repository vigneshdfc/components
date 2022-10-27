import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";
import { useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import ProductCard from "./components/productbox";
import Todolist from "./components/todolist";
import Follwers from "./components/follower";
import Cloths from "./components/cloths";
import Notify from "./components/storage";
function App() {
  const products = [
    { name: "adidas", price: 1700 },
    { name: "puma", price: 1600 },
    { name: "nike", price: 1500 },
    { name: "sportshoe", price: 1000 },
  ];
  const cloths = [
    { name: "jeans", price: 1500 },
    { name: "trousers", price: 1000 },
    { name: "shirts", price: 800 },
    { name: "tshirts", price: 300 },
  ];
  const followers = [
    { name: "Ram" },
    { name: "golul" },
    { name: "akash" },
    { name: "vasanth" },
    { name: "santhosh" },
    { name: "Rocky" },
    { name: "bharath" },
    { name: "aswin" },
    { name: "nihil" },
    { name: "raja" },
  ];
  const [OnColorchange, setColor] = React.useState(false);
  const [sidebarIsOn, setSidebarState] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [proState, setProState] = React.useState(products);
  const add = (currentIndex) => {
    const updatedData = proState.map((pro, index) => {
      if (currentIndex === index) {
        return { ...pro, addcart: pro.addcart + 1 };
      }
      return pro;
    });
    setProState(updatedData);
  };

  const minus = (currentIndex) => {
    const updatedData = proState.map((pro, index) => {
      if (currentIndex === index) {
        return { ...pro, addcart: pro.addcart - 1 };
      }
      return pro;
    });
    setProState(updatedData);
  };
  const handlecart = (currentIndex) => {
    const updatedData = proState.map((pro, index) => {
      if (currentIndex === index) {
        return { ...pro, addcart: 1 };
      }
      return pro;
    });
    setProState(updatedData);
  };
  const toggle = () => {
    setState(!state);
  };
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const background = (
    <button
      className="background"
      onClick={(e) => {
        e.preventDefault;
        setColor(true);
      }}
    >
      Dark Mood
    </button>
  );
  const reset = (
    <button
      className="reset"
      onClick={(e) => {
        e.preventDefault;
        setColor(false);
      }}
    >
      Reset
    </button>
  );

  const hamburger = (
    <b
      className="hamburger"
      onClick={(e) => {
        e.preventDefault();
        setSidebarState(true);
      }}
    >
      MENU
    </b>
  );
  const sidebar = (
    <div className="sidebar">
      <div className="sidebar_menu">
        <h4>Menu</h4>
        <b
          onClick={(e) => {
            e.preventDefault;
            setSidebarState(false);
          }}
        >
          close
        </b>
      </div>
    </div>
  );

  const renderproducts = proState.map((pro, index) => {
    return (
      <div className="productbox">
        <h3>{pro.name}</h3>
        <h6>{pro.price}</h6>
        <div className="counter">
          <span className="output">{pro.addcart}</span>
          {!pro.addcart ? (
            <div className="container">
              <button
                className="controlbutton"
                onClick={() => handlecart(index)}
              >
                add to cart
              </button>
            </div>
          ) : (
            <div className="container">
              <button className="controlbutton" onClick={() => add(index)}>
                +
              </button>
              <button className="controlbutton" onClick={() => minus(index)}>
                -
              </button>
            </div>
          )}
        </div>
      </div>
    );
  });
  const rendercloths = cloths.map((cloth) => {
    return (
      <div className="clothbox">
        <h3>{cloth.name}</h3>
        <h6>{cloth.price}</h6>
        <div className="counter">
          <h1>Add to Cart</h1>
          <span className="counter__output">{counter}</span>
          <div className="btn__container">
            <button className="control__btn" onClick={increase}>
              +
            </button>
            <button className="control__btn" onClick={decrease}>
              -
            </button>
          </div>
        </div>
      </div>
    );
  });
  const renderfollowers = followers.map((follow) => {
    return (
      <div className="followerlist">
        <h1>{follow.name}</h1>
        <div className="cht">
          <button
            onClick={toggle}
            className={"toggle--button " + (state ? "toggle--close" : "")}
          >
            {state ? "follow" : "unfollow"}
          </button>
        </div>{" "}
      </div>
    );
  });
  //const rendercloths=console.log(cloths[1].name)
  const footer = (
    <div>
      <h1>footer</h1>
    </div>
  );

  return (
    <React.Fragment>
      {sidebarIsOn && sidebar}
      <Header />
      <Hero />
      <Features />

      <div className="dress">
        {cloths.map((cloth, index) => {
          return <Cloths key={index} Name={cloth.name} price={cloth.price} />;
        })}
      </div>
      <div className="follower">
        {followers.map((follows, index) => {
          return <Follwers key={index} Name={follows.name} />;
        })}
      </div>
      <div className="todo">
        <Todolist />
      </div>
      <div className="mini">
        <Notify />
      </div>
    </React.Fragment>
  );
}

export default App;
