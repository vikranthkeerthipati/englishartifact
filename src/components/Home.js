import React from 'react';
import {Row,Col,Jumbotron} from 'react-bootstrap';
import bgImage from '../img/home.jpg'
import Bounce from 'react-reveal/Bounce';
import {Keyframes,animated,Spring,config} from 'react-spring/renderprops'
import down from '../img/down.svg'
import downp from '../img/downp.png'
import '../css/down.css'
import AvaliableOptions from './AvaliableOptions'
import EngNavbar from './EngNavbar';


let jumboStyle = {
    minHeight:"100vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize:'cover',
    marginBottom:"0px"
}


// Will fade children in and out in a loop
const Script = Keyframes.Spring(async next => {
    
    while(true){
      await next({ opacity: 1, from: { opacity: 0 }})
      await next({ opacity: 0, from: { opacity: 1 }})

    }
    }
  )

export default class Home extends React.Component{


    render(){

        return(

            <>
                        <EngNavbar color="#000000" invert={true}/>

            <Jumbotron fluid style={jumboStyle}>
                <Row>
                    <Col md={5}></Col>
                    <Col md={6}>
            <Bounce left big>
              <h1>Food and our Identity</h1>
              <p>
              Food is often overlooked as a necessity and not associated with anything but itself. Food is much more powerful than this, as it can be a way to be connected with family and culture. I’ve personally experienced connections towards these two entities through food. My grandfather loved an Indian peanut chutney and would always be super jumpy at the dining table as soon as he caught a sniff of my grandmother’s chicken curry. Ever since he’s passed away, every time I see those same dishes served at the dinner table, I reminisce of the times I had with my grandfather and what an optimistic person he is.               
              </p>
              <p>In "Vinegar and Char," section II focuses heavily on food and how it can shape our daily lives as well as our memories. Throughout the website, you'll see references to this section and the connection between food and literature with the themes discussed.</p>
              <br></br>
              <h4>Scroll down to start discovering!</h4>
              </Bounce>
              </Col>

              </Row>
              <Row>
                  <Col md={5}> </Col>
                  <Col md={6}>
                    <Script config={config.slow}>{styles => <div className="down"><img src={downp} style={styles}></img></div>}</Script>

                  </Col>
              </Row>
          </Jumbotron>
          <AvaliableOptions />
          </>
        );
    }
}