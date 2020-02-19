import React from "react";

import { connect } from "react-redux";
import htmlToImage from "html-to-image";
import Card from "./Card";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { auxChange: false, cards: { render: [], originals: [] } };
  }
  componentDidMount() {
    // this.getImage(node);
    this.getCards();
    console.log("montado");
  }
  componentDidUpdate() {
    console.log("actualizado");
  }

  getCards = () => {
    let cards = [];

    for (let index = 0; index < 10; index++) {
      cards[index] = (
        <Card
          Title="title of jobs"
          Location="ubication"
          Duration="duration"
          Description="Lorem consectetur aliquip quis est excepteur duis. Est cupidatat
        irure eu pariatur minim voluptate. In reprehenderit cillum esse
        laborum nostrud eiusmod do enim ex. Nulla velit ex nulla ea
        eiusmod laboris consequat cupidatat anim ex nisi esse."
        />
      );
    }

    return cards;
  };

  render() {
    return <div className="content">{this.getCards()}</div>;
  }
}

const mapStateToPros = state => {
  return { ...state.HERO };
};
const mapDispatchToProps = dispatch => {
  return { dispatch: action => dispatch(action) };
};
export default connect(mapStateToPros, mapDispatchToProps)(Content);
