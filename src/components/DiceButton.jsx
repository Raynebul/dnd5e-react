import { useState } from "react";


function DiceButton(props) {

  const RollTheDice = (dice) => {
    props.roll(dice);
  };

  return (
    <button type="button" onClick={() => RollTheDice(props.diceToRoll)} className="btn btn-dice">
      <svg
        style={{
          backgroundImage: "url(./dices/" + props.diceToRoll + "-" + props.theme + ".svg)",
        }}
        className="mt-1"
      ></svg>
      <div>{props.diceToRoll}</div>
    </button>
  );
}

export default DiceButton;
