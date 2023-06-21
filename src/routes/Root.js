import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link, NavLink } from 'react-router-dom';
import Product from '../components/pages/Product';

export default function Root() {
  const cart = useSelector((state) => state.counter.cart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className='nav-item'>
                  <Link className='nav-link' to="/home">Home</Link>
                </li> */}
                <li className="nav-item">
                <NavLink className="nav-link"  to="/product">Shop</NavLink>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" to="#">Action</a></li>
                    <li><a className="dropdown-item" to="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" to="#">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" to="#" aria-disabled="true">Contact</a>
                </li>
            </ul>
            <div className="d-flex">
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className="nav-item">
                  <NavLink className="nav-link countNav" to="/cart-page">Cart <span className='cartCount'>{cart?.length}</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">My Account</NavLink>
                </li>
              </ul>
            </div>
            </div>
        </div>
        </nav>
        {/* <!-- .navbar --> */}
    </div>
  )
}
