import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Card, CardGroup } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [loading, setLoading] = useState(true);
 
    const {user} = useAuth();

    useEffect(()=>{
        fetch(`https://mighty-sea-73980.herokuapp.com/myOrders?email=${user.email}`)
        .then(res => res.json())
        .then(result => {
           setMyOrders(result)
           setLoading(true)
           console.log(result)
        })
    },[loading])
    const handleOrderDelete = id => {
        const proceed = window.confirm("Are you want to delete?")
        if(proceed){
            const url = `https://mighty-sea-73980.herokuapp.com/deleteOrder/${id}`
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(result => {
                if(result.deletedCount){
                    alert('Successfully Order deleted')
                    setLoading(false)
                }
            })
        }
       
    }
    return (
        <div className="pb-5 container-fluid">
            <h1 className="pt-5 fw-bold text-dark"><span>MY ORDERS {myOrders.length}</span></h1>
            <div className="container">
            <Row xs={1} md={3} className=" g-4">
            {
               myOrders.map(pd => <CardGroup>
                    <Zoom>
                 <Card>
                    <div className="bg-image hover-zoom">
                    <Card.Img style={{ height:"280px"}} variant="top" src={pd.product_img} />
                    </div>
                    <Card.Body>
                    <Card.Title className="fw-bold text-success">{pd.product_name}</Card.Title>
                    
                    <Card.Text className="text-secondary">
                        {pd.product_details}
                    </Card.Text>
                    <p className="text-danger">{pd.status}</p>
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

export default MyOrders;