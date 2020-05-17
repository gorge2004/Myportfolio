import React from 'react';
import { connect } from "react-redux";

 class Skill  extends React.Component{
    
    render(){
        
        return (
        <section className='skill-container'>
            <p>
            {this.props.description}
          
            </p>
            <div className='tag-container'>
                {this.props.json_skill.map( (skill,index) => <span key={ 'index'+ index}>{skill} </span> )}
                
            </div>
        </section>);
    }
}
const mapStateToPros = state => {
    return { ...state.Appear, ...state.skill };
  };
  const mapDispatchToProps = dispatch => {
    return { dispatch: action => dispatch(action) };
  }
export default connect(mapStateToPros, mapDispatchToProps)(Skill);  