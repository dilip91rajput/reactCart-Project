import React from 'react'
import { Link } from 'react-router-dom'
import Root from '../routes/Root'

export default function Header() {
  return (
    <>
      {/* // <!-- ======= Header ======= --> */}
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

          <Link to="/" className="logo d-flex align-items-center"><h1>Logis</h1></Link>
          {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
          {/* <!-- <img src={logo} alt=""> --> */}

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          {/* Navigation starts here  */}
          <Root />

        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  )
}
