import { Route, Router, Routes, Switch } from "react-router-dom";
import { render } from 'react-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useSelector, useDispatch } from 'react-redux';
import Product from "./components/pages/Product";
import Home from "./Home";

export default function App() {
    const {isLoading} = useSelector((store) => store.counter);
    // const cartData = useSelector((state) => state.counter.cart);


      if (isLoading) {
        return (
          <div className='loading'>
            <h1>Loading...</h1>
          </div>
        );
      }

    return (
        <>
            <Header />
            <Footer />
        </>
    );
}