import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>a
        <meta charSet="utf-8" />
        <title>Plumberz - Free Plumbing Website Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />

        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />

        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@500;700&display=swap"
          rel="stylesheet"
        />

        {/* Icon Font Stylesheet */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        {/* Libraries Stylesheet */}
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

        {/* Customized Bootstrap Stylesheet */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />

        {/* Template Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />

        {/* JavaScript Libraries (Usually placed in index.html) */}
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
        <script src="lib/wow/wow.min.js" />
        <script src="lib/easing/easing.min.js" />
        <script src="lib/waypoints/waypoints.min.js" />
        <script src="lib/counterup/counterup.min.js" />
        <script src="lib/owlcarousel/owl.carousel.min.js" />
        <script src="lib/tempusdominus/js/moment.min.js" />
        <script src="lib/tempusdominus/js/moment-timezone.min.js" />
        <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js" />
        <script src="js/main.js" />
      </Helmet>

      <div>
        {/* Spinner Start */}
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        {/* Spinner End */}

        {/* Topbar Start */}
        <div className="container-fluid bg-light d-none d-lg-block">
          <div className="row align-items-center top-bar">
            <div className="col-lg-3 col-md-12 text-center text-lg-start">
              <a href="" className="navbar-brand m-0 p-0">
                <h1 className="text-primary m-0">Plumberz</h1>
              </a>
            </div>
            <div className="col-lg-9 col-md-12 text-end">
              <div className="h-100 d-inline-flex align-items-center me-4">
                <i className="fa fa-map-marker-alt text-primary me-2"></i>
                <p className="m-0">123 Street, New York, USA</p>
              </div>
              <div className="h-100 d-inline-flex align-items-center me-4">
                <i className="far fa-envelope-open text-primary me-2"></i>
                <p className="m-0">info@example.com</p>
              </div>
              <div className="h-100 d-inline-flex align-items-center">
                <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-sm-square bg-white text-primary me-0" href="">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}

        {/* Navbar Start */}
        <div className="container-fluid nav-bar bg-light">
          <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
            <a href="" className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
              <h1 className="text-primary m-0">Plumberz</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav me-auto">
                <a href="index.html" className="nav-item nav-link">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link active">
                  About
                </a>
                <a href="service.html" className="nav-item nav-link">
                  Services
                </a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Pages
                  </a>
                  <div className="dropdown-menu fade-up m-0">
                    <a href="booking.html" className="dropdown-item">
                      Booking
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Technicians
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <div className="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex align-items-center">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                  style={{ width: '45px', height: '45px' }}
                >
                  <i className="fa fa-phone-alt text-primary"></i>
                </div>
                <div className="ms-3">
                  <p className="mb-1 text-white">Emergency 24/7</p>
                  <h5 className="m-0 text-secondary">+012 345 6789</h5>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* Navbar End */}

        {/* Page Header Start */}
        <div className="container-fluid page-header mb-5 py-5">
          <div className="container">
            <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb" className="animated slideInDown">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item">
                  <a className="text-white" href="#">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-white" href="#">
                    Pages
                  </a>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}

        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="overflow-hidden">
                  <img className="img-fluid w-100 h-100" src="img/service-1.jpg" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light p-4">
                  <h5 className="text-truncate me-3 mb-0">Residential Plumbing</h5>
                  <a className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" href="">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="overflow-hidden">
                  <img className="img-fluid w-100 h-100" src="img/service-2.jpg" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light p-4">
                  <h5 className="text-truncate me-3 mb-0">Commercial Plumbing</h5>
                  <a className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" href="">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="overflow-hidden">
                  <img className="img-fluid w-100 h-100" src="img/service-3.jpg" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light p-4">
                  <h5 className="text-truncate me-3 mb-0">Emergency Servicing</h5>
                  <a className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" href="">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}

        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase">About Us</h6>
                <h1 className="mb-4">We Are Trusted Plumbing Company Since 1990</h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                  Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p className="fw-medium text-primary">
                  <i className="fa fa-check text-success me-3"></i>Residential &amp; commercial plumbing
                </p>
                <p className="fw-medium text-primary">
                  <i className="fa fa-check text-success me-3"></i>Quality services at affordable prices
                </p>
                <p className="fw-medium text-primary">
                  <i className="fa fa-check text-success me-3"></i>Immediate 24/ 7 emergency services
                </p>
                <div className="bg-primary d-flex align-items-center p-4 mt-5">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                    style={{ width: '60px', height: '60px' }}
                  >
                    <i className="fa fa-phone-alt fa-2x text-primary"></i>
                  </div>
                  <div className="ms-3">
                    <p className="fs-5 fw-medium mb-2 text-white">Emergency 24/7</p>
                    <h3 className="m-0 text-secondary">+012 345 6789</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pt-4" style={{ minHeight: '500px' }}>
                <div className="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="img/about-1.jpg"
                    style={{ objectFit: 'cover', padding: '0 0 50px 100px' }}
                    alt=""
                  />
                  <img
                    className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50"
                    src="img/about-2.jpg"
                    style={{ objectFit: 'cover' }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        {/* Fact Start */}
        <div className="container-fluid fact bg-dark my-5 py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                <i className="fa fa-check fa-2x text-white mb-3"></i>
                <h2 className="text-white mb-2" data-toggle="counter-up">
                  1234
                </h2>
                <p className="text-white mb-0">Years Experience</p>
              </div>
              <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
                <h2 className="text-white mb-2" data-toggle="counter-up">
                  1234
                </h2>
                <p className="text-white mb-0">Expert Technicians</p>
              </div>
              <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                <i className="fa fa-users fa-2x text-white mb-3"></i>
                <h2 className="text-white mb-2" data-toggle="counter-up">
                  1234
                </h2>
                <p className="text-white mb-0">Satisfied Clients</p>
              </div>
              <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                <i className="fa fa-wrench fa-2x text-white mb-3"></i>
                <h2 className="text-white mb-2" data-toggle="counter-up">
                  1234
                </h2>
                <p className="text-white mb-0">Compleate Projects</p>
              </div>
            </div>
          </div>
        </div>
        {/* Fact End */}

        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-secondary text-uppercase">Our Technicians</h6>
              <h1 className="mb-5">Our Expert Technicians</h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="img/team-1.jpg" alt="" />
                  </div>
                  <div className="team-text">
                    <div className="bg-light">
                      <h5 className="fw-bold mb-0">Full Name</h5>
                      <small>Designation</small>
                    </div>
                    <div className="bg-primary">
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="img/team-2.jpg" alt="" />
                  </div>
                  <div className="team-text">
                    <div className="bg-light">
                      <h5 className="fw-bold mb-0">Full Name</h5>
                      <small>Designation</small>
                    </div>
                    <div className="bg-primary">
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="img/team-3.jpg" alt="" />
                  </div>
                  <div className="team-text">
                    <div className="bg-light">
                      <h5 className="fw-bold mb-0">Full Name</h5>
                      <small>Designation</small>
                    </div>
                    <div className="bg-primary">
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="img/team-4.jpg" alt="" />
                  </div>
                  <div className="team-text">
                    <div className="bg-light">
                      <h5 className="fw-bold mb-0">Full Name</h5>
                      <small>Designation</small>
                    </div>
                    <div className="bg-primary">
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}

        {/* Footer Start */}
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Address</h4>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3"></i>+012 345 67890
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3"></i>info@example.com
                </p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Opening Hours</h4>
                <h6 className="text-light">Monday - Friday:</h6>
                <p className="mb-4">09.00 AM - 09.00 PM</p>
                <h6 className="text-light">Saturday - Sunday:</h6>
                <p className="mb-0">09.00 AM - 12.00 PM</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Services</h4>
                <a className="btn btn-link" href="">
                  Drain Cleaning
                </a>
                <a className="btn btn-link" href="">
                  Sewer Line
                </a>
                <a className="btn btn-link" href="">
                  Water Heating
                </a>
                <a className="btn btn-link" href="">
                  Toilet Cleaning
                </a>
                <a className="btn btn-link" href="">
                  Broken Pipe
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Newsletter</h4>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                  <input
                    className="form-control border-0 w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                  Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}

        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top">
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default About;