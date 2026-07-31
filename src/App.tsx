import { useState, useEffect } from 'react'
import Alphabet from './components/Alphabet'
import StatusMessage from './components/StatusMessage'
import Languages, { LANGUAGES } from './components/Languages'
import Word from './components/Word'
import { WORDS } from './data/word'

export default function App() {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState<string>('');

  const wrongGuessCount = guessedLetters.filter((letter) => !currentWord.includes(letter)).length;
  const isGameLost = wrongGuessCount >= LANGUAGES.length - 1;
  const isGameWon = currentWord.split('').every((letter) => guessedLetters.includes(letter));
  const isGameOver = isGameWon || isGameLost;

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || isGameOver) return;

    setGuessedLetters((prev) => [...prev, letter]);
  };

  useEffect(() => {
    setCurrentWord(getRandomWord());
  }, []);

  function getRandomWord(): string {
    return WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
  }

  return (
    <main>
      <header>
        <h1>ASSEMBLY: ENDGAME</h1>
        <span>Guess the word in under 8 attempts to keep the programming world save from Assembly!</span>
      </header>

      <StatusMessage hasGameEnded={isGameOver} success={isGameWon} wrongGuessCount={wrongGuessCount} />

      <Languages wrongGuessCount={wrongGuessCount} />

      <Word currentWord={currentWord} guessedLetters={guessedLetters} isGameLost={isGameLost} />

      <Alphabet guessedLetters={guessedLetters} currentWord={currentWord} handleGuess={handleGuess} isGameOver={isGameOver} />

      {isGameOver &&
        (<button className="btn-primary" onClick={() => {
          setGuessedLetters([]);
          setCurrentWord(getRandomWord());
        }}>
          New Game
        </button>)}

    </main>
  )
}
