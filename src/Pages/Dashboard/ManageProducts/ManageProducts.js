import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Card, CardGroup } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';


const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const [status, setStatus] = useState(true); 

    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res => res.json())
        .then(data => {
            setManageProducts(data)
            setStatus(true)
        })
    },[status])
    const handleOrderDelete = id => {
        const proceed = window.confirm("Are you want to delete?")
        if(proceed){
            const url = `http://localhost:5000/deleteOrder/${id}`
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(result => {
                if(result.deletedCount){
                    alert('Successfully Order deleted')
                  setStatus(false)
                }
            })
        }
       
    }
       
    return (
        <div className="pb-5 container-fluid p-banner">
            <h1 className="pt-5 fw-bold text-light"><span>MANAGE YOUR PRODUCTS</span></h1>
            <h6 className="pt-2 pb-4 all-clr"><small>Find and Compare Great Car Deals!</small></h6>
            <div className="container">
            <Row xs={1} md={3} className=" g-4">
            {
                manageProducts.map(pd => <CardGroup>
                    <Zoom>
                 <Card>
                    <div className="bg-image hover-zoom">
                    <Card.Img style={{ height:"280px"}} variant="top" src={pd.img} />
                    </div>
                    <Card.Body>
                    <Card.Title className="fw-bold text-success">{pd.name}</Card.Title>
                    
                    <Card.Text className="text-secondary">
                        {pd.details}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="p-3 border-0 d-flex align-items-center justify-content-between">
                    <button onClick={() => handleOrderDelete(pd?._id)} type="button" className="btn btn-dark">Delete</button>
                    <Card.Title className="fw-bold text-danger"><small className="text-dark">PRICE: </small>${pd.price}</Card.Title>
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

export default ManageProducts;