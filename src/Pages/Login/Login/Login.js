import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import login from '../../../images/login1.jpg';
const Login = () => {
    const [loginData,  setLoginData] = useState({});
    const {googleWithSignIn, loginUser, isLoading, user, error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnBlur = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();

    }
    //google handler
    const handleGoogleLogin = (e) => {
        googleWithSignIn(location, history);
    
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mt:5}}>
                <Typography variant="h6" gutterBottom component="div">
                    LOGIN 
               </Typography>
               {!isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField 
                 sx={{width:'75%', m:1}}
                onBlur={handleOnBlur}
                name="email"
                id="standard-basic" 
                label="Your Email" 
                type="email"
                variant="standard"
                    />
                <TextField 
                sx={{width:'75%', m:1}}
                onBlur={handleOnBlur}
                name="password"
                id="standard-basic" 
                label="Your Password"
                type="password" 
                variant="standard"
                    />
                    <Button sx={{width:'75%', m:1}} type="submit" variant="contained">Login</Button>
                    <NavLink style={{textDecoration: 'none'}} to="/register">
                    <Button variant="text">Are you Registered? Please Register!</Button>
                    </NavLink>
               </form>}
               {isLoading && <CircularProgress />}
               {user.email && <Alert severity="success">User Successfully Login!</Alert>}
               {error && <Alert severity="error">{error}</Alert>}
               <Button onClick={handleGoogleLogin} variant="contained">Google with Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                   <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
             </Grid>
        </Container>
    );
};

export default Login;