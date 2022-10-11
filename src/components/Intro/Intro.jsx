import React, { Fragment, useState } from 'react';

import { Button } from 'react-bootstrap';

import './intro.css';

const Intro = () => {
	const [ btnColor, setBtnColor ] = useState(true);

	const clickHandler = () => {
		setBtnColor(!btnColor);
	};

	return (
		<Fragment>
			<div className="col-6">
				<div className="col">
					<h2 className="display-5 fw-bold main_heading">An Adaptive Enterprise</h2>

					<p className="display-3 mt-3 main_para fw-light">
						Collaborate with industry and academic leaders to develop next-generation AI applications
					</p>

					<Button
						className={
							btnColor ? (
								' fw-bold mt-3 rounded-4 p-3 w-25 shadow text-white bg-primary'
							) : (
								'mt-3 rounded-4 p-3 w-25 shadow text-primary fw-bold bg-white'
							)
						}
						size="lg"
						active
						onClick={clickHandler}
					>
						Discover More
					</Button>

					<Button
						className={
							btnColor ? (
								'mt-3 rounded-4 p-3 mx-4 w-25 shadow fw-bold bg-white text-primary bg-white'
							) : (
								'mt-3 rounded-4 p-3 mx-4 w-25 shadow fw-bold text-white bg-primary'
							)
						}
						bg="light"
						size="lg"
						active
						onClick={clickHandler}
					>
						Get Started
					</Button>
				</div>
			</div>
		</Fragment>
	);
};

export default Intro;
