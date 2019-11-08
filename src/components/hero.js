import React from 'react';


class Hero extends React.Component{
  constructor(props) {
    super(props)
      let h1First;
  }

  componentDidMount(){
    console.log(document.getElementsByTagName('h1'));
  }
  render(){
    this.load();
      return (
        <div className='hero'>
            <h1  >
              Jorge
            </h1>
              <h1>
              <p className="aux-cut-letter-mid">
              Jorge
              </p>
              </h1>

              <h1>
              <p className="aux-cut-letter-end">
              Jorge
              </p>
              </h1>

        </div>
      );


  }
}
export default Hero;
