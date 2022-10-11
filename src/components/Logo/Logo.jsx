import React from 'react';

import LogoImg from '../../assets/images/sifi-logo.png';

import './logo.css';

const Logo = () => {
	return (
		<div className='logo_container'>
			<img src={LogoImg} alt="logo" className='my_logo' />
		</div>
	);
};

export default Logo;
