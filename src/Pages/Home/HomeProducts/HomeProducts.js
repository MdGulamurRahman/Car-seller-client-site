import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://mighty-sea-73980.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="container-fluid">
            <h1 className="pt-5 fw-bold"><span>FEATURED CAR</span></h1>
            <h6 className="pt-2 pb-4 text-info"><small>We Get The Best Result Possible!</small></h6>
            <div className="container">
            <Row xs={1} md={3} className=" g-4">
            {
                products.slice(0,6).map(product => <HomeProduct key={product._id} product={product}></HomeProduct>)
            }
            </Row>
            </div>
        </div>
    );
};

export default HomeProducts;