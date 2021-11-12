import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import Zoom from 'react-reveal/Zoom';
const Ratings = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviewRatings')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="pb-5 container-fluid">
            <h1 className="pt-5 fw-bold text-dark"><span>MANAGE YOUR PRODUCTS</span></h1>
            <h6 className="pt-2 pb-4 all-clr"><small>Find and Compare Great Car Deals!</small></h6>
            <div className="container">
            <Row xs={1} md={4} className="g-2">
            {
               reviews.map(pd => <CardGroup>
                    <Zoom>
                 <Card className="border-0">
                    <div className="bg-image hover-zoom">
                    <Card.Img style={{ borderRadius: "50%"}} variant="top" src={pd.img} />
                    </div>
                    <Card.Body>
                    <Card.Title className="fw-bold text-success">{pd.name}</Card.Title>
                    
                    <Card.Text className="text-secondary">
                        {pd.reviewDetails}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="p-3 border-0 d-flex align-items-center justify-content-between">
                        Rating:
                    <Rating
                    initialRating={pd.rating}
                    readonly
                    emptySymbol="far fa-star-o fa-2x"
                    fullSymbol="fas fa-star fa-2x"
                    />
                    </Card.Footer>
                </Card>
                </Zoom>
                </CardGroup>)
            }
            </Row>
            </div>
        </div>
    );
};

export default Ratings;