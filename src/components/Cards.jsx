import React from "react";
import "./styles/Card.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate() 
  return (
    <div className="FullCard" id={props.id} title={props.title} onClick={()=> navigate(`/${props.type}/${props.id}/${props.title}`)}>
      <div className="FullCard-img">
        <img src={props.img} alt="" />
      </div>
      <div className="FullCard-text">
        <div className="FullCard-title" title={props.title}>{props.title}</div>
      </div>
    </div>
  );
}

export default Card;
