import {Navbar,Nav} from 'react-bootstrap'
import React from 'react';
import invert from 'invert-color';
import icon from '../img/FI.png'



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
      <>
      <head>
      <meta http-equiv='cache-control' content='no-cache'></meta>
      </head>
    <Navbar style={{backgroundColor:this.state.bkgColor}}variant="light" fixed='top'>
    <Navbar.Brand style={{color: this.state.color}} href="/">
        <img src={icon}  width="30"
        height="30"
        className="d-inline-block align-top"></img>
      </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link style={{color: this.state.color}} href={process.env.PUBLIC_URL+"/#/"}>Home</Nav.Link>
      <Nav.Link style={{color: this.state.color}} href={process.env.PUBLIC_URL+"/#/memory"}>Food and Memory</Nav.Link>
      <Nav.Link style={{color: this.state.color}}href={process.env.PUBLIC_URL+"/#/culture"}>Food and Culture</Nav.Link>
      <Nav.Link style={{color: this.state.color}}href={process.env.PUBLIC_URL+"/#/society"}>Food and Society</Nav.Link>
      <Nav.Link style={{color: this.state.color}}href={process.env.PUBLIC_URL+"/#/workscited"}>Works Cited</Nav.Link>

    </Nav>
  </Navbar>
  </>
    );
    }
}