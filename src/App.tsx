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

  const addGussedLetters = useCallback(
    (key: string) => {
      if (guessedLetter.includes(key)) return;

      setGuessedLetters((currentLetters) => [...currentLetters, key]);
    },
    [guessedLetter]
  );

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
      <div style={{ fontSize: "2rem", textAlign: "center" }}>HangMan game</div>
      <HangManStructure numberOfGuess={incorrectLetters.length} />
      <GuessedLetters wordToGuess={wordToGuess} gussedLetters={guessedLetter} />
      <div style={{ alignSelf: "stretch" }}>
        <KeyBoard />
      </div>
    </div>
  );
}

export default App;
