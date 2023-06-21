import React from 'react'
import AboutSection from './components/AboutSection'
import Banner from './components/Banner'
import FeatureProduct from './components/FeatureProduct'
import Footer from './components/Footer'
import Header from './components/Header'
import PersonalCareProduct from './components/PersonalCareProduct'
import './components/CSS/Custom.css'
import Login from './account/Login'
import Register from './account/Register'
import ShoppingCart from './components/pages/ShoppingCart';
import CheckoutPage from './components/pages/CheckoutPage';

export default function Home() {
  return (
        <>
         {/* <Header/> */}
         {/* <Outlet/> */}
         <Banner/>
         <FeatureProduct />
         {/* <AboutSection/>
         <PersonalCareProduct /> */}
         {/* <Login/> */}
         {/* <Register /> */}
         {/* <ShoppingCart/> */}
         {/* <CheckoutPage/> */}
         {/* <Footer /> */}
        </>
  )
}
