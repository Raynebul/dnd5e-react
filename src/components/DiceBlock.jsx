import { useState } from "react";
function DiceBlock(props) {
  return (
    <>
      <div className="card bg-dnd mt-2">
        <div className="card-body py-0 container-fluid h-100">
          <div
            className="d-flex flex-column justify-content-center"
            style={{ minHeight: "5rem" }}
          >
           <div className="row row-cols-auto">
              <div className="col border-end border-secondary">
                <svg
                  style={{
                    backgroundImage:
                      "url(./dices/" +
                      props.rolledDice.dice +
                      "-" +
                      props.theme +
                      ".svg)",
                  }}
                  className="mt-1"
                ></svg>
              </div>
              <div className="col my-auto h5">{props.rolledDice.roll}</div>
            </div>
          </div>
          {/**             <div className="row row-cols-auto">
              <div className="col border-end border-secondary">
                <svg
                  style={{
                    backgroundImage:
                      "url(./dices/" +
                      props.rolledDice.dice +
                      "-" +
                      props.theme +
                      ".svg)",
                  }}
                  className="mt-1"
                ></svg>
              </div>
              <div className="col my-auto h5">{props.rolledDice.roll}</div>
            </div>*/}
        </div>
      </div>
    </>
  );
}

export default DiceBlock;
