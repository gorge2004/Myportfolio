import React from 'react';
import html2canvas from 'html2canvas';
import Chance from 'chance';
import connect from 'react-redux';

class Content extends React.Component {
    constructor(props){
      super(props);
      var canvasCount = 35;
      var imageDataArray = [];


    }
    componentDidMount(){
      console.log(document.querySelector(".card"));
    /*  html2canvas(document.querySelector(".card")).then(canvas => {

        const context = canvas.getContext("2d");
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const pixelArray =  imageData.data;
        for (let i = 0; i < pixelArray.length; i+=4) {
        //find the highest probability canvas the pixel should be in
        let p = Math.floor((i/pixelArray.length) * this.canvasCount);
        let a = this.imageDataArray[this.weightedRandomDistrib(p)];
        a[i] = pixelArray[i];
        a[i+1] = pixelArray[i+1];
        a[i+2] = pixelArray[i+2];
        a[i+3] = pixelArray[i+3];
      }


});*/
 }

 weightedRandomDistrib = (peak) => {
  var prob = [1], seq = [2];
  var chance = new Chance();
  console.log(this.canvasCount);
  for(let i=0; i < this.canvasCount ; i++) {
    prob.push( Math.pow(this.canvasCount-Math.abs(peak-i),3) );
    seq.push(i);
  }
  console.log("probabilidad",prob, seq);
  return chance.weighted(seq, prob);
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
