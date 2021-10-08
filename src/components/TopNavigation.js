import React, { Component } from "react";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Resume from "../media/2021-09-30_Dinh_Resume.pdf";
import Experience from "./Experience";

export default class TopNavigation extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navigation" style={{margin: "auto"}}>
                            <Nav.Link href={process.env.PUBLIC_URL}>About Me</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href={Resume} target="_self">Resume</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path='/experience' component={Experience} />
                        <Route exact component={Home} />
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}