import { useState } from "react";
function DiceBlock(props) {
  return (
    <>
      <div className="card bg-dnd mt-2" style={{ height: "5rem" }}>
        <div className="card-body py-0">
          <div className="row row-cols-auto h-100">
            <div className="col border-end border-secondary my-auto">
              <svg
                style={{
                  backgroundImage: "url(./dices/" + props.rolledDice.dice + "-" + props.theme + ".svg)",
                }}
                className="mt-1"
              ></svg>
            </div>
            <div className="col my-auto h5">{props.rolledDice.roll}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiceBlock;
