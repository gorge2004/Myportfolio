import React from 'react';
import Header from './components/Header.js';
import Hero from './components/hero.js';
import Content from './components/content.js';
import Skill from './components/Skill.js';
import Footer from './components/Footer';



/* import { getEnglish, getSpanish } from './store/actions.js';
import { connect } from "react-redux"; */
function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Content />
      <Skill />
      <Footer />
    </ React.Fragment>
  );
}


export default  App;
