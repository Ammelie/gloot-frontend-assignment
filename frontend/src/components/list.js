import React from "react";

function List(props) {
  console.log(props);
  const players = props.players.map(player => (
    <li key={`${player.name}-key`}>{player.name}</li>
  ));

  return <ul>{players}</ul>;
}

export default List;
