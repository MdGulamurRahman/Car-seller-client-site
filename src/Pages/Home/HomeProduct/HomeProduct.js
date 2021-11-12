import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

const HomeProduct = ({product}) => {
    const {_id, img, name, details, price} = product;
    return (
        <CardGroup>
            <Zoom>
         <Card>
            <div className="bg-image hover-zoom">
             <Card.Img style={{ height:"280px"}} variant="top" src={img} />
            </div>
            <Card.Body>
            <Card.Title className="fw-bold text-success">{name}</Card.Title>
            <Card.Text className="text-secondary">
                {details}
            </Card.Text>
            </Card.Body>
            <Card.Footer className="p-3 border-0 d-flex align-items-center justify-content-between">
            <Link to={`/productDetails/${_id}`}>
            <button type="button" className="btn btn-dark">Purchase</button>
            </Link>
            <Card.Title className="fw-bold text-danger"><small className="text-dark">PRICE: </small>${price}</Card.Title>
            </Card.Footer>
        </Card>
        </Zoom>
        </CardGroup>
            
        
    );
};

export default HomeProduct;