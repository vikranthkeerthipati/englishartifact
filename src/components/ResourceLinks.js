import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';

import React from 'react';


export default class ResourceLinks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          isVisible: false,
        };
    }

    updateModal(isVisible) {
    	this.state.isVisible = isVisible;
      this.forceUpdate();
    }

    render() {
        return (
              <div>
                    <Nav>
                      <NavItem href="#">Link 1</NavItem>
                      <NavItem href="#">Link 2</NavItem>
                      <NavItem href="#">Link 3</NavItem>
                      <NavItem href="#">Link 4</NavItem>
                    </Nav>
              </div>
        );
    }
}