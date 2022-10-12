import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';

import card_logo from '../../assets/images/card_logo.png';

import './services.css';

const dummyData = [
	{
		id: 1,
		img: card_logo,
		title: 'Graphic Designing',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat congue ornare lacinia'
	},

	{
		id: 2,
		img: card_logo,
		title: 'Graphic Designing',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat congue ornare lacinia'
	},

	{
		id: 3,
		img: card_logo,
		title: 'Graphic Designing',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat congue ornare lacinia'
	},

	{
		id: 4,
		img: card_logo,
		title: 'Graphic Designing',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat congue ornare lacinia'
	}
];

const Services = () => {
	return (
		<Fragment>
			<div className="text-center my-5">
				<h1 className="display-6 fw-bold">Our Services</h1>
				<p className="text-primary display-2 text-wrap w-50 mt-3 fw-semibold services_para">
					We Provide All Kinds Of Business Solutions
				</p>
			</div>

			<div className="col-md-12 col-sm-6 my_cols">
				<div className="d-flex flex-row justify-content-around">
					{dummyData.map(({ id, img, title, text }) => (
						<Card key={id} className="rounded-4 shadow-lg services_card p-2">
							<Card.Img variant="top" src={img} class="my_card_logo" />

							<Card.Body>
								<Card.Title>{title}</Card.Title>

								<Card.Text>{text}</Card.Text>

								<Button variant="light" bg="dark" className='rounded-4 p-2 fw-semibold'>
									Read More
								</Button>
							</Card.Body>
						</Card>
					))}
				</div>
			</div>
		</Fragment>
	);
};

export default Services;
