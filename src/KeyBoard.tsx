import Keys from "./Keys.json";
import styles from "./KeyBoard.module.css";
export function KeyBoard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {Keys.map((key) => {
        return <button className={styles.btn}>{key}</button>;
      })}
    </div>
  );
}
