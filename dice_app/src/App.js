import useDiceGame from "./useDiceGame";
import "./App.css";

function App() {
  const {
    state: { score1, score2, dice, isWin, activePlayer, showMsg },
    actions: { rollDice, reset },
  } = useDiceGame();

  let header = "";
  if (score1 === 10) {
    header = "Player1 wins!!!";
  } else if (score2 === 10) {
    header = "Player2 wins!!!";
  } else {
    header = "First Player to reach 10 points win!";
  }

  const classNames1 = `pad ${
    activePlayer === "Player1" && !isWin ? "active" : ""
  } ${score1 === 10 ? "winner" : ""}`;
  const classNames2 = `pad ${
    activePlayer === "Player2" && !isWin ? "active" : ""
  } ${score2 === 10 ? "winner" : ""}`;

  return (
    <div>
      <h3>{header}</h3>
      <div className={classNames1}>Player1: {score1}</div>
      <div className={classNames2}>Player2: {score2}</div>
      <div>
        <div className="pad">
          <button onClick={rollDice} disabled={isWin}>
            Roll Dice
          </button>
          {!isWin && <span>{activePlayer}'s Turn</span>}
        </div>
        <div className="pad">
          <button onClick={reset}>Reset</button>
        </div>
      </div>
      <div className="pad dice">Dice: {dice}</div>
      {showMsg && (
        <div className="pad msg">
          Dice count + Score of the active player must be{" "}
          <strong>EXACTLY</strong> equal to 10, in order to win !!!
        </div>
      )}
    </div>
  );
}

export default App;
