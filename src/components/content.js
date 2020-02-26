import React from "react";

import { connect } from "react-redux";
import Card from "./Card";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      indexs: [],
      classImg: "",
      handleClick: this.handleClick
    };
  }
  handleClick = () => {
    this.props.dispatch({ type: "START_DECIMATION" });
  };
  componentDidMount() {
    // this.getImage(node);

    this.getCards();
    this.randomDissapear();

    /*  console.log("montado"); */
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.show !== prevProps.show) {
      if (this.props.show) {
        this.setState({ classImg: "img-resurrect", handleClick: () => {} });
        this.blockButtonAwhile(5000);
      } else {
        this.setState({ classImg: "img-decimation", handleClick: () => {} });
        this.blockButtonAwhile(10000);
      }
        setTimeout(()=> this.updateToCard(), 3000);
      
    } else if (this.props !== prevProps) {
      this.getCards();
    }
  }
  blockButtonAwhile = time => {
    setTimeout(
      () => this.setState({ classImg: "", handleClick: this.handleClick }),
      time
    );
  };
  updateToCard = () => {
    const { cards, indexs } = this.state;

    for (let index = 0; index < indexs.length; index++) {
      cards[indexs[index]] = React.cloneElement(cards[indexs[index]], {
        show: this.props.show,
        ...cards[indexs[index]]
      });

      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(cards);
        }, 1000 * index);
      }).then(arrayCard => {
        this.setState({ cards: arrayCard });
      });
    }
  };
  randomDissapear = () => {
    const auxIndex = [];

    for (let index = 0; index < this.props.Jobs.length; index++) {
      if (Math.random() >= 0.5) {
        auxIndex.push(index);
      }
    }

    this.setState({ indexs: auxIndex });
  };
  getCards = () => {
    let cards = [];
    for (let index = 0; index < this.props.Jobs.length; index++) {
      cards[index] = (
        <Card
          key={index + 1}
          Title={this.props.Jobs[index].title}
          Location={this.props.Jobs[index].location}
          Duration={this.props.Jobs[index].duration}
          Description={this.props.Jobs[index].description}
        />
      );
    }
    this.setState({ cards: cards });
  };

  render() {
    return (
      <React.Fragment>
        <div className="content">{this.state.cards}</div>
        <div
          className={"button-float " + this.state.classImg}
          onClick={this.state.handleClick}
        />
      </React.Fragment>
    );
  }
}

const mapStateToPros = state => {
  return { ...state.Appear, ...state.content };
};
const mapDispatchToProps = dispatch => {
  return { dispatch: action => dispatch(action) };
};
export default connect(mapStateToPros, mapDispatchToProps)(Content);
