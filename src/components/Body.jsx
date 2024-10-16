import { useState } from "react";
import races from "../data/races.json";
import classes from "../data/classes.json";
import movings from "../data/movings.json";
import actions from "../data/actions.json";
import bonus_actions from "../data/bonus-actions.json";
import reactions from "../data/reactions.json";
import free_actions from "../data/free-actions.json";
import conditions from "../data/conditions.json";

import hits from "../data/hits.json";
import damage from "../data/damage.json";
import stats from "../data/stats.json";
import skills from "../data/skills.json";
import weapons from "../data/weapon.json";
import tools from "../data/tools.json";
import other_checks from "../data/other-checks.json";
import environment from "../data/environment.json";

import spells from "../data/spells.json";
import travels from "../data/travels.json"
import languages from "../data/languages.json"
import multiclasses from "../data/multiclasses.json"

import rulebooks from "../data/rulebooks.json";
import Category from "./Category.jsx";
import RightPanel from "./RightPanel.jsx";
import ListGroup from "react-bootstrap/ListGroup";

let categories_ = [];

categories_.push(races);
categories_.push(classes);
categories_.push(movings);
categories_.push(actions);
categories_.push(bonus_actions);
categories_.push(reactions);
categories_.push(free_actions);
categories_.push(conditions);
categories_.push(hits);
categories_.push(damage);
categories_.push(stats);
categories_.push(skills);
categories_.push(weapons);
categories_.push(tools);
categories_.push(other_checks);
categories_.push(environment);
categories_.push(spells);
categories_.push(travels);
categories_.push(languages);
categories_.push(multiclasses);
categories_.push(rulebooks);

function Body() {
  const [count, setCount] = useState(0);
  const [open_collapse, setOpen_collapse] = useState(false);
  const [chosenInfo, setChosenInfo] = useState({name: "", icons: "", description: "", name_: ""});

  const OpenCollapse = (data) => {
    setChosenInfo(data)
    if(data["name"] === "")
        setOpen_collapse(false);
    else
        setOpen_collapse(true);
  };
  const CloseCollapse = () => {
    setChosenInfo({name: "", icons: "", description: "", name_: ""})
    setOpen_collapse(false);
  };

  return (
    <div className="row me-0">
      <div className="col pe-0">
        <div className="container-fluid d-flex">
          <ListGroup className="w-100">
            {categories_.map((category, index) => (
              <Category action={OpenCollapse} item={category} key={index} chosenInfo={chosenInfo} />
            ))}
          </ListGroup>
          <RightPanel open={open_collapse} close={CloseCollapse} data={chosenInfo}></RightPanel>
        </div>
      </div>
    </div>
  );
}

export default Body;
