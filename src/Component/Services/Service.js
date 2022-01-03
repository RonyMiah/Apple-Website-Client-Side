import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id,name, email,image,price }  = service;
    return (

 <div className='col-md-3  col-sm-12 my-2'>
       <div >
       <Link to={`/booking/${_id}`}>
       <Card className='h-100' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{email}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Title className="text-center fs-3 " style={{color:'#000050',textDecoration:'none'}}>Form ${price}</Card.Title>
            <Link to={`/booking/${_id}`}><Button   className="mx-auto d-block" variant="primary">Buy Now</Button></Link>
        </Card.Body>
        </Card>
       </Link>
       </div>
 </div>
    );
};

export default Service;