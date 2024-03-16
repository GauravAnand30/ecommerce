import React from "react";

const Home = () => {
  return (
    <>
<<<<<<< HEAD
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/1600x900/?shopping" className="d-block w-100" alt="Shopping" style={{ objectFit: "cover", height: "100vh" }} />
            <div className="carousel-caption d-none d-md-block text-center">
              <h1 className="display-4 fw-bold">Welcome to Our Online Store</h1>
              <p className="lead">Explore our wide range of products and discover amazing deals on fashion, electronics, home decor, and more!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/1600x900/?ecommerce" className="d-block w-100" alt="E-commerce" style={{ objectFit: "cover", height: "100vh" }} />
            <div className="carousel-caption d-none d-md-block text-center">
              <h1 className="display-4 fw-bold">Discover Exclusive Offers</h1>
              <p className="lead">Don't miss out on our exclusive sale! Shop now and save big on your favorite items.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
=======
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
      </div>
    </>
  );
};

export default Home;
