import { useCallback, useEffect, useState } from "react";
import { GuessedLetters } from "./GuessedLetters";
import { HangManStructure } from "./HangManStructure";
import { KeyBoard } from "./KeyBoard";
import WordData from "./Wordlist.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return WordData[Math.floor(Math.random() * WordData.length)];
  });

  const [guessedLetter, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetter.includes(letter));

  const addGussedLetters = useCallback(
    (key: string) => {
      if (guessedLetter.includes(key) || isWinner || isLoser) return;

      setGuessedLetters((currentLetters) => [...currentLetters, key]);
    },
    [guessedLetter, isWinner, isLoser]
  );

  const getWord = () => {
    return WordData[Math.floor(Math.random() * WordData.length)];
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGussedLetters(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetter]);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Hey Bingo!!! You Guessed it Right"}{" "}
        {isLoser && "Nice try, Better luck next time!"}
      </div>
      <HangManStructure numberOfGuess={incorrectLetters.length} />
      <GuessedLetters
        reveal={isWinner || isLoser}
        wordToGuess={wordToGuess}
        gussedLetters={guessedLetter}
      />
      <div style={{ alignSelf: "stretch" }}>
        <KeyBoard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetter.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGussedLetters}
        />
      </div>
    </div>
  );
}

export default App;
