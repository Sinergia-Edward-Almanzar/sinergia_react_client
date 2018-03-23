import React, { Component } from 'react';
import sinergialogo from '../sinergia_logo.png';
import { NavbarHeader, Navbar, Nav, NavItem,
        NavDropdown, MenuItem, FormGroup, FormControl, Button} from 'react-bootstrap';


export default class Navbarbostrap extends React.Component{
  render(){
    return(

      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home"><img src={sinergialogo} className="sinergia-logo" alt="logo" /></a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>{' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
