import React from "react";
import Form from "./components/form";
import List from "./components/list";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [{ name: "Player 1" }, { name: "Player 2" }]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Player list</h1>
        </header>
        <Form />
        <List players={this.state.players} />
      </div>
    );
  }
}

export default App;
