import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Navigation from '../../../Shared/Navigation/Navigation';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://mighty-sea-73980.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <>
        <Navigation></Navigation>
        <div className="pb-5 container-fluid p-banner">
            <h1 className="pt-5 fw-bold text-light"><span>BUY YOUR DREAM CAR</span></h1>
            <h6 className="pt-2 pb-4 all-clr"><small>Find and Compare Great Car Deals!</small></h6>
            <div className="container">
            <Row xs={1} md={3} className=" g-4">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            </Row>
            </div>
        </div>
        </>
    );
};

export default Products;