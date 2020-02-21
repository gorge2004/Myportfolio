import React from "react";

import { connect } from "react-redux";
import Card from "./Card";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], indexs: [] };
  }
  componentDidMount() {
    // this.getImage(node);
    
    
    this.getCards();
    this.randomDissapear();
    /*  console.log("montado"); */
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.show !== prevProps.show) {
      console.log('update dispatch');
      
      const { cards, indexs } = this.state;

      for (let index = 0; index < indexs.length; index++) {
        cards[indexs[index]] = React.cloneElement(cards[indexs[index]], {
          ...cards[indexs[index]],
          show: this.props.show
        });
        new Promise((resolve, reject) => {
          setTimeout(() => {
            
            resolve("good");
          }, 1000 * index);
        }).then(() => {this.setState({ cards })});
      }
    }
    else if (this.props !== prevProps) {
      this.getCards();
    }
        
  }
  randomDissapear  = () =>{
    const auxIndex = [];
    for (let index = 0; index < this.props.Jobs.length; index++) {
      if (Math.random() >= 0.5) {
        auxIndex.push(index);
      }
       }
    this.setState({ indexs: auxIndex });
  }
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
    this.setState({ cards: cards, });
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
  return { ...state.Appear, ...state.content };
};
const mapDispatchToProps = dispatch => {
  return { dispatch: action => dispatch(action) };
};
export default connect(mapStateToPros, mapDispatchToProps)(Content);
