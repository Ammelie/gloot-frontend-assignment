import React from "react";
import "./ListItem.css";
import Form from "../Form/Form";

function ListItem(props) {
  return (
    <li>
      <Form
        buttonText="Rename"
        placeholder={props.player.name}
        player={props.player}
        styling={"edit-player-form"}
        submit={props.updatePlayer}
        type="UPDATE"
        value={props.player.name}
      ></Form>
    </li>
  );
}

export default ListItem;
