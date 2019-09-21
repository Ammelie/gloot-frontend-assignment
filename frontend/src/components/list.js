import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const players = props.players.map(player => (
    <li key={`${player.id}`}>{player.name}</li>
  ));

  return <ul>{players}</ul>;
}

export default List;
