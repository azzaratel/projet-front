import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CategCarte({el}) {
  return (
    <div className='card'> 
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image_product} />
      <Card.Body>
        <Card.Title>{el.name_product}</Card.Title>
        <Card.Text>
          {el.descrition}
        </Card.Text>
        <h1> {el.prix}</h1>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CategCarte