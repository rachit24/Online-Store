import React from "react";
import {Link} from "react-router-dom"
import logo from "../../../images/logo.png";
// import home from "../../../images/home.png";
// import products from "../../../images/products.png";
// import about from "../../../images/about.png";
// import contact from "../../../images/contact.png";
// import cart from "../../../images/cart.png";
// import search from "../../../images/search.png";
// import profile from "../../../images/Profile.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                &nbsp; &nbsp; Handicraft Store
            </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link className="navbar-link" to="/">
                        Home
                        {/* <img src={home} alt="" width="30" height="33" className="icon"/> */}
                    </Link>
                    <Link className="navbar-link" to="/products">
                        Products
                        {/* <img src={products} alt="" width="30" height="33" className="icon"/> */}
                    </Link>
                    <Link className="navbar-link" to="/contact">
                        Contact
                        {/* <img src={contact} alt="" width="30" height="33" className="icon"/> */}
                    </Link>
                    <Link className="navbar-link" to="/about">
                        About
                        {/* <img src={about} alt="" width="30" height="33" className="icon"/> */}
                    </Link>
                    <Link className="navbar-link" to="/cart">
                        Cart
                        {/* <img src={cart} alt="" width="30" height="33" className="icon"/> */}
                    </Link>
                    <Link className="navbar-link" to="/login">
                        Profile
                        {/* <img src={profile} alt="" width="30" height="33" className="icon"/> */}
                    </Link>
                    <Link className="navbar-link" to="/search">
                        {/* <img src={search} alt="" width="30" height="33" className="icon"/> */}
                        Search
                    </Link>
                    {/* <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/products">Products</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/login">Profile</Link>
                    <Link className="nav-link" to="/cart">Cart</Link>
                    <Link className="nav-link" to="/search">Search</Link> */}
                </div>
                </div>
            </div>
        </nav>
  )
};

export default Header;
