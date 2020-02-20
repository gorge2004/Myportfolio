import React from "react";

import { connect } from "react-redux";
import Card from "./Card";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], indexs:[] };
  }
  componentDidMount() {
    // this.getImage(node);
    this.getCards();
   /*  console.log("montado"); */
  }
  componentDidUpdate(prevProps, prevState) {
  
    if (this.props.show !== prevProps.show) {
      const {cards, indexs} = this.state;
     
      for (let index = 0; index < indexs.length; index++) {
     
          cards[indexs[index]] = React.cloneElement(
            cards[indexs[index]], {
            ...cards[indexs[index]],
            show: this.props.show
          });
          
        
      }
      setTimeout(() => {
        console.log("ti");

        this.setState({ cards });
      }, 10 );
    }
/*     console.log("actualizado", this.props, prevProps, prevState); */
  }

  getCards = () => {
    let cards = [];
    const auxIndex = [];
    for (let index = 0; index < 10; index++) {
      if(Math.random() >= 0.50){
        auxIndex.push(index);
      }
        cards[index] = (
          <Card
            key={index+1}
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
    this.setState({ cards: cards, indexs: auxIndex });
  };

  render() {
    console.log(this.state.indexs);
    
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
