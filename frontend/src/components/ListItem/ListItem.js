import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return <li key={`${props.player.id}`}>{props.player.name}</li>;
}

export default ListItem;
