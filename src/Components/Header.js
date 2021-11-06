import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button  } from 'react-bootstrap';
import logo from './logo_IST_white_full.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../Pages/Home1';
import k314 from '../Pages/k314';
import k315 from '../Pages/k315';
import k316 from '../Pages/k316';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/Home">
                            <img
                                src={logo}
                                height="35"
                                width="35"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="header">
                                <Nav.Link href="/Home">Умный Зав. Лаб. |</Nav.Link>
                                <Nav.Link href ="/k314">314</Nav.Link>
                                <Nav.Link href="/k315">315</Nav.Link>
                                <Nav.Link href="/k316">316</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/k314" component={k314} />
                        <Route exact path="/k315" component={k315} />
                        <Route exact path="/k316" component={k316} />
                    </Switch>
                </Router>      
            </>
        );
    }
}