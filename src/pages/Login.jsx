import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
