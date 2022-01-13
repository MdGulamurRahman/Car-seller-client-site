import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [manageOrders, setMangeOrders] = useState([]);
    const [status, setStatus] = useState(true);
    useEffect(()=>{
        fetch('https://mighty-sea-73980.herokuapp.com/manageAllOrders')
        .then(res => res.json())
        .then(result => {
            setMangeOrders(result)
            setStatus(true)
        })
    },[status])
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
                  setStatus(false)
                }
            })
        }
       
    }

    const handleUpdate = (id, index) =>{
        fetch(`https://mighty-sea-73980.herokuapp.com/updateOrder/${id}`, {
            method: "PUT"
        })
        .then(res => res.json())
        .then(result => {
            alert('Shipped...!!!')
            setStatus(false)
        })
    }
    
    return (
        <div>
            <h1>MANAGE YOUR ORDERS</h1>
            <div class=" mb-3 container" style={{ maxWidth: "800px" }}>
                <div >
                    {
                        manageOrders.map((orders, index) => (
                            <div class="row g-0 m-3 border border-primary p-3 rounded">
                                <div class="col-md-4">
                                    <img src={orders?.product_img} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{orders?.product_name}</h5>
                                        <p class="card-text">{orders?.product_details}</p>
                                        {orders.status === "pending" ? <h5 class="card-text"><small class="text-danger">{orders?.status}</small></h5>:<h5 class="card-text"><small class="text-success">{orders?.status}</small></h5>}
                                        <h6 className="text-success">E-mail: {orders?.email}</h6>
                                        <div>
                                            <button onClick={() => handleOrderDelete(orders?._id)} className="btn btn-danger">Delete</button>
                                            {orders.status === "Shipped" ? <button onClick={() => handleUpdate(orders?._id)} className="btn btn-dark ms-2 disabled">Update Status</button>:
                                            <button onClick={() => handleUpdate(orders?._id)} className="btn btn-dark ms-2">Update Status</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default ManageAllOrders;