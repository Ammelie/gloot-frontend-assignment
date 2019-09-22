import React from "react";
import "./List.css";

function List(props) {
  const players = props.players.map(player => (
    <li key={`${player.id}`}>{player.name}</li>
  ));

  return <ul className="player-list">{players}</ul>;
}

export default List;
