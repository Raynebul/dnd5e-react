import { useState } from "react";
import Button from "react-bootstrap/Button";
import Block from "./Block.jsx";
import ListGroup from "react-bootstrap/ListGroup";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Transition } from "react-transition-group";
import parse from "html-react-parser";

function Category(props) {
  /*const [category, setCategory] = useState(0);*/
  const [open, setOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const OpenCollapse = (data) => {
    props.action(data);
}

  const fadein = "{from {opacity: 0;}to {opacity: 100;}}";

  const listItemStyle = {
    borderColor: props.item.border_color,
    transition: "0.3s",
    background: isHover
      ? "linear-gradient(transparent, " + props.item.border_color + ")"
      : "transparent",
  };
  const imgStyle = {
    color: props.item.border_color,
    backgroundRepeat: "no-repeat",
    height: "75px",
    width: "75px",
    fill: "red",
  };

  return (
    <>
      <ListGroup.Item
        onClick={() => setOpen(!open)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="my-1 mx-auto h6 py-3 w-75 bg-dark border-1 rounded-3 text-light"
        style={listItemStyle}
      >
        <span className="">{props.item.name}</span>
      </ListGroup.Item>
      <Collapse in={open} className="w-75 mx-auto">
        <div id="example-collapse-text" className="text-light">
          <span className="px-4 py-0">{parse(props.item.description)}</span>
          
          <Container>
            <Row xs="auto">
              {props.item.data.map((object, index) => (
                <Block action={OpenCollapse} object={object} key={index} color={props.item.border_color}></Block>
              ))}
            </Row>
          </Container>
        </div>
      </Collapse>
    </>
  );
}

export default Category;
