<<<<<<< HEAD
import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

=======
import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
const Register = () => {
    return (
        <>
            <Navbar />
<<<<<<< HEAD
            <div className="container my-3 py-3" style={{ backgroundColor: "#8a2be2" }}>
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100 justify-content-center">
                    <div className="col-md-6 col-lg-4 col-sm-8">
                        <form>
                            <div className="form-group my-3">
                                <label htmlFor="Name">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
=======
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="email"
                                    class="form-control"
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
                                    id="Name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
<<<<<<< HEAD
                            <div className="form-group my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
=======
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div>
<<<<<<< HEAD
                            <div className="form-group my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
=======
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
                                    id="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
<<<<<<< HEAD
                                <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit" disabled>
=======
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

<<<<<<< HEAD
export default Register;
=======
export default Register
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
