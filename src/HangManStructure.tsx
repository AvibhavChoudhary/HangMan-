const HEAD = (
  <div
    style={{
      height: "50px",
      width: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      right: "-30px",
      top: "50px",
    }}
  />
);
const BODY = (
  <div
    style={{
      height: "80px",
      width: "10px",
      background: "black",
      position: "absolute",
      right: 0,
      top: "120px",
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      height: "10px",
      width: "90px",
      background: "black",
      position: "absolute",
      right: "-90px",
      top: "150px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      height: "10px",
      width: "90px",
      background: "black",
      position: "absolute",
      right: "10px",
      top: "150px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      height: "10px",
      width: "90px",
      background: "black",
      position: "absolute",
      right: "0px",
      top: "190px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      height: "10px",
      width: "90px",
      background: "black",
      position: "absolute",
      right: "-80px",
      top: "190px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

type HangmanProps = {
  numberOfGuess: number;
};

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export function HangManStructure({ numberOfGuess }: HangmanProps) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          height: "60px",
          width: "10px",
          background: "black",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      {BODY_PARTS.slice(0, numberOfGuess)}
      <div
        style={{
          height: "10px",
          marginLeft: "120px",
          width: "200px",
          background: "black",
        }}
      />
      <div
        style={{
          height: "300px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
        }}
      />
    </div>
  );
}
