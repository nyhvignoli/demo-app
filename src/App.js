import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card'
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import cards from './data/cards.json'

function App() {
  const [active, setActive] = useState('')

  const handleActive = (cardId) => setActive(cardId)

  const renderCards = () => {
    return (
      cards.map((card) => {
        return (
          <Card 
            id={card.id}
            key={card.id} 
            title={card.title} 
            description={card.description} 
            active={active === card.id}
            onClick={handleActive} 
          />
        )
      })
    )
  }
  
  return (
    <div className="App">
      <Header />
      <div className='Main'>
        <main className='Card-grid'>
          {renderCards()}
        </main>
        <SideNav cards={cards} onClick={handleActive} active={active} />
      </div>
    </div>
  );
}

export default App;
