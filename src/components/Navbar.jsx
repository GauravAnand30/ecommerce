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
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
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
