<<<<<<< HEAD
import React from 'react';
import { Footer, Navbar } from "../components";

=======
import React from 'react'
import { Footer, Navbar } from "../components";
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
const AboutPage = () => {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
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
=======
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
          totam vero quas provident ipsam, veritatis nostrum velit quos
          recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
          earum unde eligendi autem praesentium, doloremque distinctio nesciunt
          porro tempore quis eaque labore voluptatibus ea necessitatibus
          exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
          tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
          quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
          delectus expedita a alias nam recusandae illo debitis repellat libero,
          quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
          dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

<<<<<<< HEAD
export default AboutPage;
=======
export default AboutPage
>>>>>>> 28d2c2c9e964a60e1b1521db4121bcbb985b360f
