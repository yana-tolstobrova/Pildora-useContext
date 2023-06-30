import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardContext from './CardContext';
import ContextTest from './ContextTest';

export default function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards'
        );
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
        setCards([]);
      }
    };

    fetchCards();
  }, []);

  return (
    <CardContext.Provider value={cards}>
      <div>
        <div className="cards">
          {cards.map((card, index) => (
            <div key={index}>
              <span>{card.englishName}</span>
            </div>
          ))}
        </div>
        <ContextTest />
      </div>
    </CardContext.Provider>
  );
}
