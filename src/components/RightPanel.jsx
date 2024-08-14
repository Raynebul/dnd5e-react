import { useState } from "react";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import Collapse from "react-bootstrap/Collapse";
import parse from "html-react-parser";

const svgHeight = "50px";
const svgWidth = "50px";

function RightPanel(props) {
  const CloseCollapse = () => {
    props.close();
  };

  console.log(props.data)
  const svgStyle = {
    backgroundImage: "url(" + props.data.icon + ")",
    backgroundRepeat: "no-repeat",
    height: svgHeight,
    width: svgWidth,
  };

  return (
    <>
      <div className="p-0 ms-0">
        <Collapse
          in={props.open}
          style={{ width: String(window.screen.width / 2) + "px" }}
          className=""
        >
          <div
            id="example-collapse-text"
            data-bs-theme="dark"
            className="text-light"
          >
            {/*          <div className="text-end mt-3 me-3">
            <CloseButton onClick={CloseCollapse} />
          </div>
          <div className="mt-2 mx-3 h5">{props.data.name}</div>
          <div className="mt-2 mx-3 h6 text-muted">
            {props.data["shortinfo"]}
          </div>
          <div className="mt-2 mx-3">{props.data["description"]}</div> */}
          </div>
        </Collapse>
      </div>
      <div className="p-0 ms-0 position-fixed top-25 end-0 me-3">
        <Collapse
          in={props.open}

          style={{ width: String(window.screen.width / 2) + "px", maxHeight: String(window.screen.height / 1.4) + "px"}}
          className="border rounded-2 border-secondary bg-dark"
        >
          <div
            id="example-collapse-text"
            data-bs-theme="dark"
            data-bs-spy="scroll"
            className="text-light overflow-auto"
            style={{height: "100px"}}
          >
            <div className="d-flex ms-3 mt-3 me-3">
              <div>
                <svg style={svgStyle} className=""></svg>
              </div>
              <div className="ms-auto">
                <CloseButton onClick={CloseCollapse} />
              </div>
            </div>

            <div className="mt-2 mx-3 h5 d-flex">
              {parse(props.data.name)}
              <span className="ms-2 badge bg-secondary"> {props.data["page"]}</span>
            </div>
            <div className="mt-2 mx-3 h6 text-muted">
              {props.data["shortinfo"]}
            </div>
            <div className="mt-2 mx-3 mb-3 overflow-auto">{parse(props.data["description"])}</div>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default RightPanel;
