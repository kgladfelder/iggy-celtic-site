import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.scss';


function Navigation(): JSX.Element {
    const location = useLocation();
    return (
        <Navbar bg="primary" variant="dark" expand="md">
            <Navbar.Brand as={NavLink} to="/">Iggy Celtic</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" activeKey={location.pathname}>
                    <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/tracker">Tracker</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;