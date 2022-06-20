import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import cards from './data/cards.json'

function App() {
  const [active, setActive] = useState('')

  const handleActive = (cardId) => setActive(cardId)

  const renderCards = () => {
    return cards.map((card) => {
      return (
        <Card
          id={card.id}
          active={active === card.id} 
          title={card.title} 
          description={card.description}
          onClick={handleActive}
        />
      )
    })
  }
  
  return (
    <div className="App">
      <Header title={"Demo App"}/>
      <div className='Main'>
        <div className='Card-grid'>
          {renderCards()}
        </div>
      </div>
    </div>
  );
}

export default App;
