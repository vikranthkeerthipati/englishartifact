import {Row,Col,Modal,Jumbotron, Container} from 'react-bootstrap'
import bgImage from '../img/famcover.jpg'
import psychImage from '../img/psych.jpg'
import famImage from '../img/fam.jpg'
import EngNavbar from './EngNavbar'
import ResourceLinks from './ResourceLinks'
import Bounce from 'react-reveal/Bounce';

export default function Memory() {
    let jumboStyle = {
        height:"100vh",
        backgroundImage:  `url(${bgImage})`,
        backgroundSize:'cover',
        marginBottom:"0px"
    }

    let psychStyle = {
        height:"100vh",
        backgroundImage:  `url(${psychImage})`,
        backgroundSize:'cover',
        marginBottom:"0px",
        // color: "rgb(122,111,123)"
        color: "black"
    }

    let famStyle = {
        height:"100vh",
        backgroundImage:  `url(${famImage})`,
        backgroundSize:'cover',
        marginBottom:"0px",
        color:"black"
    }


        return(
            <>
            <EngNavbar color="#FFFFFF" invert={false}/>
            <Jumbotron fluid style={jumboStyle}>
                <Row>
                    <Col md={1}></Col>
                    <Col style={{color:"white"}} md={5}>
                        <br></br>
                        <h1>Food and Memory</h1>
                        <p>Life is all about memories.</p>
                    </Col>
                    <Col md={5}>
                    </Col>
                </Row>
            </Jumbotron>
            <Jumbotron fluid style={psychStyle}>
                <Row>
                    <Col md={6}>
                        <Bounce left>
                        <Container style={{backgroundColor:"rgba(255,255,255,0.85)", borderRadius:"5px",marginTop:"25vh",padding:"4vh 4vh"}}>
                        <h1>Food Memories in Psychology</h1>
                        <p>While researching for information relating to food and family, I encountered experiences similar to mine and the power it can have with memories. According to assistant professor of psychology at Vassar, Hadley Bergstrom, food memories are often more sensory than other memories because of the engagement of all five senses and tend to be strong associative memories” (Thomson). This process can happen subconsciously and sometimes the memory may not even come out as words, but rather in raw emotion. Susanna Zaraysky experienced this an emigrant from Leningrad in 1980. She had emigrated to San Jose, California at age three, and never returned back to Russia until she was eighteen. When she had strawberries at Russia, she immediately recognized that the strawberries weren’t the same as they were in California and felt déjà vu. According to her mother, Zaraysky used to have many strawberries as an infant and toddler. Despite the fifteen-year difference, she was able to still identify the food and it is a connection to her time at Russia before she moved (Zaraysky). </p>
                        </Container>
                        </Bounce>
                    </Col>
                    <Col md={5}>
                    </Col>
                </Row>
            </Jumbotron>
            <Jumbotron fluid style={famStyle}>
                <Row>
                    <Col md={1}></Col>
                    <Col md={5}></Col>
                    <Col md={6}>
                        <Bounce right>
                        <Container style={{backgroundColor:"rgba(221,166,112,0.9)",borderRadius:"5px",marginTop:"20vh",padding:"4vh 4vh"}}>
                        <h1>Food Memories with Family</h1>
                        <p>Food can be so important to be a memory of family that it can even be considered a tradition and something to be held on to forever. This is the case in Kathryn Dillon and her husband, whose source of many childhood memories was macaroni and cheese. Macaroni and cheese is generally something found at a grocery store and a backup food, and it can be forgotten that there can go a lot behind a recipe behind a dish like that. Dillon and her husband had different recipes and wanted to keep aspects of both of their traditions. This took multiple attempts to perfect the macaroni and cheese dish that the couple would serve to their children: a fusion of their traditions and memories. 	
The remembrance of family members with food is a topic that is also explored through poetry in food literacy. In “Like Father”, Jericho Brown describes certain experiences with his father. This includes “cups of coffee [Brown] can’t stop spilling” and “eggs, scrambled soft.” Towards the end, it’s described that “father’s embrace tightens” and that he can no longer feel his heartbeat. The descriptions of the food are paired daily habits of what his father does as well (Brown 38).  Brown also only describes the morning routine it has, and there are so many memories in just that small portion of his day. It comes to show that so much of our family can be seen through our daily meals. This includes not only the actual food that is made, but the help in the kitchen, to put food on the table, the dining table interactions, and the clean up after. In “Acceptance Speech,” Lynn Powell writes “special thanks… to the salt – you know who you are – and to the knife, who revealed the ripe behind the rind” (Powell 60). She incorporates this into an acceptance speech format because of how relatable allusions to the kitchen can be. Through these food allusions, it highlights the important role that food has played, which is why she uses the metaphorical allusion to refer to the people in life that have helped her in an acceptance speech format. The remembrance of family members through food is a topic touched upon through poetry in food literacy, and highlights the multidimensionality that food possesses.
</p>
                        </Container>
                        </Bounce>
                    </Col>
                </Row>
            </Jumbotron>
            
            </>
        )
}