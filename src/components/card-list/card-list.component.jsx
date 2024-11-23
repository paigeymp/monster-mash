import { Component } from "react";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log("render from card-list");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
