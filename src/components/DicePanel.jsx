import { useState } from "react";
import DiceButton from "./DiceButton.jsx";

function DicePanel(props) {
  const RollTheDice = (dice) => {
    props.roll(dice, amount);
  };

  const [amount, setAmount] = useState(1);

  return (
    <div className="d-flex">
      <input className="form-control input-dnd form-control-sm me-3 my-auto" type="number" value={amount} onChange={evt => setAmount(Number(evt.target.value))}></input>
      <div className="btn-group" role="group" aria-label="Basic example">
        <DiceButton
          diceToRoll="d4"
          roll={RollTheDice}
          theme={props.theme}
        ></DiceButton>
        <DiceButton
          diceToRoll="d6"
          roll={RollTheDice}
          theme={props.theme}
        ></DiceButton>
        <DiceButton
          diceToRoll="d8"
          roll={RollTheDice}
          theme={props.theme}
        ></DiceButton>
        <DiceButton
          diceToRoll="d10"
          roll={RollTheDice}
          theme={props.theme}
        ></DiceButton>
        <DiceButton
          diceToRoll="d12"
          roll={RollTheDice}
          theme={props.theme}
        ></DiceButton>
        <DiceButton
          diceToRoll="d20"
          roll={RollTheDice}
          theme={props.theme}
        ></DiceButton>
      </div>
    </div>
  );
}

export default DicePanel;
