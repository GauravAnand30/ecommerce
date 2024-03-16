import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
<<<<<<< HEAD
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

// Function to generate random names
const generateRandomName = () => {
  const adjectives = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Black", "White"];
  const nouns = ["Shirt", "Dress", "Jeans", "Shoes", "Hat", "Gloves", "Skirt", "Sweater", "Coat"];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun}`;
};

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    let componentMounted = true;

=======

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  useEffect(() => {
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
<<<<<<< HEAD
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const filterProduct = (category) => {
    const updatedList = data.filter((item) => item.category === category);
    setFilter(updatedList);
  };

  const Loading = () => {
    return (
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
            <Skeleton height={592} />
          </div>
        ))}
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <div className="row">
        {filter.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100 border-white animate__animated animate__fadeInUp animate__delay-1s">
              <img
                className="card-img-top p-3"
                src={product.image}
                alt="Card"
                height={300}
              />
              <div className="card-body text-white">
                <h5 className="card-title">{generateRandomName()}</h5>
                <p className="card-text">{product.description.substring(0, 90)}...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ {product.price}</li>
              </ul>
              <div className="card-body">
                <Link to={"/product/" + product.id} className="btn btn-dark m-1 border-white rounded-pill animate__animated animate__fadeInUp animate__delay-1s">
                  View Details
                </Link>
                {product.sale && (
                  <span className="badge bg-danger m-1 rounded-pill animate__animated animate__fadeInUp animate__delay-1s">Sale</span>
                )}
                <button className="btn btn-dark m-1 border-white rounded-pill animate__animated animate__fadeInUp animate__delay-1s" onClick={() => addProduct(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <div className="container">
=======
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
  );
};

export default Products;
