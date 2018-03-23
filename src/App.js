import React, { Component } from 'react';
import logo from './logo.svg';
import sinergialogo from './sinergia_logo.png';
import './App.css';
import './components/burgermenu.css';
import { bubble as Menu } from 'react-burger-menu'
import Navbarbostrap from './components/navbar';


class App extends Component {
  render() {
    return (

    <div id="outer-container">
    <Menu
      pageWrapId={ "page-wrap" }
      outerContainerId={ "outer-container" }
      >
      <img src={sinergialogo} className="App-logo" alt="logo" />
      <a id="home" className="menu-item" href="/">HOME</a>
      <a id="about" className="menu-item" href="/about">WHO WE ARE</a>
      <a id="about" className="menu-item" href="/about">NEWS AND EVENTS</a>
      <a id="about" className="menu-item" href="/about">SUCCES STORIES</a>
      <a id="about" className="menu-item" href="/about">GET INVOLVED</a>
      <a id="about" className="menu-item" href="/about">SUPPORT US</a>
      <a id="about" className="menu-item" href="/about">DONATE</a>
      <a id="contact" className="menu-item" href="/contact">CONTACT</a>
      <a id="about" className="menu-item" href="/about">CARRERS</a>
      <a onClick={ this.showSettings } className="menu-item--small" href="">SETTINGS</a>
    </Menu>


  <main id="page-wrap">
    <Navbarbostrap/>
      <div>
      <h1>dbqidbquwbduqwibfiuqbfuiqwbfqiuwfbiuqwbfiuqwbf</h1>
      <h2> duibfiubefgyueibgiweugbwiuebguiwebguiwebgiuwebgiuwe</h2>
        <h1>dbqidbquwbduqwibfiuqbfuiqwbfqiuwfbiuqwbfiuqwbf</h1>
        <h2> duibfiubefgyueibgiweugbwiuebguiwebguiwebgiuwebgiuwe</h2>
          <h1>dbqidbquwbduqwibfiuqbfuiqwbfqiuwfbiuqwbfiuqwbf</h1>
          <h2> duibfiubefgyueibgiweugbwiuebguiwebguiwebgiuwebgiuwe</h2>
            <h1>dbqidbquwbduqwibfiuqbfuiqwbfqiuwfbiuqwbfiuqwbf</h1>
            <h2> duibfiubefgyueibgiweugbwiuebguiwebguiwebgiuwebgiuwe</h2>
              <h1>dbqidbquwbduqwibfiuqbfuiqwbfqiuwfbiuqwbfiuqwbf</h1>
              <h2> duibfiubefgyueibgiweugbwiuebguiwebguiwebgiuwebgiuwe</h2>
                <h1>dbqidbquwbduqwibfiuqbfuiqwbfqiuwfbiuqwbfiuqwbf</h1>
                <h2> duibfiubefgyueibgiweugbwiuebguiwebguiwebgiuwebgiuwe</h2>
                  <h1>dbqidbquwbduqwibfiuqbfuiqwbfqiuwfbiuqwbfiuqwbf</h1>

      </div>
    </main>
  </div>
    );
  }
}

export default App;
