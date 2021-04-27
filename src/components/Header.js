import React from 'react';

import { connect } from "react-redux";

class Header extends React.Component {

    render(){
        return (
            <header className="header">
                <div className="brand">
                    <img src='/' alt="logo"/>
                </div>   
                <ul>
                    <li>
                        <button onClick={ () => this.props.dispatch({type: 'EN'}) }>English</button> 
                    </li>
                    <li>
                        <button onClick={ () => this.props.dispatch({type: 'ES'}) }>Español</button>
                    </li>
                </ul>
            </header>
        );
    }
}
const mapStateToPros = (state) =>{
    return {...state.HERO};
  } ;
  const mapDispatchToProps = (dispatch) => {
    return ({dispatch: (action) => dispatch(action)});
  }

export default connect(mapStateToPros, mapDispatchToProps)(Header);