import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import Logo from '../Logo/Logo';

import './Navbar.css';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
			<Navbar.Brand href="/" className="px-3">
				<Logo />
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />

			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="links_container">
					<Nav.Link className="link" href="#features">
						Home
					</Nav.Link>

					<Nav.Link className="link" href="#pricing">
						Services
					</Nav.Link>

					<Nav.Link className="link" href="#pricing">
						Consultancy
					</Nav.Link>

					<Nav.Link className="link" href="#deets">
						Industrial Leads
					</Nav.Link>

					<Nav.Link className="link" href="#memes">
						About Us
					</Nav.Link>

					<Nav.Link className="link" href="#memes">
						Contact Us
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
