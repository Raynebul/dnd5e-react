import { useState } from "react";
import DicePanel from "./DicePanel.jsx";
import DiceHistory from "./DiceHistory.jsx";

function DicePage(props) {

  const [history, setHistory] = useState([]);

  const RollTheDice = (dice) => {
    let roll=0;
    switch(dice) {
      case "d4": {
        roll = Math.floor(Math.random() * 4) + 1;
        break;
      }
      case "d6": {
        roll = Math.floor(Math.random() * 6) + 1;
        break;
      }
      case "d8": {
        roll = Math.floor(Math.random() * 8) + 1;
        break;
      }
      case "d10": {
        roll = Math.floor(Math.random() * 10) + 1;
        break;
      }
      case "d12": {
        roll = Math.floor(Math.random() * 12) + 1;
        break;
      }
      case "d20": {
        roll = Math.floor(Math.random() * 20) + 1;
        break;
      }
      default: {
        break;
      }
    }
    setHistory([...history, {roll: roll, dice: dice}])
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
