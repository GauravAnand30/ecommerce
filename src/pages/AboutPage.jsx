import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <h1 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', color: '#6b3e89' }}>About Us</h1>
        <hr className="mb-5" style={{ borderColor: '#6b3e89' }} />
        <p className="lead text-center" style={{ fontSize: '1.2rem', color: '#333' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis elit ac erat aliquet, vel rhoncus lacus ultrices. In hac habitasse platea dictumst. Sed condimentum orci at quam efficitur malesuada. Proin vehicula enim vel magna fringilla, id tincidunt mauris gravida. Integer tristique turpis vel sapien cursus, et varius nunc sodales.
        </p>

        <h2 className="text-center my-5" style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem', color: '#6b3e89' }}>Our Products</h2>
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 border-0">
              <img className="card-img-top" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Men's Clothing" />
              <div className="card-body">
                <h5 className="card-title text-center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', color: '#333' }}>Men's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 border-0">
              <img className="card-img-top" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Women's Clothing" />
              <div className="card-body">
                <h5 className="card-title text-center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', color: '#333' }}>Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 border-0">
              <img className="card-img-top" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jewelry" />
              <div className="card-body">
                <h5 className="card-title text-center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', color: '#333' }}>Jewelry</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 border-0">
              <img className="card-img-top" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Electronics" />
              <div className="card-body">
                <h5 className="card-title text-center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', color: '#333' }}>Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage;
