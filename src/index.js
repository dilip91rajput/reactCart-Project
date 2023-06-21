import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';
import ErrorPage from './error-page';
import './index.css';
// import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Home from './Home';
import Root from './routes/Root';
import Product from './components/pages/Product';
import Login from './account/Login';
import Header from './components/Header';
import Footer from './components/Footer';
// import App from './App';
import {store} from './store';
import {Provider} from 'react-redux';
import ShoppingCart from './components/pages/ShoppingCart';
import CheckoutPage from './components/pages/CheckoutPage';
import Register from './account/Register';


export default function App() {

    return (
      <Router>
        <div>
          <Header />
          <div className="wrapper">
            <Routes>
              <Route path={"/"} element={<Home/>} />
              <Route path={"/product"} element={<Product/>} />
              <Route path={"/cart-page"} element={<ShoppingCart />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/register"} element={<Register />} />
              <Route path={"/checkout"} element={<CheckoutPage />} />
              <Route component={ErrorPage} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    );
  
}

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    {/* <ShoppingCart /> */}
  </Provider>
) ;