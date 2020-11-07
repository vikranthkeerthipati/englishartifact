import React from 'react';
import{Card,Button,Jumbotron, Row,Col} from 'react-bootstrap'
import EngNavbar from './EngNavbar';
import bgImage from '../img/avaliableoptions.jpg'
import Slide from 'react-reveal/Slide';
import fam from '../img/foodandmemory.jpg'
import fac from '../img/foodandculture.jpg'
import fad from '../img/foodanddiversity.jpg'

let jumboStyle = {
    height:"100vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize:'cover',
    marginBottom:"0px"
}

let cardStyle = {
    marginTop: "15vh",
    borderRadius:"25px",
    height:"60vh",
    zIndex: "1000"
}
let cardImgStyle = {
    borderRadius:"25px 25px 0px 0px" 
}





export default class AvaliableOptions extends React.Component{

    render(){
        return(
            <>
            <Jumbotron fluid style={jumboStyle}>
            <Slide left>
                <Row>
                <Col></Col>
                <Col>
            <Card style={cardStyle}>
  <Card.Img variant="top"  src={fam} style={cardImgStyle} />
  <Card.Body>
    <Card.Title>Food and Memory</Card.Title>
    <Card.Text>
      Food can sometimes be an integral part of our memories, and serves as a way 
      to remember our loved ones.
    </Card.Text>
  </Card.Body>
  <Button variant="dark">Visit!</Button>
</Card>
</Col>
<Col><Card style={cardStyle}>
  <Card.Img variant="top" src={fac} style={cardImgStyle}/>
  <Card.Body>
    <Card.Title>Food and Culture</Card.Title>
    <Card.Text>
      Food plays an integral part in culture, and is often passed down from generation to generation.
    </Card.Text>
  </Card.Body>
  <Button variant="dark">Visit!</Button>
</Card></Col>
<Col><Card style={cardStyle}>
  <Card.Img variant="top" src={fad} style={cardImgStyle}/>
  <Card.Body>
    <Card.Title>Food and Habits</Card.Title>
    <Card.Text>
      As food evolves, so do our habits. It's amazing to see how our current eating habits revolve around past advancements in food.
    </Card.Text>
  </Card.Body>
  <Button variant="dark">Visit!</Button>

</Card>
</Col>
<Col></Col>

</Row>
</Slide>

          </Jumbotron>
          </>
        )
    }
}