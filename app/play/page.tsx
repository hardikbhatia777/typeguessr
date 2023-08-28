"use client";
import { useState, useEffect } from "react";
import wordList from "./wordList";

export default function Home() {

  const [words, setWords] = useState(
    "the quick brown fox jumps over the lazy dog"
  );
  const originalText = words;
  const [typedText, setTypedText] = useState('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);  
  const [correctPresses, setCorrectPresses] = useState(0);
  const [wrongPresses, setWrongPresses] = useState(0);
  const typedLetters = typedText.split('');

  useEffect(() => {
    if (typedLetters[currentLetterIndex] === originalText[currentLetterIndex]) {
      setCurrentLetterIndex(currentLetterIndex + 1);
      setCorrectPresses(correctPresses + 1);
    } else if (typedLetters[currentLetterIndex]) {
      setWrongPresses(wrongPresses + 1);
    }
  }, [typedLetters, currentLetterIndex, correctPresses, wrongPresses]);


  async function ChangeWords(numWords: number) {
    function shuffle(array: string[]) {
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }

    shuffle(wordList);

    const wordsToShow = wordList.slice(0, numWords).join(" ");
    setWords(wordsToShow);
  }
  return (
    <div className="play-main">
      <div className="play-words"><div className="highlight-container">
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
      

      <style jsx>{`
        .highlight-container {
          display: inline-block;
          padding: 10px;
          color: #a0a0a0;
        }

        .highlighted {
          color: white;
        }

        .incorrect {
          color: red;
          text-decoration: underline;
        }
        .statistics {
          margin-top: 20px;
        }
      `}</style></div>
      <br />
      <br />
      <div className="play-buttons-main">
        <div className="play-button">
        <button onClick={() => ChangeWords(10)}>10 Words</button></div>
        <br />
        <div className="play-button">
        <button onClick={() => ChangeWords(25)}>25 Words</button></div>
        <br />
        <div className="play-button">
        <button onClick={() => ChangeWords(50)}>50 Words</button></div>
        <br />
        <div className="play-button">
        <button onClick={() => ChangeWords(100)}>100 Words</button></div>
        <br />
      </div>
      <input
      className="play-input"
        type="text"
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === ' ') {
            setCurrentLetterIndex(currentLetterIndex + 1);
          }
        }}
      />
      <div className="statistics">
        <p>Correct Presses: {correctPresses}</p>
        <p>Wrong Presses: {wrongPresses}</p>
      </div>
    </div>
  );
}
