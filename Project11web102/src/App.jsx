import { useState } from 'react';
import './App.css';
import { cards } from "./Cardlist.js";
import Flashcard from './Flashcard.jsx';

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const currentCard = cards[cardIndex];

  function handleSubmit() {
    if (guess.toLowerCase().trim() === currentCard.answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  function nextCard() {
    if (cardIndex < cards.length - 1) {
      setCardIndex(cardIndex + 1);
      setGuess("");
      setIsCorrect(null);
    }
  }

  function prevCard() {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setGuess("");
      setIsCorrect(null);
    }
  }

  return (
    <div className="App">
      <h1>PC Parts Study Set</h1>

      {/* 🔥 ADD THIS CONTAINER */}
      <div className="container">

        <Flashcard card={currentCard} />

        {/* 🔥 GROUP INPUT + BUTTON */}
        <div className="inputSection">
          <input
            type="text"
            placeholder="Enter your guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>

        {/* Feedback */}
        {isCorrect === true && <p className="correct">Correct!</p>}
        {isCorrect === false && <p className="wrong">Incorrect</p>}

        {/* Navigation */}
        <div className="navButtons">
          <button onClick={prevCard} disabled={cardIndex === 0}>
            Previous
          </button>

          <button onClick={nextCard} disabled={cardIndex === cards.length - 1}>
            Next
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;