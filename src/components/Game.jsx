import React, { useState } from 'react';
import './Game.css';

function Game() {
  const [number] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    if (parseInt(guess) === number) {
      setMessage('🎉 Tebakanmu benar!');
    } else {
      setMessage('❌ Coba lagi!');
    }
  };

  return (
    <div className="game-container">
      <h2>🎮 Tebak Angka (1-10)</h2>
      <input
        type="number"
        min="1"
        max="10"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Tebak angka"
      />
      <button onClick={handleGuess}>Tebak</button>
      <p>{message}</p>
    </div>
  );
}

export default Game;
