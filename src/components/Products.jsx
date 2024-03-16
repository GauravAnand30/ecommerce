import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
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

    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
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
    </div>
  );
};

export default Products;
