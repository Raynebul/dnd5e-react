import { useState } from "react";
import DiceButton from "./DiceButton.jsx";

function DicePanel(props) {
  const RollTheDice = (dice) => {
    props.roll(dice);
  };

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <DiceButton diceToRoll="d4" roll={RollTheDice} theme={props.theme}></DiceButton>
      <DiceButton diceToRoll="d6" roll={RollTheDice} theme={props.theme}></DiceButton>
      <DiceButton diceToRoll="d8" roll={RollTheDice} theme={props.theme}></DiceButton>
      <DiceButton diceToRoll="d10" roll={RollTheDice} theme={props.theme}></DiceButton>
      <DiceButton diceToRoll="d12" roll={RollTheDice} theme={props.theme}></DiceButton>
      <DiceButton diceToRoll="d20" roll={RollTheDice} theme={props.theme}></DiceButton>
      {/*    <button type="button" onClick={() => RollTheDice("d4")} className="btn btn-dice">
      <svg
        style={{
          backgroundImage: "url(./dices/d4-light.svg)",
        }}
        className="mt-1"
      ></svg>
      <div>d4</div>
    </button>
    <button type="button"  onClick={() => RollTheDice("d6")} className="btn btn-dice">
      <svg
        style={{
          backgroundImage: "url(./dices/d6-light.svg)",
        }}
        className="mt-1"
      ></svg>
      <div>d6</div>
    </button>
    <button type="button" onClick={() => RollTheDice("d8")} className="btn btn-dice">
      <svg
        style={{
          backgroundImage: "url(./dices/d8-light.svg)",
        }}
        className="mt-1"
      ></svg>
      <div>d8</div>
    </button>
    <button type="button" onClick={() => RollTheDice("d10")} className="btn btn-dice">
      <svg
        style={{
          backgroundImage: "url(./dices/d10-light.svg)",
        }}
        className="mt-1"
      ></svg>
      <div>d10</div>
    </button>
    <button type="button" onClick={() => RollTheDice("d12")} className="btn btn-dice">
      <svg
        style={{
          backgroundImage: "url(./dices/d12-light.svg)",
        }}
        className="mt-1"
      ></svg>
      <div>d12</div>
    </button>
    <button type="button" onClick={() => RollTheDice("d20")} className="btn btn-dice">
      <svg
        style={{
          backgroundImage: "url(./dices/d20-light.svg)",
        }}
        className="mt-1"
      ></svg>
      <div>d20</div>
    </button> */}
    </div>
  );
}

export default DicePanel;
