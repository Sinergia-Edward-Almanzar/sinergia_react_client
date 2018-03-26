import React, { Component } from 'react';
import sinergialogo from './sinergia_logo.png';
import './App.css';
import './components/burgermenu.css';
import { bubble as MenuBubble } from 'react-burger-menu'
import Navbarbostrap from './components/navbar';

import {
  Link
}from 'react-router-dom';

class App extends Component {
  render() {
    return (

    <div id="">
    <MenuBubble
      pageWrapId={ "" }
      outerContainerId={ "" }
      >
      <Link to='/' >
      <img src={sinergialogo} className="App-logo" alt="logo" />
      </Link>
      <Link to='/' > HOME </Link>
      <Link to='/' > PARENT CENTER </Link>
      <Link to='/About' > ABOUT </Link>
      <Link to='/' > SERVICES </Link>
      <Link to='/' > RESOURCES </Link>
      <Link to='/' > MEDIA </Link>
      <Link to='/' > GET INVOLVED </Link>
      <Link to='/' > CALENDAR </Link>
      <Link to='/' > BLOG </Link>
      <Link to='/' > DONATE </Link>
      <Link to='/' > CONTACT </Link>
      <Link to='/' > CARRERS </Link>
      <a onClick={ this.showSettings } className="menu-item--small" href="">SETTINGS</a>
    </MenuBubble>



      <Navbarbostrap/>

      {this.props.children}


  </div>
    );
  }
}

export default App;
