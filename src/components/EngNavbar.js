import {Navbar,Nav} from 'react-bootstrap'
import React from 'react';



export default class EngNavbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color: props.color,
            bkgColor : 'rgba(0,0,0,0)',
            opacity: 0
        }
    }

 
    componentDidMount() {

        document.addEventListener("scroll", () => {
        //   console.log(window.innerHeight)
        //   console.log(window.scrollY)
          const opacity = window.scrollY/window.innerHeight-0.1;
          const color = window.scrollY < 100 ? "black" : "white";
          const bkgColor = `rgba(0,0,0,${opacity})`

          console.log(opacity)

          this.setState({ color: color ,opacity:opacity, bkgColor: bkgColor });
        });
      }
    render(){
        let navTextColor = {
            color: this.state.color,
            opacity: this.state.opacity
        }
    return(
    <Navbar style={{backgroundColor:this.state.bkgColor}}variant="light" fixed='top'>
    <Navbar.Brand style={{color: this.state.color}} href="#home">FI</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link style={{color: this.state.color}} href="#home">Home</Nav.Link>
      <Nav.Link style={{color: this.state.color}} href="#memory">Food and Memory</Nav.Link>
      <Nav.Link style={{color: this.state.color}}href="#culture">Food and Culture</Nav.Link>
      <Nav.Link style={{color: this.state.color}}href="#habits">Food and Habits</Nav.Link>

    </Nav>
  </Navbar>
    );
    }
}