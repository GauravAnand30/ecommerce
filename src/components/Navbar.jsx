<<<<<<< HEAD
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const state = useSelector(state => state.handleCart);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">ZIN FASHION STORE</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
=======
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
<<<<<<< HEAD
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
=======
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
<<<<<<< HEAD
                        {/* Example of dropdown menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/services">Services</NavLink>
                                <NavLink className="dropdown-item" to="/faq">FAQ</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="/terms">Terms</NavLink>
                            </div>
                        </li>
                    </ul>
                    <div className="buttons">
                        <NavLink to="/login" className="btn btn-outline-light m-2"><FaSignInAlt className="mr-1" /> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-light m-2"><FaUserPlus className="mr-1" /> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-light m-2"><FaShoppingCart className="mr-1" /> Cart ({state.length})</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
=======
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
