import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    return (
      <form className={this.props.styling} onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          placeholder={this.props.placeholder}
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

    switch (this.props.type) {
      case "ADD":
        this.props.submit(this.state.value);
        this.setState({ value: "" });
        break;
      case "UPDATE":
        this.props.submit({ id: this.props.player.id, name: this.state.value });
        break;
      case "REMOVE":
        this.props.submit(this.props.player.id);
        break;
      default:
        console.log("No such type");
    }
  };
}

export default Form;
