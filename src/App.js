import React, { Fragment } from 'react';

import { Home, Navbar, Services } from './components';

import './App.css';
import About from './components/About/About';
import Reviews from './components/Testimonials/Reviews';
import Talk from './components/Contact/Talk';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<Fragment>
			<Navbar /> 	
			<Home />
			<Services />
			<Talk/>
			<About/>
			<Reviews/>
			<Footer/>
		</Fragment>
	);
};

export default App;
