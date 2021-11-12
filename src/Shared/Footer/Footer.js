import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
        <footer class="text-center text-lg-start text-muted footer-area">
        
        <section
            class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
            <div class="me-5 d-none d-lg-block">
            <span className="all-clr">Get connected with us on social networks:</span>
            </div>

            <div className="all-clr">
            <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
            </a>
            </div>
        </section>
        <section class="">
            <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 all-clr">
                    <i class="fas fa-gem me-3"></i>CAR ACCESSORIES
                </h6>
                <p className="text-white-50">
                Our industry-leading online auto loan application puts you in the driver's seat with the information you need to make a decision on your next used car purchase.
                </p>
                </div>
                <div className="mx-auto mb-4 col-md-2 col-lg-2 col-xl-2">
                <h6 className="mb-4 text-uppercase fw-bold all-clr">
                    ALL NEW CARS
                </h6>
                <p className="text-white-50">
                    <a href="#!" class="text-reset">PIZZA</a>
                </p>
                <p className="text-white-50">
                    <a href="#!" class="text-reset">BURGER</a>
                </p>
                <p className="text-white-50">
                    <a href="#!" class="text-reset">HOTDOG</a>
                </p>
                <p className="text-white-50">
                    <a href="#!" class="text-reset">SANDWICH</a>
                </p>
                </div>
                <div className="mx-auto mb-4 col-md-3 col-lg-2 col-xl-2">
                <h6 className="mb-4 text-uppercase fw-bold all-clr">
                    USEFUL LINKS
                </h6>
                <p className="text-white-50">
                    <a href="#!" class="text-reset">PRICING</a>
                </p>
                <p className="text-white-50">
                    <a href="#!" class="text-reset">SETTINGS</a>
                </p>
                <p className="text-white-50">
                    <a href="#!" class="text-reset">ORDERS</a>
                </p>
                <p className="text-white-50">
                    <a href="#!" class="text-reset">HELP</a>
                </p>
                </div>
                <div className="mx-auto mb-4 col-md-4 col-lg-3 col-xl-3 mb-md-0">
                <h6 className="mb-4 text-uppercase fw-bold all-clr">
                    CONTACT
                </h6>
                <p className="text-white-50"><i className="fas fa-home me-3 text-info"></i> Bangladesh, Chittagong</p>
                <p className="text-white-50">
                    <i class="fas fa-envelope me-3 text-info"></i>
                    Fahimjahin321@gmail.com
                </p>
                <p className="text-white-50"><i className="fas fa-phone me-3 text-info"></i> + 01 234 567 88</p>
                <p className="text-white-50"><i className="fas fa-print me-3 text-info"></i> + 01 234 567 89</p>
                </div>
            </div>
            </div>
        </section>

        <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
           <p className="text-white-50"> © 2021 Copyright: Abrar Fahim All Reserved</p>
        </div>
        
        </footer>

        </div>
    );
};

export default Footer;