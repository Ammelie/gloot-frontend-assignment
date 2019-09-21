import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">+</button>
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
