import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';


const Service = ({ service }) => {
    // const {service} = props;
    const { id, title, img , detalis } = service;
    return (
        <div>
        
        <Col className=" shadow-lg p-3 mb-5 bg-body rounded shadow-none h-100 rounded">
          <Card className="shadow h-100">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title> <b>{title}</b> </Card.Title>
                
                  <Link to={`/doctors/${id}`}>
                  <button type="button" className=" w-50 btn btn-outline-primary">Detils</button>
                  </Link>

            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Service;