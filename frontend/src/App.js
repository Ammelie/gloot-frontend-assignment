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

  componentDidMount() {
    this.getPlayers();
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
      this.setState({ players });
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

  updatePlayer = async player => {
    const newName = player.name;
    const id = player.id;

    try {
      const res = await fetch(`/player/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName })
      });
      const updatedPlayer = await res.json();
      const updatedPlayerList = this.state.players.map(player => {
        if (player.id === updatedPlayer.id) return updatedPlayer;
        else return player;
      });
      this.setState({ players: updatedPlayerList });
    } catch (error) {
      console.log(error);
    }
  };

  removePlayer = async id => {
    try {
      const res = await fetch(`/player/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });
      const removedPlayer = await res.json();
      const updatedPlayerList = this.state.players.filter(
        player => player.id !== removedPlayer.id
      );
      this.setState({ players: updatedPlayerList });
    } catch (error) {
      console.log(error);
    }
  };
}

export default App;
