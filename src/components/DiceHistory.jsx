import { useState } from "react";
import DiceBlock from "./DiceBlock.jsx";


function DicePanel(props) {
  return <div className="d-flex-column pt-3">
            {props.history.map((rolledDice, index) => (
              <DiceBlock rolledDice={rolledDice} key={index} theme={props.theme}></DiceBlock>
            ))}
  </div>;
}

export default DicePanel;
