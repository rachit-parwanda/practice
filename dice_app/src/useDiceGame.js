import { useState } from "react";

const useDiceGame = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [dice, setDice] = useState(0);
  const [isFirstPlayerActive, setIsFirstPlayerActive] = useState(true);
  const [showMsg, setShowMsg] = useState(false);

  const rollDice = () => {
    const randomOutput = Math.floor(Math.random() * 6 + 1);
    console.log(randomOutput);
    setDice(randomOutput);

    if (isFirstPlayerActive) {
      if (score1 + randomOutput > 10) {
        setShowMsg(true);
      } else {
        setScore1((prevScore1) => prevScore1 + randomOutput);
        setShowMsg(false);
      }
      setIsFirstPlayerActive(false);
    } else {
      if (score2 + randomOutput > 10) {
        setShowMsg(true);
      } else {
        setScore2((prevScore2) => prevScore2 + randomOutput);
        setShowMsg(false);
      }
      setIsFirstPlayerActive(true);
    }
  };

  const reset = () => {
    setScore1(0);
    setScore2(0);
    setDice(0);
    setIsFirstPlayerActive(true);
    setShowMsg(false);
  };

  const isWin = score1 === 10 || score2 === 10;
  const activePlayer = isFirstPlayerActive ? "Player1" : "Player2";

  return {
    data: {},
    state: {
      score1,
      score2,
      dice,
      isWin,
      activePlayer,
      showMsg,
    },
    actions: {
      rollDice,
      reset,
    },
  };
};

export default useDiceGame;
