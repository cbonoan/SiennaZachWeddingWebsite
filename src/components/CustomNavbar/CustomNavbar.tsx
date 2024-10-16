import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import '../../styles/CustomNavbar/CustomNavbar.scss';
import NavLink from "./NavLink";
import Toggle from "./Toggle";

const CustomNavbar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const [expanded, setExpanded] = useState(false);

    const onToggle = (expanded: boolean) => {
        setExpanded(expanded);
    }

    const handleMenuClose = () => {
        setExpanded(false);
    }

    return (
        <>
            <Navbar 
                expand="lg"
                expanded={expanded}
                onToggle={onToggle}
            >
                <Container>
                    <Navbar.Brand onClick={handleMenuClose}>
                        <Link to="/">S&Z</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav">
                        <Toggle isOpen={expanded}/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink
                                handleMenuClose={handleMenuClose}
                                active={pathname === "/ceremony-reception" || pathname === '/'}
                                text="Ceremony & Reception"
                                path="/ceremony-reception"
                            />
                            <NavLink
                                handleMenuClose={handleMenuClose}
                                active={pathname === "/our-story"}
                                text="Our Story"
                                path="/our-story"
                            />
                            <NavLink
                                handleMenuClose={handleMenuClose}
                                active={pathname === "/travel-stay"}
                                text="Travel & Stay"
                                path="/travel-stay"
                            />
                            <NavLink
                                handleMenuClose={handleMenuClose}
                                active={pathname === "/faqs"}
                                text="FAQs"
                                path="/faqs"
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar