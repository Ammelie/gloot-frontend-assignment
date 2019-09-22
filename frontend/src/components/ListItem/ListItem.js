import React from "react";
import "./ListItem.css";
import Form from "../Form/Form";

function ListItem(props) {
  return (
    <li>
      <Form
        buttonText="Submit"
        placeholder={props.player.name}
        player={props.player}
        styling={"update-player-form"}
        submit={props.updatePlayer}
        type="UPDATE"
        value={props.player.name}
      ></Form>
      <button
        className="remove-button"
        onClick={() => props.removePlayer(props.player.id)}
      >
        Remove
      </button>
    </li>
  );
}

export default ListItem;
