import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  async componentDidMount() {
    const players = await this.getPlayers();
    this.setState({ players });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Player list</h1>
        </header>
        <Form addPlayer={this.addPlayer} />
        <List players={this.state.players} />
      </div>
    );
  }

  async getPlayers() {
    try {
      const res = await fetch("/players");
      const players = await res.json();
      return players;
    } catch (error) {
      console.log(error);
    }
  }

  addPlayer = async name => {
    try {
      const res = await fetch("/player", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
      });
      const player = await res.json();
      this.setState({ players: [...this.state.players, player] });
    } catch (error) {
      console.log(error);
    }
  };
}

export default App;
