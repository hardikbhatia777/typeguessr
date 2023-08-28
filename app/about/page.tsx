'use client'
import { useState, useEffect } from 'react';

export default function Home() {
  const originalText = 'Your original text here';
  const [typedText, setTypedText] = useState('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [correctPresses, setCorrectPresses] = useState(0);
  const [wrongPresses, setWrongPresses] = useState(0);

  const typedLetters = typedText.split('');

  useEffect(() => {
    if (typedLetters[currentLetterIndex] === originalText[currentLetterIndex]) {
      setCurrentLetterIndex(currentLetterIndex + 1);
      setCorrectPresses(correctPresses + 1);
    } else {
      setWrongPresses(wrongPresses + 1);
    }
  }, [typedLetters, currentLetterIndex, correctPresses, wrongPresses]);

  return (
    <div>
      <h1>Letter Highlight Example</h1>
      <div className="highlight-container">
        {originalText.split('').map((letter, index) => (
          <span
            key={index}
            className={
              typedLetters[index] === letter
                ? 'highlighted'
                : typedLetters[index]
                ? 'incorrect'
                : ''
            }
          >
            {letter}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === ' ') {
            setCurrentLetterIndex(currentLetterIndex + 1);
          }
        }}
      />
      <div className="stats">
        <p>Correct Presses: {correctPresses}</p>
        <p>Wrong Presses: {wrongPresses}</p>
      </div>

      <style jsx>{`
        .highlight-container {
          display: inline-block;
          border: 1px solid #ccc;
          padding: 10px;
        }

        .highlighted {
          background-color: yellow;
        }

        .incorrect {
          color: red;
        }

        .stats {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}