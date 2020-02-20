import React from "react";

import htmlToImage from "html-to-image";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

  }
  componentDidUpdate() {
 
   

    setTimeout(() => {
      this.handleClick();
    }, 10);

    console.log("update card");
  }
  getImage = async node => {
    let img = new Image();
    await htmlToImage
      .toPng(node)
      .then(function(dataUrl) {
        img.src = dataUrl;
        //node.appendChild(img);
      })
      .catch(function(error) {
        console.error("oops, something went wrong!", error);
      });

    this.divideToCanvas(node, img);

    node.querySelector(".card").style.animation = "card-disappear 1s forwards";
    node.querySelector(".card").style.display = "none";
    this.startTheDecimation(node);
  };

  getPixels = (context, cnvas, scroll) => {
    const width = cnvas.width;
    const height = cnvas.height;
    const imgData = context.getImageData(0, 0, width, height);
    let length = imgData.data.length;
    const that = this;

    for (let i = 0; i < length; i += 4) {
      setTimeout(() => {
        imgData.data[i + 3] = 0;
       
        that.refreshCanvas(context, imgData, 0, 0, i, scroll);
      }, 100 * Math.random());
    }
  };
  refreshCanvas = (context, imgData, x0, y0, whichCanvas, scroll) => {
    if (whichCanvas === 0 && scroll) {

      window.scroll({
        top: this.myRef.current.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
    context.putImageData(imgData, x0, y0);
  };
  divideToCanvas = (container, imag, row = 1, column = 10) => {
    const { width, height } = imag;
    const { clientHeight, clientWidth } = container;
    const widthCanvas = clientWidth / column;
    const heightCanvas = clientHeight / row;
    const sliceWidthImage = width / column;
    const sliceHeightImage = height / row;

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        const newCanvas = document.createElement("canvas");

        newCanvas.width = widthCanvas;
        newCanvas.height = heightCanvas;
        const newCtx = newCanvas.getContext("2d");
        newCtx.drawImage(
          imag,
          sliceWidthImage * j,
          sliceHeightImage * i,
          sliceWidthImage,
          sliceHeightImage,
          0,
          0,
          widthCanvas,
          heightCanvas
        );
        container.appendChild(newCanvas);
      }
    }
  };
  startTheDecimation = (container, row = 1, column = 10) => {
    const canvas = container.getElementsByTagName("canvas");
    
    for (let i = 0; i < column; i++) {
      for (let j = 0; j < row; j++) {
        const index = j * row + i;
        setTimeout(() => {
          this.getPixels(canvas[index].getContext("2d"), canvas[index],i===0 && j === 0);
        }, 5);
      }
    }
  };
  handleClick = evt => {
  
    setTimeout(() => {
      if (this.myRef.current.querySelector(".card").style.display === "none") {
        this.showCard();
      } else {
        this.getImage(this.myRef.current);
      }
    }, 0);
  };
  showCard = () => {
    const canvas = this.myRef.current.querySelectorAll("canvas");

    for (let index = 0; index < canvas.length; index++) {
      canvas[index].remove();
    }

    this.myRef.current.querySelector(".card").style.display = "flex";
    this.myRef.current.querySelector(".card").style.animation =
      "card-appear 3s forwards";
  };
  componentDidMount() {
    /*  console.log(this.myRef.current.querySelector(".card")); */
  }
  render() {
    return (
      <div className="container-card" ref={this.myRef}>
        <div className="card">
          <section className="card-title">
            <h2>{this.props.Title}</h2>
            <h5>{this.props.Location}</h5>
            <h5>{this.props.Duration}</h5>
          </section>
          <section className="card-description">
            <p>{this.props.Description}</p>
          </section>
        </div>
      </div>
    );
  }
}
