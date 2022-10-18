import React, { Fragment } from 'react';

import { Home, Navbar, Services } from './components';

import './App.css';

const App = () => {
	return (
		<Fragment>
			<Navbar /> 	
			<Home />
			<Services />
		</Fragment>
	);
};

export default App;
