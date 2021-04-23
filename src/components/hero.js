import React from 'react';

import { connect } from "react-redux";

class Hero extends React.Component{
  constructor(props) {
    super(props)
  
      /* let h1Texts, textMid, textEnd; */
      window.addEventListener('resize', this.fragmentingTitle)
  }

  componentDidUpdate(){
    this.fragmentingTitle();
  }


    componentDidMount(){
      this.fragmentingTitle();
  }

  fragmentingTitle = () => {
    this.h1Texts = document.querySelectorAll(".h1-hero");
    this.textMid = document.querySelector(".aux-cut-letter-mid");
    this.textEnd = document.querySelector(".aux-cut-letter-end");
    this.h1Texts.forEach( h1 => this.setWidth( h1, ""));

    const LENGTH_TEXT = this.props.title.length ;
    const WIDTH_BY_CHARACTER  = this.getRound(this.h1Texts[0].offsetWidth / LENGTH_TEXT);
    const CHARACTERS_BY_SECTION = this.getRound(LENGTH_TEXT / 3);
    const WIDTH_BY_SECTION = this.getRound(WIDTH_BY_CHARACTER * CHARACTERS_BY_SECTION);

    const LEFT_TO_MID_SECTION = this.getRound(WIDTH_BY_SECTION * -1)+ this.getUnit();
    const LEFT_TO_END_SECTION = this.getRound(WIDTH_BY_SECTION * -2)+ this.getUnit();
    const MIN_HEIGHT = this.h1Texts[0].offsetHeight;
   


     this.h1Texts.forEach( h1 => this.setWidth( h1,  WIDTH_BY_SECTION+ this.getUnit() ));
     this.setMinHeight(this.h1Texts[1],MIN_HEIGHT+ this.getUnit());
     this.setMinHeight(this.h1Texts[2],MIN_HEIGHT+ this.getUnit() );

     this.setLeft(this.textMid,  LEFT_TO_MID_SECTION);
     this.setLeft(this.textEnd,  LEFT_TO_END_SECTION);
  }

   getRound = (value) =>{

    return value.toFixed(2);

  }
   getUnit = (unit = "px") =>{
    return unit
  }
  setWidth = (element, length) =>{
      element.style.width = length;
  }
  setMinHeight = (element, length) =>{
      element.style.minHeight = length;
  }
  setLeft = (element, length) => {
    element.style.left = length ;

  }

  render(){
    
      return (
        <div className='hero'onClick={ () => this.props.dispatch({type: 'ES'}) } >
            <h1  className="h1-hero"  onClick={(evt) => console.log(evt.target.width) }>
            { this.props.title}
            </h1>
              <h1 className="h1-hero">
                <p className="aux-cut-letter-mid">
                { this.props.title}

                </p>
              </h1>

              <h1 className="h1-hero">
                <p className="aux-cut-letter-end">
                { this.props.title }
                </p>
              </h1>

        </div>
      );


  }
}
const mapStateToPros = (state) =>{
  return {...state.HERO};
} ;
const mapDispatchToProps = (dispatch) => {
  return ({dispatch: (action) => dispatch(action)});
}
export default connect(mapStateToPros, mapDispatchToProps)(Hero) ;
