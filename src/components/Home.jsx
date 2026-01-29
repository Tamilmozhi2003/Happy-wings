import React from 'react';
import { Link } from 'react-router-dom'; 
import icon from '../assets/images/icon.jpg';  
import '../assets/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from '../assets/images/birds.jpg';
import image2 from '../assets/images/parrot.jpg';
import image3 from '../assets/images/corco.jpg';
import image4 from '../assets/images/finch.jpg';
import image5 from '../assets/images/canary.jpg';





function Home()
{
    return(
<>
         <nav
  className="navbar navbar-expand-lg px-4 shadow-sm"
  style={{ backgroundColor: 'lightsalmon' }}

>
  <div className="container-fluid">
    {/* Brand Logo + Text */}
    <Link className="navbar-brand text-white fw-bold d-flex align-items-center" to="/">
      <img
        src={icon}
        alt="logo"
        className="img-fluid me-2"
        loading="eager"
        style={{ width: "45px", height: "45px", borderRadius: "8px" }}
      />
        HAPPY WINGS
    </Link>

    {/* Toggler */}
    <button
      className="navbar-toggler bg-white mx-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menu Items */}
    <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
      <ul className="navbar-nav align-items-lg-center">
        <li className="nav-item mx-2">
          <Link to="/" className="nav-link text-white d-flex align-items-center">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/Birds" className="nav-link text-white d-flex align-items-center">Our Birds</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/contact" className="nav-link text-white d-flex align-items-center">contact</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>

<section>
    <div className="container mt-3">
  <div className="row align-items-center">
    <h2>HOME</h2>
  
    <div className="col-sm-6 col-lg-5 mt-2 mb-5 ms-auto text-end">
      <img
        src={image1}className="img-fluid"
alt="pet shop"
      />
    </div>
    <div className="col-md-6">
      <h1 className="fw-bold">Welcome to Birds World</h1>
      <p className="text-muted">
      Our birds are raised in a clean, safe, and natural environment with proper nutrition and regular care.
       We believe every bird deserves love, comfort, and a stress-free home.
      </p>
      <button className="btn btn-primary">
        Shop Now
      </button>
    </div>
 </div>
</div>

</section>


<div className="container mt-3">
  <div className="row align-items-center">
    <h2>OUR BIRDS</h2>
    <p>At Birds World, we offer a beautiful collection of healthy, active, birds. Each bird is raised with love,
         proper nutrition, and regular health care to ensure they are friendly and happy.</p>
<div className="container mt-5 mb-2">
  <div className="row">
<div className="col-sm-3 mb-2">
  <img src={image2} className="img-fluid rounded circle" alt="pet shop"/>
  <h5 class="card-title">Parrots</h5>
  <p class="card-text">colorful, and friendly</p>
</div>

  <div className="col-sm-3 mb-2">
  <img src={image3} className="img-fluid rounded circle" alt="pet shop"/>
  <h5 class="card-title">Cockatiels</h5>
  <p class="card-text">Calm nature with charming crests</p>
  </div>
   <div className="col-sm-3 mb-2">
  <img src={image4} className="img-fluid rounded circle" alt="pet shop"/>
  <h5 class="card-title">Finches</h5>
  <p class="card-text">Active birds with soft chirping sounds</p>
  </div>
 <div className="col-sm-3 mb-2">
  <img src={image5} className="img-fluid rounded circle" alt="pet shop"/>
  <h5 class="card-title">Canaries</h5>
  <p class="card-text">Famous for sweet and melodious singing</p>
  </div>
</div>
</div>
</div>
</div>

       <section className="py-5 bg-light">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">

        <h2 className="text-center mb-4">Get in Touch</h2>
        <p className="text-center text-muted mb-4">
        </p>

        <form>
        
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input type="text" class="form-control" placeholder="Enter your name" required/>
          </div>

          
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" class="form-control" placeholder="Enter your email" required/>
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" class="form-control" placeholder="Enter your phone number"/>
          </div>


          <div className="mb-3">
            <label className="form-label">Subject</label>
            <select className="form-select">
              <option selected>Choose a birds</option>
              <option>parrot</option>
              <option>Finches</option>
              <option>Canaries</option>
              <option>Other</option>
            </select>
          </div>

    
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea class="form-control" rows="4" placeholder="Write your message here..."></textarea>
          </div>

        
          <div className="text-center">
            <button type="submit" class="btn btn-dark px-5">
              Send Message
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
  </section>
    
<footer className="footer">
    <div className="footer-container">

        <div className="footer-col">
            <h4>About us</h4>
            <p> Have questions about our birds? We’re happy to help!
            </p>
        </div>

        <div className="footer-col">
            <h4>Quick Lines</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">contact</a></li>

                
    
            </ul>
        </div>

        <div className="footer-col">
            <h4>Birds World</h4>
           <p>🐦 Healthy & Happy Birds</p>
              <p>📍 Chennai, Tamil Nadu</p>
              <p>📞 +91 98765 43210</p>
              <p>📧 birdsworld@gmail.com</p>
              <p>⏰ Mon – Sat: 9 AM – 8 PM</p>
        </div>

    </div>
</footer>
</>

    );
}
export default Home;