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
      <Link to='/parentcenter' > PARENT CENTER </Link>
      <Link to='/About' > ABOUT </Link>
      <Link to='/services' > SERVICES </Link>
      <Link to='/resources' > RESOURCES </Link>
      <Link to='/media' > MEDIA </Link>
      <Link to='/getinvolved' > GET INVOLVED </Link>
      <Link to='/calendar' > CALENDAR </Link>
      <Link to='/blog' > BLOG </Link>
      <Link to='/donate' > DONATE </Link>
      <Link to='/contact' > CONTACT </Link>
      <Link to='/carrers' > CARRERS </Link>
      <Link to='/settings' > SETTINGS </Link>
      <a onClick={ this.showSettings } className="menu-item--small" href="">SETTINGS</a>
    </MenuBubble>



      <Navbarbostrap/>

      {this.props.children}


  </div>
    );
  }
}

export default App;
