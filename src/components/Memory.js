import {useState, useEffect} from 'react'
import {Image,Button,Row,Col,Modal,Jumbotron, Container} from 'react-bootstrap'
import bgImage from '../img/famcover.jpg'
import psychImage from '../img/psych.jpg'
import famImage from '../img/fam.jpg'
import EngNavbar from './EngNavbar'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Iframe from 'react-iframe'
export default function Memory() {
    const[mShow, setMShow] = useState(false);
    const[moShow,setMoShow] = useState(false);
    const[aShow, setAShow] = useState(false);
    const[bShow, setBShow] = useState(false);


    const handleMClose = () => setMShow(false);
    const handleMShow = () => setMShow(true);
    const handleMoClose = () => setMoShow(false);
    const handleMoShow = () => setMoShow(true);
    const handleAClose = () => setAShow(false)
    const handleAShow = () => setAShow(true);
    const handleBClose = () => setBShow(false)
    const handleBShow = () => setBShow(true);


    let linkStyle = {
        color: "black",
        background:"none",
        border: "none"
    }

    let jumboStyle = {
        minHeight:"100vh",
        backgroundImage:  `url(${bgImage})`,
        backgroundSize:'cover',
        marginBottom:"0px"
    }

    let psychStyle = {
        minHeight:"100vh",
        backgroundImage:  `url(${psychImage})`,
        backgroundSize:'cover',
        marginBottom:"0px",
        // color: "rgb(122,111,123)"
        color: "black"
    }

    let famStyle = {
        minHeight:"100vh",
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
                        <Fade left>
                        <br></br>
                        <h1>Food and Memory</h1>
                        <p>Life is all about memories.</p>
                        </Fade>
                    </Col>
                    <Col md={5}>
                    </Col>
                </Row>
            </Jumbotron>
            <Jumbotron fluid style={psychStyle}>
                <Row>
                    <Col md={6}>
                        <Fade left>
                        <div style={{backgroundColor:"rgba(255,255,255,0.85)", borderRadius:"5px",marginTop:"25vh",padding:"4vh 4vh"}}>
                        <h1>Food Memories in Psychology</h1>
                        <p>While researching for information relating to food and family, I encountered experiences similar to mine and the power it can have with memories. According to assistant professor of psychology at Vassar, Hadley Bergstrom, food memories are often more sensory than other memories because of the engagement of all five senses and tend to be strong associative memories” (Thomson). This process can happen subconsciously and sometimes the memory may not even come out as words, but rather in raw emotion. Susanna Zaraysky experienced this an emigrant from Leningrad in 1980. She had emigrated to San Jose, California at age three, and never returned back to Russia until she was eighteen. When she had strawberries at Russia, she immediately recognized that the strawberries weren’t the same as they were in California and felt déjà vu. According to her mother, Zaraysky used to have many strawberries as an infant and toddler. Despite the fifteen-year difference, she was able to still identify the food and it is a connection to her time at Russia before she moved (Zaraysky). </p>
                        </div>
                        </Fade>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5}>
                    <Fade right>
                <div style={{backgroundColor:"rgba(128,119,127,0.9)",marginTop:"5vh", padding:"4vh 4vh"}}>
                    <Button class="linkButton" style={linkStyle} onClick={handleMShow}><h3 style={{color:"white"}}>Food Nostalgia in Our Lives</h3></Button>                    
                </div>
                <Modal style={{minWidth:"100vh",maxWidth:"none"}}show={mShow} onHide={handleMClose}>
        <Modal.Header closeButton>
          <Modal.Title>Food and Nostalgia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={2}></Col>
                <Col>
<iframe width="560" height="315" src="https://www.youtube.com/embed/LlAEJGxv5_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </Col>
        <Col md={2}></Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleMClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                <div style={{backgroundColor:"rgba(128,119,127,0.9)",marginTop:"5vh", padding:"4vh 4vh"}}>
                    <Button class="linkButton" style={linkStyle} onClick={handleMoShow}><h3 style={{color:"white"}}>The Effects of Food on Mood</h3></Button> 
                        <Modal style={{minWidth:"100vh",maxWidth:"none"}}show={moShow} onHide={handleMoClose}>
            <Modal.Header closeButton>
            <Modal.Title>How Food Affects Mood</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Iframe width="100%" height="188px" src="https://embed.acast.com/deliciouslyellapodcast/howourfoodaffectsourmood" scrolling="no" frameBorder="0" style="border:none;overflow:hidden;"></Iframe>
            <p></p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleMoClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
                </div>
                </Fade>

                    </Col>
                </Row>
            </Jumbotron>
            <Jumbotron fluid style={famStyle}>
                <Row>
                <Col md={5}>
                    
                    <Fade left>
                <div style={{backgroundColor:"rgba(0,0,0,0.8)",marginTop:"5vh", padding:"4vh 4vh"}}>
                    <Button class="linkButton" style={linkStyle} onClick={handleAShow}><h3 style={{color:"white"}}>The Impact of Ancestral Food Choices</h3></Button>                    
                </div>
                <Modal style={{minWidth:"100vh",maxWidth:"none"}}show={aShow} onHide={handleAClose}>
        <Modal.Header closeButton>
          <Modal.Title>How have your ancestors affected your food choices?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={2}></Col>
                <Col>
                <Iframe width="100%" height="315" src="https://www.youtube.com/embed/mC_auaI3TOE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>        </Col>
        <Col md={2}></Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                <div style={{backgroundColor:"rgba(0,0,0,0.8)",marginTop:"5vh", padding:"4vh 4vh"}}>
                    <Button class="linkButton" style={linkStyle} onClick={handleBShow}><h3 style={{color:"white"}}>Familial Food Values</h3></Button> 
                        <Modal style={{minWidth:"100vh",maxWidth:"none"}}show={bShow} onHide={handleBClose}>
            <Modal.Header closeButton>
            <Modal.Title>Familial Food Values and their Impact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Iframe style="border: solid 1px #dedede;"  src="https://app.stitcher.com/splayer/f/65860/66728554" width="100%" height="150" frameborder="0" scrolling="no"></Iframe> 
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleBClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
                </div>
                </Fade>
                   
                    </Col> 
                    <Col md={1}></Col>
                    <Col md={6}>
                        <Fade right>
                        <div style={{backgroundColor:"rgba(221,166,112,0.9)",borderRadius:"5px",marginTop:"5vh",padding:"4vh 4vh"}}>
                        <h1>Food Memories with Family</h1>
                        <p>Food can be so important to be a memory of family that it can even be considered a tradition and something to be held on to forever. This is the case in Kathryn Dillon and her husband, whose source of many childhood memories was macaroni and cheese. Macaroni and cheese is generally something found at a grocery store and a backup food, and it can be forgotten that there can go a lot behind a recipe behind a dish like that. Dillon and her husband had different recipes and wanted to keep aspects of both of their traditions. This took multiple attempts to perfect the macaroni and cheese dish that the couple would serve to their children: a fusion of their traditions and memories. 	
The remembrance of family members with food is a topic that is also explored through poetry in food literacy. In “Like Father”, Jericho Brown describes certain experiences with his father. This includes “cups of coffee [Brown] can’t stop spilling” and “eggs, scrambled soft.” Towards the end, it’s described that “father’s embrace tightens” and that he can no longer feel his heartbeat. The descriptions of the food are paired daily habits of what his father does as well (Brown 38).  Brown also only describes the morning routine it has, and there are so many memories in just that small portion of his day. It comes to show that so much of our family can be seen through our daily meals. This includes not only the actual food that is made, but the help in the kitchen, to put food on the table, the dining table interactions, and the clean up after. In “Acceptance Speech,” Lynn Powell writes “special thanks… to the salt – you know who you are – and to the knife, who revealed the ripe behind the rind” (Powell 60). She incorporates this into an acceptance speech format because of how relatable allusions to the kitchen can be. Through these food allusions, it highlights the important role that food has played, which is why she uses the metaphorical allusion to refer to the people in life that have helped her in an acceptance speech format. The remembrance of family members through food is a topic touched upon through poetry in food literacy, and highlights the multidimensionality that food possesses.
</p>
                        </div>
                        </Fade>
                    </Col>
                </Row>
            </Jumbotron>
            
            </>
        )
}