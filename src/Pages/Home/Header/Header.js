import React from 'react';
import './Header.css'
import logo from '../../../images/logo3.png'
import Bounce from 'react-reveal/Bounce';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="overflow-hidden container-fluid home-banner">
            <div className="row">
                <div className="col-md-7 logo-parent">
                  <Bounce left cascade>
                    <img className="banner-logo" src={logo} alt="" />
                    <h2 className="my-4 text-light">Auto Parts And Car Accessories Shopify Theme</h2>
                    <Link to="/allProducts">
                    <button className="h-btn">Explore Demo</button>
                    </Link>
                    <h6 className="mt-3">"Please enter password 1 to view live demo"</h6>
                    </Bounce>
                </div>
                <div className="col-md-5"></div>
            </div>
        </div>
    );
};

export default Header;