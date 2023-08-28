'use server'
import { useState } from 'react';


export default async function ChangeWords(numWords: number) {
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

  const wordsList = ["hello", "hardik", "myname", "no"];

  shuffle(wordsList)

  const wordsToShow = wordsList.slice(0, numWords).join(' ');
  return (
    <div>
      <p>{wordsToShow}</p>
    </div>
  );
}