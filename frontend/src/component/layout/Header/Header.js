import React from "react";
import {Link} from "react-router-dom"
import logo from "../../../images/logo.png";
import home from "../../../images/home.png";
import products from "../../../images/products.png";
import about from "../../../images/about.png";
import contact from "../../../images/contact.png";
import cart from "../../../images/cart.png";
import search from "../../../images/search.png";
import profile from "../../../images/Profile.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                &nbsp; &nbsp; Pet Store
            </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link className="navbar-link" to="/">
                        <img src={home} alt="" width="30" height="33" className="icon"/>
                    </Link>
                    <Link className="navbar-link" to="/products">
                        <img src={products} alt="" width="30" height="33" className="icon"/>
                    </Link>
                    <Link className="navbar-link" to="/contact">
                        <img src={contact} alt="" width="30" height="33" className="icon"/>
                    </Link>
                    <Link className="navbar-link" to="/about">
                        <img src={about} alt="" width="30" height="33" className="icon"/>
                    </Link>
                    <Link className="navbar-link" to="/cart">
                        <img src={cart} alt="" width="30" height="33" className="icon"/>
                    </Link>
                    <Link className="navbar-link" to="/login">
                        <img src={profile} alt="" width="30" height="33" className="icon"/>
                    </Link>
                    <Link className="navbar-link" to="/search">
                        <img src={search} alt="" width="30" height="33" className="icon"/>
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
