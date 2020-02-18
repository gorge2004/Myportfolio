import React from 'react';

import connect from 'react-redux';

class Content extends React.Component {
    constructor(props){
      super(props);
      var canvasCount = 35;
      var imageDataArray = [];


    }
    componentDidMount(){
      console.log(document.querySelector(".card"));
   
 }

 


    render(){

      return <div className="content" >
              <div className="card">
                <div className="card-title">
                  <h2>hi</h2>
                </ div>
              </div>
              <div className="card">
                <div className="card-title">
                  <h2>hi</h2>
                </ div>
              </div>
              <div className="card">
                <div className="card-title">
                  <h2>hi</h2>
                </ div>
              </div>
              <div className="card">
                <div className="card-title">
                  <h2>hi</h2>
                </ div>
              </div>
              <div className="card">
                <div className="card-title">
                  <h2>hi</h2>
                </ div>
              </div>
            </div>
      ;
    }
}
export default Content;
