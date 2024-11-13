import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "123abc",
        },
        {
          name: "Frank",
          id: "456def",
        },
        {
          name: "Jacky",
          id: "789ghi",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <h1>
          {this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })}
        </h1>
      </div>
    );
  }
}

export default App;
