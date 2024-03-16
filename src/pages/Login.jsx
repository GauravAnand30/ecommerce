import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <div className="bg-light-purple">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card p-4 border border-secondary rounded">
                <h1 className="text-center mb-4 fw-bold">Login</h1>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="text-center mb-3">
                    <p className="mb-0">
                      New Here?{" "}
                      <Link
                        to="/register"
                        className="text-decoration-underline text-info"
                      >
                        Register
                      </Link>{" "}
                    </p>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-purple fw-bold btn-lg" // Changed button color to purple and size to large
                      disabled
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
=======
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
                  Login
                </button>
              </div>
            </form>
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
