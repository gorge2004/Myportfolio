import React from "react";
import logo from "../assets/images/logo.svg";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    console.log('HEader',this.props);
    
    return (
      <header className="header">
        <div>
          <img src={logo} alt="" />
        </div>
        <nav>
        {this.props.Options.map((option, index) => 
          <button key={index}>
          {option.title}
        </button>
          )}
          <button onClick={() => this.props.dispatch({ type: "ES" })}>
            ES
          </button>
          <button onClick={() => this.props.dispatch({ type: "EN" })}>
            EN
          </button>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
console.log(state.HEADER);

  return { ...state.HEADER };
};
const mapDispatchToProps = (dispatch) => {
  return { dispatch: (action) => dispatch(action) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
