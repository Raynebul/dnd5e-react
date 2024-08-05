import { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const colHeight = "140px";
const colWidth = "120px";

const svgHeight = "50px";
const svgWidth = "50px";

function Block(props) {
  const [isHover, setIsHover] = useState(false);

  const OpenCollapse = () => {
    props.action(props.object);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const colStyle = {
    height: colHeight,
    width: colWidth,
    cursor: "pointer",
    border: "solid " + props.color,
    background: isHover ? "#404c54 !important" : "transparent",
  };
  //./src/assets/action-icons/pointy-sword.svg
  const svgStyle = {
    backgroundImage: "url(" + props.object.icon + ")",
    //backgroundImage: "url(./src/assets/action-icons/pointy-sword.svg)",
    //backgroundImage: "url(./vite.svg)",
    backgroundRepeat: "no-repeat",
    height: svgHeight,
    width: svgWidth,
  };
  const textStyle = {
    whiteSpace: "normal",
    color: isHover ? props.color : "white",
  };
  const cardStyle = {
    marginLeft: colWidth,
    marginTop: "-1px",
    height: colHeight,
    width: "160px",
    background: "#404c54",
    border: "solid " + props.color,
  };
  return (
    <>
      <Col
        className="border-1 rounded-2 my-3 me-3 px-0 text-center d-flex"
        style={colStyle}
      >
        {/* <Image fill='red' src={object.icon} style={{color: "red"}} rounded />*/}
        <button
          className="w-100 btn btn-dark p-0"
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
            {props.object.name}
          </div>
        </button>
        {isHover && (
          <Card
            className="shadow-lg p-0 text-start position-absolute rounded-0 text-white border-1 border-start-0"
            style={cardStyle}
          >
            <Card.Body className="p-3 fw-bold" style={{ fontSize: "0.75rem" }}>
            {props.object.shortinfo}
            </Card.Body>
          </Card>
        )}
      </Col>
    </>
  );
}

export default Block;
