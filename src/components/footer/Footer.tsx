import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

import './Footer.scss';

function Footer(): JSX.Element {
    const year = new Date().getFullYear();
    let yearString = "";
    if (year === 2020) {
        yearString = "\u00A9 " + year;
    } else {
        yearString = "\u00A9 2020-" + year;
    }
    return (
        <Navbar fixed='bottom' variant='dark' bg='dark'>
            <Container>
                <Navbar.Collapse>
                    <Nav>
                        <Navbar.Text>{yearString} IggyCeltic.com</Navbar.Text>
                        <Nav.Link href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></Nav.Link>
                        <Nav.Link href="https://www.instagram.com"><i className="fab fa-instagram-square"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;