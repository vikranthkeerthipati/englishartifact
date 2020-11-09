import React, { useState } from 'react';
import { Button,Row,Col,Jumbotron } from 'react-bootstrap';
import Iframe from 'react-iframe';
import worksCitedImage from '../img/workscited.jpg'
import worksCited from "../files/works_cited.pdf"
import EngNavbar from './EngNavbar'
import '../css/linkCards.css'
import Fade from 'react-reveal/Fade'

let worksCitedUrl = `url(${worksCited})`
export default function WorksCited(){
    let jumboStyle = {
        minHeight:"100vh",
        backgroundImage:  `url(${worksCitedImage})`,
        backgroundSize:'cover',
        marginBottom:"0px"
    }
   
    return (
    <>
        <EngNavbar color="black"></EngNavbar>
        <Fade right>
        <Jumbotron style={jumboStyle} fluid>
            <Row>
                <Col md={6}></Col>
                <Col md={6}>
                    <h1>The Sources</h1>
                    <Button variant="dark" class="linkstyle" href={worksCited} target = "_blank">Click here to learn the sources</Button>
                </Col>
            </Row>

        </Jumbotron>
        </Fade>
        </>
    );

    
}