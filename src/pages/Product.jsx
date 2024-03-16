import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
<<<<<<< HEAD
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [additionalProducts, setAdditionalProducts] = useState([]);
=======
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
<<<<<<< HEAD
    const fetchData = async () => {
      try {
        setLoading(true);
        setLoading2(true);

        // Fetch main product
        const productResponse = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productData = await productResponse.json();
        setProduct(productData);

        // Fetch similar products
        const similarResponse = await fetch(
          `https://fakestoreapi.com/products/category/${productData.category}`
        );
        const similarData = await similarResponse.json();
        setSimilarProducts(similarData);

        // Fetch additional products
        const additionalResponse = await fetch(`https://fakestoreapi.com/products`);
        const additionalData = await additionalResponse.json();
        setAdditionalProducts(additionalData.slice(1, 5)); // Get 4 additional products excluding the main product

        setLoading(false);
        setLoading2(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setLoading2(false);
      }
    };

    fetchData();
=======
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
  }, [id]);

  const Loading = () => {
    return (
<<<<<<< HEAD
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 py-3">
            <Skeleton height={400} width={400} />
          </div>
          <div className="col-md-6 py-5">
            <Skeleton height={30} width={250} />
            <Skeleton height={90} />
            <Skeleton height={40} width={70} />
            <Skeleton height={50} width={110} />
            <Skeleton height={120} />
            <Skeleton height={40} width={110} inline={true} />
            <Skeleton className="mx-3" height={40} width={110} />
          </div>
        </div>
      </div>
    );
  };

  const ProductDetails = () => {
    return (
      <div className="container my-5 py-2 bg-light-purple border border-secondary rounded">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12 py-3">
            <img
              className="img-fluid"
              src={product.image}
              alt={product.title}
              width="400px"
              height="400px"
            />
          </div>
          <div className="col-md-6 col-md-6 py-5 text-center text-md-start">
            <h4 className="text-uppercase text-muted">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead">
              {product.rating && product.rating.rate}{" "}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6  my-4">${product.price}</h3>
            {product.sale && (
              <div className="mb-3">
                <span className="text-danger me-2">SALE!</span>
                <span className="text-decoration-line-through me-2">
                  ${product.originalPrice}
                </span>
                <span>
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                </span>
              </div>
            )}
            <p className="lead">{product.description}</p>
            <p className="lead">Brand: {product.brand}</p>
            <button
              className="btn btn-outline-dark animate__animated animate__bounce"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-dark mx-3 animate__animated animate__bounce">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const AdditionalProduct = ({ product }) => {
    return (
      <div key={product.id} className="card mx-4 text-center">
        <img
          className="card-img-top p-3"
          src={product.image}
          alt="Card"
          height={300}
          width={300}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title.substring(0, 15)}...</h5>
        </div>
        <div className="card-body">
          <Link to={"/product/" + product.id} className="btn btn-dark m-1">
            View Details
          </Link>
          <button
            className="btn btn-dark m-1"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
=======
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
    );
  };

  const Loading2 = () => {
    return (
<<<<<<< HEAD
      <div className="my-4 py-4">
        <div className="d-flex">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const SimilarProducts = () => {
    return (
      <div className="py-4 my-4">
        <div className="d-flex">
          {similarProducts.map((item) => (
            <div key={item.id} className="card mx-4 text-center">
              <img
                className="card-img-top p-3"
                src={item.image}
                alt="Card"
                height={300}
                width={300}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item.title.substring(0, 15)}...
                </h5>
              </div>
              <div className="card-body">
                <Link
                  to={"/product/" + item.id}
                  className="btn btn-dark m-1"
                >
                  View Details
                </Link>
                <button
                  className="btn btn-dark m-1"
                  onClick={() => addProduct(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

=======
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">${product.price}</li>
                  </ul> */}
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addProduct(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
  return (
    <>
      <Navbar />
      <div className="container">
<<<<<<< HEAD
        <div className="row">
          {loading ? <Loading /> : <ProductDetails />}
        </div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2 className="text-center">You may also like</h2>
=======
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
          <h2 className="">You may also Like</h2>
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
<<<<<<< HEAD
              {loading2 ? <Loading2 /> : (
                <>
                  {additionalProducts.map((product) => (
                    <AdditionalProduct key={product.id} product={product} />
                  ))}
                </>
              )}
=======
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
