import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {

  getIcon = (type) =>{
    switch (type) {
      case 'linkedin':
        return faLinkedin ;
        break;
      case 'github':
          return faGithub;
          break;
      default:
        break;
    }
  }
  render() {
    return <footer>
      <div className="text-footer">
        <p >{ this.props.description}</p>
      </div>
        <div className="socials">
  {this.props.socials.map( (social,index) => <a key={'link'+index} href={social.link} > <FontAwesomeIcon  icon={this.getIcon(social.type)} /> 
</a>)}
        </div>
        <p className="copyright">Copyright © {new Date().getFullYear()} All rights reserved.</p>

    </footer>;
  }
}
const mapStateToProps = state => ({...state.footer});
const mapDispachToProps = dispatch => ({dispatch: action => dispatch(action)});

export default connect(mapStateToProps,mapDispachToProps)(Footer) ;
