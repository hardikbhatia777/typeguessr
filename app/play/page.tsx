'use client'
import { useState } from 'react';
import wordList from './wordList';

export default function Home() {
    
    const [words, setWords] = useState("the quick brown fox jumps over the lazy dog");
    async function ChangeWords(numWords: number) {
        function shuffle(array: string[]) {
            let currentIndex = array.length,  randomIndex;
            
            while (currentIndex > 0) {
            
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
            
                [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
            
            return array;
        }
    

    
      shuffle(wordList)
    
      const wordsToShow = wordList.slice(0, numWords).join(' ');
      setWords(wordsToShow);}
  return (
    <div className='play-main'>
        {words}<br/><br/>
      <button onClick={() => ChangeWords(10)}>Show 10 Words</button><br/>
      <button onClick={() => ChangeWords(50)}>Show 50 Words</button><br/>
      <button onClick={() => ChangeWords(100)}>Show 100 Words</button><br/>
    </div>
  );
}