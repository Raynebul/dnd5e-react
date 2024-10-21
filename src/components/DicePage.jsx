import { useState } from "react";
import DicePanel from "./DicePanel.jsx";
import DiceHistory from "./DiceHistory.jsx";

function DicePage(props) {

  const [history, setHistory] = useState([]);

  const RollTheDice = (dice, amount) => {
    let roll=0;
    let textRoll='';
    for(let i = 0; i < amount; i++) {
      if(i !== 0) {
        textRoll+="+"
      }
      let number = 0
      switch(dice) {
        case "d4": {
          number = Math.floor(Math.random() * 4) + 1;
          break;
        }
        case "d6": {
          number = Math.floor(Math.random() * 6) + 1;
          break;
        }
        case "d8": {
          number = Math.floor(Math.random() * 8) + 1;
          break;
        }
        case "d10": {
          number = Math.floor(Math.random() * 10) + 1;
          break;
        }
        case "d12": {
          number = Math.floor(Math.random() * 12) + 1;
          break;
        }
        case "d20": {
          number = Math.floor(Math.random() * 20) + 1;
          break;
        }
        default: {
          break;
        }
      }
      roll += number
      textRoll += String(number)
    }
    if(amount !== 1)
      textRoll += "=" + roll;
    setHistory([...history, {roll: textRoll, dice: dice}])
  }

  return (
    <div className="row me-0">
      <div className="col pe-0">
        <div className="ps-5 container-fluid d-flex-column">
          <DicePanel roll={RollTheDice} theme={props.theme}></DicePanel>
          <DiceHistory history={history} theme={props.theme}></DiceHistory>
        </div>
      </div>
    </div>
  );
}

export default DicePage;
