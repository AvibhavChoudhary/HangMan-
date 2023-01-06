type GussedLetterProps = {
  wordToGuess: string;
  gussedLetters: string[];
  reveal: boolean;
};

export function GuessedLetters({
  wordToGuess,
  gussedLetters,
  reveal,
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
                visibility:
                  gussedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !gussedLetters.includes(letter) && reveal ? "red" : "black",
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
