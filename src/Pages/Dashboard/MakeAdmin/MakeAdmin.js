import { Alert, Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const HandleOnBlur = e =>{
       setEmail(e.target.value);
    }
    const HandleAdminSubmit = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data)
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h1 className="mt-5">Make Admin</h1>
                <form onSubmit={HandleAdminSubmit}>
                    <Box>
                        <TextField
                        sx={{width: '35%', mb:2}}
                        label="Email"
                        type="email"
                        onBlur={HandleOnBlur}
                        variant="standard"
                        />
                    </Box> <br/>
                    <Button className="mb-5" type="submit" variant="contained">Make Admin</Button>
                </form>
            {success && <Alert severity="success">Made Admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;