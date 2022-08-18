import React, { useEffect, useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";

import { AuthContext } from "./context/auth-context";

import Navbar from "./components/shared/nav/Navbar";
import Home from "./components/shared/home/home";
import Shop from "./components/shared/shop/shop";
import Product from "./components/shared/shop/productDetail";
import SignUp from "./components/shared/auth/signup";
import SignIn from "./components/shared/auth/signin";
import MyProfile from "./components/buyer/profile";
import Seller from "./components/seller/navbar/nav";
import Cart from "./components/buyer/cart/Cart";
import OrderedProduct from "./components/buyer/OrderedProduct";

let logoutTimer;

const App = () => {
  const [isToken, setToken] = useState(false);
  const [tokenExpiration, setTokenExpiration] = useState();
  const [userId, setUserId] = useState(false);
  const [role, setRole] = useState(false);

  const login = useCallback((uid, token, role, expirationDate) => {
    setToken(token);
    setUserId(uid);
    setRole(role);
    const tokenExpiration =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60 * 3);
    setTokenExpiration(tokenExpiration);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        role: role,
        expiration: tokenExpiration.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpiration(null);
    setUserId(null);
    setRole(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (isToken && tokenExpiration) {
      const remainingTime = tokenExpiration.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [isToken, logout]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        storedData.role,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  useEffect(() => {
    document.title = "Furniture Land";
  }, []);

  const isLoggedIn = true;
  let routes;

  if (isLoggedIn && role === "Seller") {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Seller />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else if (isLoggedIn && role === "Buyer") {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shop" exact>
          <Shop />
        </Route>
        <Route path="/furniture/:id" exact>
          <Product />
        </Route>
        <Route path="/MyProfile" exact>
          <MyProfile />
        </Route>
        <Route path="/MyCart" exact>
          <Cart />
        </Route>
        <Route path="/MyOrders"  >
          <OrderedProduct />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shop" exact>
          <Shop />
        </Route>
        <Route path="/furniture/:id" exact>
          <Product />
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!isToken,
        token: isToken,
        userId: userId,
        role: role,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        {role !== "Seller" && (
          <div>
            <Navbar />
          </div>
        )}
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
