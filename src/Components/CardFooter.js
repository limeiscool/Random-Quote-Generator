import React from 'react';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import twitterIcon from './icons/square-x-twitter.svg'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Quotes from './quotes/quotes.json'



function CardFooter({ updateQuote, currentPalette, changePalette, currentQuote }) {

  const createTweetUrl = (quote, author) => {
    const encodedQuote = encodeURIComponent(`${quote} -${author}`)
    return `https://twitter.com/intent/tweet?text=${encodedQuote}`;
  }

  const handleClick = () => {
    const index = Math.floor(Math.random() * Quotes.length)
    const newQuote = Quotes[index]
    updateQuote(newQuote);
    changePalette();
  }

  const tweetURL = createTweetUrl(currentQuote.quote, currentQuote.author);
   
  return (
    <Card.Footer>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Col xs="auto">
            <Navbar.Brand id="tweet-quote" href={tweetURL} target='_blank' rel='noreferrer' >
              <img
                alt=""
                src={twitterIcon}
                width="30"
                height="30"
                className="d-inline-block align-center"
              />{' '}
              Share!
            </Navbar.Brand>
          </Col>
          
          <Col xs="auto">
            <Button id="new-quote" style={{
              color: currentPalette.buttonTextColor,
              backgroundColor: currentPalette.button,
              border: 'none'
            }} onClick={handleClick} variant='dark' type="submit">Get Quote</Button>
          </Col>
        </Container>
      </Navbar>
    </Card.Footer>
  )
}

export default CardFooter