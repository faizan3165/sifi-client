import React, { Fragment } from 'react';

import { Home, Navbar, Services } from './components';

import './App.css';
import About from './components/About/About';
import Reviews from './components/Testimonials/Reviews';

const App = () => {
	return (
		<Fragment>
			<Navbar /> 	
			<Home />
			<Services />
			<About/>
			<Reviews/>
		</Fragment>
	);
};

export default App;
