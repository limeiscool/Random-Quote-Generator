import React from "react";
import Card from 'react-bootstrap/Card';

function CardBody({ currentQuote }) {
  return (
    <Card.Body>
      <blockquote className='blockquote '>
        <p id="text">{currentQuote.quote}</p>
        <footer id="author" className='blockquote-footer'>
          {currentQuote.author}
        </footer>
      </blockquote>
    </Card.Body>
  )
}

export default CardBody;