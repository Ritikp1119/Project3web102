import { useState } from "react";

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="front">
        <h2>{card.question}</h2>
      </div>

      <div className="back">
        <h2>{card.answer}</h2>
      </div>
    </div>
  );
}

export default Flashcard;