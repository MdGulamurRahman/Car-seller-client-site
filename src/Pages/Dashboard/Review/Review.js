import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth()
    const onSubmit = data =>{
        fetch('http://localhost:5000/addRatings', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            if(result.insertedId){
                alert('Successfully Your Review Added');
                reset()
            }
        })
        console.log(data)};
    return (
        <div>
            <h1>Please give your Reviews</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-field" defaultValue={user.displayName} {...register("name", )} placeholder="name" required/> <br />
                <input className="my-2 input-field" type="text" {...register("reviewDetails")} placeholder="Review Details" required/> <br />
                <input className="my-2 input-field" type="number" {...register("ratings", {min:0,max:5} )} placeholder="Ratings Out Of 5" required/> <br />
                <input className="input-field" defaultValue={user.photoURL} type="text" {...register("img")} placeholder="photoURL" required/> <br />
                <input className="input-btn" type="submit" />
                </form>
        </div>
    );
};

export default Review;