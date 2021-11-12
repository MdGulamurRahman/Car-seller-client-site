import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card, CardGroup } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
import { useForm } from 'react-hook-form';
import './ProductDetails.css'
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const ProductDetails = () => {
    const {productId} = useParams();
    const [item, setItem] = useState({});
    const {user} = useAuth()
   
    useEffect(()=>{
        const url = `http://localhost:5000/singleCar/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    },[]);

    const { register, handleSubmit, reset } = useForm();
   const onSubmit = data =>{
       data.id = productId;
       data.product_name = item.name;
       data.product_img = item.img;
       data.product_details = item.details;
       data.price = item.price;
       data.status = "Pending";
       fetch("http://localhost:5000/productDetails/order",{
           method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(result => {
           if(result){
                alert("Order Placed Successfully")
                reset()
           }
       })

   };
    return (
        <>
        <Navigation></Navigation>
        <div className=" container-fluid d-banner">
            <div className="container overflow-hidden">
            <div className=" row d-flex align-items-center justify-content-center">
                <div className="col-md-6 col-sm-12">
                <Bounce left cascade>
                <h1 className=" fw-bold text-light">BUY YOUR WONDERFUL CAR</h1>
               <h4 className=" fw-bold all-clr">{item.name}</h4>
               </Bounce>
                <CardGroup>
                <Bounce left>
               <Card className="border-0">
                <div className="bg-image hover-zoom">
                <Card.Img style={{ width: '100%'}} variant="top" src={item.img} />
                </div>
                <Card.Body>
                <Card.Title className="fw-bold text-success">{item.name}</Card.Title>
                <Card.Text className="text-secondary fs-5">
                    {item.details}
                </Card.Text>
                </Card.Body>
                <Card.Footer className="p-3 border-0">
                <Card.Title className="fw-bold text-danger"><small className="text-dark">PRICE: </small><span> ${item.price}</span></Card.Title>
                </Card.Footer>
            </Card>
            </Bounce>
        </CardGroup>
                </div>
                <div className="col-md-6 col-sm-12">
                <Bounce right cascade>
                <h1 className=" fw-bold text-light">DROP US A <span className="all-clr">MESSAGE</span></h1>
                <h6 className="text-info">We'd Love To Hear From You</h6>
                </Bounce>
                <Bounce right>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-field" defaultValue={user.displayName} {...register("name", )} placeholder="Name" required/> <br />
                <input className="my-2 input-field" defaultValue={user.email} {...register("email", )} placeholder="Email" required/> <br />
                <input className=" input-field" {...register("address", )} placeholder="Address" required/> <br />
                <input className="my-2 input-field" type="number"{...register("number")} placeholder="Phone" required/> <br />
                <input className="input-btn" type="submit" />
                </form>
                </Bounce>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default ProductDetails;