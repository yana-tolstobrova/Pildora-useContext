import React, { useContext } from 'react';
import CardContext from './CardContext';

const ContextTest = () => {
  const cards = useContext(CardContext) || [];
    //console.log(cards)
if (cards.length === 0) {
    return <div>...</div>; // or any loading indicator
  }

  return (
    <div>
        <div key={cards[10].id}>
              <img src={cards[10].sakuraCard} alt={cards[10].spanishName} />
        </div>
    </div>
  );
}

export default ContextTest;
