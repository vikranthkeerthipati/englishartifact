import React from 'react';
import {Row,Col,Jumbotron} from 'react-bootstrap'
import EngNavbar from './EngNavbar'
import cultureImage from '../img/culture.jpg'
import immigrantImage from '../img/immigrant.jpg'
import bridgeImage from '../img/bridge.jpg'
import Fade from 'react-reveal/Fade';

let jumboStyle = {
    minHeight:"100vh",
    backgroundImage:  `url(${cultureImage})`,
    backgroundSize:'cover',
    marginBottom:"0px",
    color: "white"
}

let immigrantStyle = {
    minHeight:"100vh",
    backgroundImage:  `url(${immigrantImage})`,
    backgroundSize:'cover',
    marginBottom:"0px",
    color: "black"
}

let bridgeStyle = {
    minHeight:"100vh",
    backgroundImage:  `url(${bridgeImage})`,
    backgroundSize:'cover',
    marginBottom:"0px",
    color: "white"
 
}


export default class Culture extends React.Component{

    render(){
        return(
            <>
            <EngNavbar color="#FFFFFF" invert={false}/>
            <Jumbotron fluid style={jumboStyle}>
                <Row>
                    <Col md={1}></Col>
                    <Col md={6}>
                        
                    </Col>
                    <Col md={5}>
                        <Fade right>
                        <h1>Food and Culture</h1>
                        <p>They go really well together.</p>
                        </Fade>
                    </Col>
                </Row>
            </Jumbotron>
            <Jumbotron fluid style={immigrantStyle}>
                <Row>
                    <Col md = {1}></Col>
                    <Col md={5}>
                    <Fade left>
                        <div style={{marginTop:"15vh"}}> 
                        <h1>Food with Immigrants</h1>
                        <p>While researching information relating to food and culture, there were multiple cases of immigrants ensuring that future generations are in touch with their culture, and food was one of the best ways to do this. Personally, I have found that being a first-generation Indian American, one of the ways my parents kept me in touch with my culture was through the food. It’s gotten to the point that after being away from home at a college campus, I miss my culture’s food and it shows that growing up with my culture’s food has made it so I’m inseparable from it. The attempt of other immigrants can be seen through multiple sources. A pin from a Padlet post from a fellow classmate, Keshav Jagannath, describes that the heavy use imagery in a poem describing the Filipino food being made on his father’s stove, and the color and vibrancy associated with that imagery (Jagannath). This describes that the children of immigrants notice the small details, including the preparation of cultural foods and leaves them feeling more connected to their culture.</p>
                        <p>	Additionally, a social experiment can highlight the connection that food and culture have. In “Changing Families, Changing Food: How Do Children’s Diets Change Over Time,” it describes an experiment of children’s diets and touches upon a six-year old called Joshua who comes from a Ghanaian household (O’Connell and Brannen). His mother had separated from his father and was the only source of income. Despite this, she “made sure the children ate well at home” and “stuck to the core foods and dishes of a Ghanaian cuisine.” Despite being a single mother with four children of varying ages in what is specified a “low-income household,” Joshua’s mother still made sure that her children were eating their culture’s food. It is further described that “the mother’s cooking practices involved cooking from scratch” and “does not buy convenience foods.” The mother constantly follows the concept that her children should receive a healthy diet and that providing foods from her culture is the perfect way, as it utilizes fresh produce. It follows the “Ghanaian methods of child rearing,” and essentially follows what her culture taught her. This method of raising a child can be questioned as being restrictive, but ultimately, she ensures that her children don’t forget her roots and wants to transfer her pride of being Ghanaian. </p>
                        </div>
                        </Fade>
                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
            </Jumbotron>
            <Jumbotron fluid style={bridgeStyle}>
                <Row>
                    <Col md = {1}></Col>
                    <Col md={5}>
                    </Col>
                    <Col md={6}>
                    <Fade right>
                        <div style={{marginTop:"15vh",backgroundColor: "rgba(22,32,23,0.8)",padding:"4vh 4vh"}}> 
                        <h1>The Bridge Between Food and Culture</h1>
                        <p>The concept that food encourages a stronger connection to culture is a topic that is explored through poetry in food literacy. In “Canning Memories,” Frank X Walker includes “No new moons or first frosts, just the horn on an old flatbed,” and that in previous harvests “grandmothers…still clicked their tongues” (Walker). These highlight on what was done in previous harvests according to Native American traditions. The harvest that occurs in the present might be different than what their ancestors did, but the connection through the harvest still exists, honoring ancestors who went through a more tedious process. Traditionally, harvests would correlate with festivals, which are still celebrated today. That gatherings exists due to past harvests and is a reminder of the roots of the people. It also serves to honor their ancestors, and through the food, future generations are still aware of what occurred in the past. </p>
                        <p>Another poem which focuses on the close connection between food and culture is “Mango, Number 61,” in which it is described that “pescado grand was number 14, which pescado chico, was 12…pawn shops on Flager Street handed out complimentary wallet-size cards printed with the entire charada” (Blanco). The poem utilizes Spanish to not only talk about the names of the dishes, but even vocabulary within the poem. “Charada” is English means newspaper puzzle, meaning that the cards were printed as clues to the puzzle. An explanation of this in English would have been a lot simpler, as we can assume that the primary audience are English speakers based on the fact that the majority of the poem is written in English. This incorporation of Spanish vocabulary within the poem while also using the Spanish vocabulary to describe the dish names of dishes that would be eaten as a child. The poem places heavy emphasis on mangos, as it is a prominent tropical fruit in Cuba, where the narrator’s origins are. The listing of various ethnic foods and also associating the foods with family members shows the strong tie to the foods. The narrator represents family members through foods, highlighting the important role it has in her life.</p>
                        </div>
                        </Fade>
                    </Col>
                </Row>
            </Jumbotron>
            
            </>
        )
    }


}