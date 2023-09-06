import React, { useState } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import CardHeader from './Components/CardHeader';
import CardBody from './Components/CardBody';
import CardFooter from './Components/CardFooter';
import colorPalette from './palettes/palettes.json'




function App() {
  const [paletteIndex, setPaletteIndex] = useState(0)
  const [currentQuote, setCurrentQuote] = useState({quote: 'Nothing here yet', author: 'generate a quote!'})

  const currentPalette = colorPalette[paletteIndex];
  console.log(currentPalette)

  const changePalette = () => {
    const newIndex = (paletteIndex + 1) % colorPalette.length;
    setPaletteIndex(newIndex)
  };
  const updateQuote = (newQuote) => {
    setCurrentQuote(newQuote)
  };

  const STYLES = {
    jumbo: { backgroundColor: currentPalette.background },
    card1: { padding: 36, backgroundColor: currentPalette.outerCard, maxWidth: "45rem", overflow: "hidden" }
  }

  return (
    <div className="App">
      <header style={STYLES.jumbo} className="App-header jumbotron">
        <Card style={STYLES.card1}>
          <Card id="quote-box" >
            <CardHeader />
            <CardBody currentQuote={currentQuote} />
            <CardFooter currentQuote={currentQuote} updateQuote={updateQuote} changePalette={changePalette} currentPalette={currentPalette} />            
          </Card>
        </Card>
            
      </header>
    </div>
  );
}

export default App;
