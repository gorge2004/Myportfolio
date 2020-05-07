import React from 'react';
import { connect } from "react-redux";

 class Skill  extends React.Component{
    
    render(){
        console.log(this.props);
        
        return (
        <section className='skill-container'>
            <p>
            {this.props.description}
          
            </p>
            <div className='tag-container'>
                {this.props.json_skill.map( (skill,index) => <tag key= 'skill-'index >{skill}</tag> )}
                
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