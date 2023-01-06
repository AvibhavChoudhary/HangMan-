type GussedLetterProps = {
  wordToGuess: string;
  gussedLetters: string[];
};

export function GuessedLetters({
  wordToGuess,
  gussedLetters,
}: GussedLetterProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".3em",
        fontSize: "4rem",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        return (
          <div
            style={{
              borderBottom: "5px solid black",
            }}
            key={index}
          >
            <span
              style={{
                visibility: gussedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
              }}
            >
              {letter}
            </span>
          </div>
        );
      })}
    </div>
  );
}
