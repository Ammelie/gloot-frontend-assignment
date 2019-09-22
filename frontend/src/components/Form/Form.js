import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <form className={this.props.size} onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          placeholder="NEW PLAYER"
          onChange={this.handleChange}
        />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.emptyForm();
  };

  emptyForm() {
    this.setState({ value: "" });
  }
}

export default Form;
