import React from "react";

import { connect } from "react-redux";
import htmlToImage from "html-to-image";
import Card from "./Card";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }
  componentDidMount() {
    // this.getImage(node);
    this.getCards();
    console.log("montado");
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.show !== prevProps.show) {
      const cards = this.state.cards;
      for (let index = 0; index < cards.length; index++) {
        if (index % 2 === 0) {
          cards[index] = React.cloneElement(cards[index], {
            ...cards[index],
            show: this.props.show
          });
          setTimeout(() => {
            console.log("ti");

            this.setState({ cards });
          }, 1000 * index);
        }
      }
    }
    console.log("actualizado", this.props, prevProps, prevState);
  }

  getCards = () => {
    let cards = [];

    for (let index = 0; index < 10; index++) {
      if (index % 2 === 0) {
        cards[index] = (
          <Card
            key={index}
            show={this.props.show}
            Title="title of jobs"
            Location="ubication"
            Duration="duration"
            Description="Lorem consectetur aliquip quis est excepteur duis. Est cupidatat
          irure eu pariatur minim voluptate. In reprehenderit cillum esse
          laborum nostrud eiusmod do enim ex. Nulla velit ex nulla ea
          eiusmod laboris consequat cupidatat anim ex nisi esse."
          />
        );
      } else {
        cards[index] = (
          <Card
            key={index}
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
    }
    this.setState({ cards });
  };

  render() {
    return (
      <div
        className="content"
        onClick={() => this.props.dispatch({ type: "START_DECIMATION" })}
      >
        {this.state.cards}
      </div>
    );
  }
}

const mapStateToPros = state => {
  return { ...state.Appear };
};
const mapDispatchToProps = dispatch => {
  return { dispatch: action => dispatch(action) };
};
export default connect(mapStateToPros, mapDispatchToProps)(Content);
