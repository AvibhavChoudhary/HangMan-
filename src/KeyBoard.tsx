import Keys from "./Keys.json";
import styles from "./KeyBoard.module.css";

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
};
export function KeyBoard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {Keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            className={`${styles.btn} ${isActive ? styles.active : ""}${
              isInactive ? styles.inactive : ""
            }`}
            onClick={() => addGuessedLetter(key)}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
