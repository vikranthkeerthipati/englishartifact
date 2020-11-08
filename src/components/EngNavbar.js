import {Navbar,Nav} from 'react-bootstrap'
import React from 'react';
import invert from 'invert-color';



export default class EngNavbar extends React.Component{
    constructor(props){
        super(props)
        let alt = ""
        if(!props.invert){
            alt = props.color;
        }
        else{
            alt = invert(props.color)
        }
        this.state = {
            color: props.color,
            altColor: alt,
            bkgColor : 'rgba(0,0,0,0)',
            opacity: 0
        }
    }

 
    componentDidMount() {
        document.addEventListener("scroll", () => {
        //   console.log(window.innerHeight)
        //   console.log(window.scrollY)
        console.log(this.state.altColor)
          const opacity = window.scrollY/window.innerHeight-0.1;

          const color = window.scrollY < 200 ? this.props.color : this.state.altColor;
          const bkgColor = `rgba(0,0,0,${opacity})`


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
    <Navbar.Brand style={{color: this.state.color}} href="/">FI</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link style={{color: this.state.color}} href="/">Home</Nav.Link>
      <Nav.Link style={{color: this.state.color}} href="/memory">Food and Memory</Nav.Link>
      <Nav.Link style={{color: this.state.color}}href="/culture">Food and Culture</Nav.Link>
      <Nav.Link style={{color: this.state.color}}href="/society">Food and Society</Nav.Link>
      <Nav.Link style={{color: this.state.color}}href="/">Works Cited</Nav.Link>

    </Nav>
  </Navbar>
    );
    }
}