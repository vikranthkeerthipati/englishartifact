import React from 'react'
import {Row,Col,Jumbotron} from 'react-bootstrap'
import societyImage from '../img/society.jpg'
import fastFoodImage from '../img/fastfood.jpg'
import inventionImage from '../img/invention.jpg'
import Fade from 'react-reveal/Fade';
import EngNavbar from './EngNavbar'

let jumboStyle = {
    minHeight:"100vh",
    backgroundImage:  `url(${societyImage})`,
    backgroundSize:'cover',
    marginBottom:"0px"
}

let inventionStyle = {
    minHeight:"100vh",
    backgroundImage:  `url(${inventionImage})`,
    backgroundSize:'cover',
    marginBottom:"0px"
}

let fastFoodStyle = {
    minHeight:"100vh",
    backgroundImage:  `url(${fastFoodImage})`,
    backgroundSize:'cover',
    marginBottom:"0px"
}
export default class Society extends React.Component{


    render(){
        return(
            <>
            <EngNavbar color="#FFFFFF" invert={false}/>
            <Jumbotron fluid style={jumboStyle}>
                <Row>
                    <Col md={1}></Col>
                    <Col style={{color:"white"}} md={5}>
                        <Fade left>
                        <br></br>
                        <h1>Food and Society</h1>
                        <p>Life is all about memories.</p>
                        </Fade>
                    </Col>
                    <Col md={5}>
                    </Col>
                </Row>
            </Jumbotron>
            <Jumbotron fluid style={inventionStyle}>
                <Row>
                <Col md ={1}></Col>
                <Col md={5}></Col>
                <Col md={6} style={{color:"black"}}>
                <Fade right>
                    <div style={{backgroundColor:"rgba(248,218,198,0.9)",marginTop:"20vh",padding:"4vh 4vh"}}>
                        <h1>Culinary Inventions</h1>
                        <p>Food can transform a society thought the introduction of new foods from various cuisines. Especially since WWII, the world has witnessed heavy globalization, and food has been involved with this process. This explains the rise of fusion cuisines in the US and across the world, leading to a rise of culinary inventions. It would have been absurd hearing about Tandoori Chicken Tacos or Sriracha Sauce. These foods have made their way in the culinary business because of society’s willingness to try out new foods and flavors that are mixed together. Many foods in the US that are considered “American classics” have origins located elsewhere in the world.</p>
                    </div>
                    </Fade>
                </Col>
                </Row>
            </Jumbotron>
            <Jumbotron fluid style={fastFoodStyle}>
                <Row>
                <Col md={6} style={{color:"black"}}>
                <Fade left>
                    <div style={{backgroundColor:"rgba(229,171,82,0.8)",marginTop:"20vh",padding:"4vh 4vh"}}>
                        <h1>Fast Food</h1>
                        <p>Fast food and junk food have drastically changed the how we eat, with this unhealthy form of food sometimes being more accessible in areas dealing with food apartheid than fresh produce. In an interview with The Guardian, food activist Karen Washington mentions that “in [her] neighborhood, there is a fast-food restaurant on every block, from Wendy’s to Kentucky Fried Chicken to Popeye’s to Little Caesar’s Pizza” (Brones). Washington is mostly present in low-income areas that face the problem of food apartheid, and also notices that resources are put into the treatment of the health problems faced by those in low income areas, instead of preventing those problems. Our current society is making fresh food inaccessible, whereas in the past people were able to have a plot of land, even if it took everything, and grow crops. As our society has industrialized, this opportunity has dwindled down and we rely more on mass agriculture than ever before, leaving those who can’t afford products out of mass agriculture stuck with food apartheid.</p>
                        <p>The problem of fast food and junk food negatively impacting society not only affects the US but is also affecting other countries as well. In a study conducted in Thailand, it was seen that “rapid changes in diet, with increasing consumption of oil, animal. Fats and protein, and decreasing consumption of vegetables and fruit, are factors influencing Thailand’s obesity problems” (Seubsman). Adding on to that, “Thailand’s expenditure on [Western-style fast-food] increased by 40% in the period 1999-2000.” These statistics show the impact that fast food chains such as McDonald’s can have, and not only is the cause of increasing health problems, but also a loss of culture in certain countries.</p>
                    </div>
                    </Fade>
                </Col>
                <Col md ={1}></Col>
                <Col md={5}></Col>

                </Row>
            </Jumbotron>
            </>

        )
    }
}