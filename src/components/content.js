import React from "react";

import { connect } from "react-redux";
import htmlToImage from "html-to-image";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { auxChange: false, cards: { render: [], originals: [] } };
  }
  componentDidMount() {
    // this.getImage(node);
    this.getCards();
    console.log("montado");
  }
  componentDidUpdate() {
    console.log("actualizado");
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
  getPixels = (context, cnvas) => {
    const width = cnvas.width;
    const height = cnvas.height;
    const imgData = context.getImageData(0, 0, width, height);
    let length = imgData.data.length;
    const that = this;
    for (let i = 0; i < length; i += 4) {
      setTimeout(function() {
        imgData.data[i + 3] = 0;
        that.refreshCanvas(context, imgData, 0, 0);
      }, 2500 * Math.random());
    }
  };
  refreshCanvas = (context, imgData, x0, y0) => {
    context.putImageData(imgData, x0, y0);
  };
  divideToCanvas = (container, imag, row = 10, column = 10) => {
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
  startTheDecimation = (container, row = 10, column = 10) => {
    const canvas = container.getElementsByTagName("canvas");

    for (let i = 0; i < column; i++) {
      for (let j = 0; j < row; j++) {
        const index = j * row + i;
        setTimeout(() => {
          this.getPixels(canvas[index].getContext("2d"), canvas[index], 500);
        }, 5);
      }
    }
  };
  getCards = () => {
    let cards = [];

    for (let index = 0; index < 10; index++) {
      cards[index] = (
        <div
          className="container-card"
          key={`${index}`}
          /* onClick={() => this.handleClick(index)} */
          onClick={this.handleClick}
        >
          <div className="card">
            <section className="card-title">
              <h2>title of jobs</h2>
              <h5>ubication</h5>
              <h5>duration</h5>
            </section>
            <section className="card-description">
              <p>
                Lorem consectetur aliquip quis est excepteur duis. Est cupidatat
                irure eu pariatur minim voluptate. In reprehenderit cillum esse
                laborum nostrud eiusmod do enim ex. Nulla velit ex nulla ea
                eiusmod laboris consequat cupidatat anim ex nisi esse.
              </p>
            </section>
          </div>
        </div>
      );
    }

    return cards;
  };
  handleClick = evt => {
    if (evt.currentTarget.querySelector(".card").style.display === "none") {
      const canvas = evt.currentTarget.querySelectorAll("canvas");
      console.log('event');
      
      for (let index = 0; index < canvas.length; index++) {
        canvas[index].remove();
      }

      evt.currentTarget.querySelector(".card").style.display = "flex";
      evt.currentTarget.querySelector(".card").style.animation =
        "card-appear 3s forwards";
    } else {
      this.getImage(evt.currentTarget);
    }
  };
  render() {
    return <div className="content">{this.getCards()}</div>;
  }
}

const mapStateToPros = state => {
  return { ...state.HERO };
};
const mapDispatchToProps = dispatch => {
  return { dispatch: action => dispatch(action) };
};
export default connect(mapStateToPros, mapDispatchToProps)(Content);
