import { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import parse from "html-react-parser";

const colHeight = "140px";
const colWidth = "120px";

const svgHeight = "50px";
const svgWidth = "50px";

function Block(props) {
  const [isHover, setIsHover] = useState(false);
  const OpenCollapse = () => {
    if(props.chosenInfo["name"]!==props.object["name"])
    {
      props.action(props.object);
    }
    else
    {
      props.action({name: "", icons: "", description: "", name_: ""});
    }
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const colStyle = {
    border: "solid " + props.color,
  };
  const svgStyle = {
    backgroundImage: "url(" + props.object.icon + ")",
  };
  const textStyle = {
    color: isHover ? props.color : " ",
  };
  const cardStyle = {
    border: "solid " + props.color,
  };
  const btnClass= (props.chosenInfo["name"]===props.object["name"]) ? "w-100 btn btn-dnd btn-dnd--hovered p-0" : "w-100 btn btn-dnd p-0";
  const btnStyle = (props.chosenInfo["name"]===props.object["name"]) ? {boxShadow: "0 0 10px " + props.color} : {};
  
  return (
    <>
      <Col
        className="border-1 rounded-2 my-3 me-3 px-0 text-center d-flex block"
        style={colStyle}
      >
        {/* <Image fill='red' src={object.icon} style={{color: "red"}} rounded />*/}
        <button
          className={btnClass}
          style={btnStyle}
          onClick={OpenCollapse}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseRightSidebar"
          aria-expanded="false"
          aria-controls="multiCollapseRightSidebar"
        >
          <svg style={svgStyle} className="mt-1"></svg>
          <div className="mt-3 h6" style={textStyle}>
            {parse(props.object.name)}
          </div>
        </button>
        {isHover && (
          <Card
            className="shadow-lg p-0 text-start position-absolute bg-dnd bg-dnd--card rounded-0 border-1 border-start-0"
            style={cardStyle}
          >
            <Card.Body className="p-3 fw-bold ">
            {props.object.shortinfo}
            </Card.Body>
          </Card>
        )}
      </Col>
    </>
  );
}

export default Block;
