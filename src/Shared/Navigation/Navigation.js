import React from 'react';
import './Navigation.css'
import logo from '../../images/lo1.png'
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown,Button} from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const {user, logOut} =  useAuth();
    const {displayName, photoURL, email} = user;
    return (
        <div className="nav-container">
            <Navbar className="nav-area" variant="dark"  expand="lg">
            <Container>
                <Navbar.Brand to="/home">
                <img
                    src={logo}
                    width="180px"
                    height=""
                    className="align-top d-inline-block"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <Nav.Link activeStyle={{
                    fontWeight: "bold",
                     color: "#f7b614"
                     }} as={NavLink} to="/home">Home</Nav.Link>
                    <Nav.Link activeStyle={{
                    fontWeight: "bold",
                     color: "#f7b614"
                     }} as={NavLink} to="/allProducts">All Products</Nav.Link>
                    <Nav.Link activeStyle={{
                    fontWeight: "bold",
                     color: "#f7b614"
                     }} as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                    
                </Nav>
                { !displayName ?
                (<Nav className="ms-auto">
                    <Link className="text-decoration-none text-light fw-bold me-2" to="/login">LOGIN</Link>
                    <Link className="text-decoration-none text-light fw-bold" to="/register">SIGN UP</Link>
                </Nav>)
                 :
                 <NavDropdown title={ <img className="drop-img" src={photoURL} alt="" />} id="basic-nav-dropdown">
                     <div>
                         <h6 className="text-center">{displayName}</h6>
                            <p>{email}</p>
                            <Button onClick={logOut} type="submit">Sign Out</Button>
                        </div>
                </NavDropdown>
                
                }
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;