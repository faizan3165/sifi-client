import React, {Fragment} from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import {dummyData} from './CardsData';
import './services.css';

const Services = () => {
  return (
    <Fragment>
      <div className="services_container">
        <div className="text-center my-5">
          <h1 className="display-6 fw-bold">Our Services</h1>
          <p
            className=" display-2 text-wrap w-60 mt-3 fw-semibold services_para"
            style={{color: '#0B75A9'}}
          >
            We Provide All Kinds Of Business Solutions
          </p>
        </div>

        <Container className="cards_container">

          <Row>

            {dummyData.map (({id, img, title, text}) => (
              <Col xs={{span: 6}} md={{span: 1, offset: 2}} key={id}>
                <Card
                  className="rounded-4 shadow-lg services_card p-2"
                  style={{width: '18rem'}}
                >
                  <Card.Img variant="top" src={img} className="my_card_logo" />

                  <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    <Card.Text>{text}</Card.Text>

                    <Button
                      variant="light"
                      bg="dark"
                      className="rounded-4 p-2 fw-semibold"
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}

          </Row>
        </Container>

      </div>
    </Fragment>
  );
};

export default Services;
