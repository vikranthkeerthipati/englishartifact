import {useState} from 'react'
import {Image,Modal,Button,Row,Col,Jumbotron} from 'react-bootstrap'
import societyImage from '../img/society.jpg'
import fastFoodImage from '../img/fastfood.jpg'
import inventionImage from '../img/invention.jpg'
import mapleineImage from '../img/mapleine.png'
import Fade from 'react-reveal/Fade';
import EngNavbar from './EngNavbar'
import '../css/linkCards.css'
import Iframe from 'react-iframe'

let linkStyle = {
    color: "black",
    background:"none",
    border: "none"
}
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
export default function Society(){
        const[mShow, setMShow] = useState(false);
        const[moShow,setMoShow] = useState(false);
        const[aShow, setAShow] = useState(false);

        const handleMClose = () => setMShow(false);
        const handleMShow = () => setMShow(true);
        const handleMoClose = () => setMoShow(false);
        const handleMoShow = () => setMoShow(true);
        const handleAClose = () => setAShow(false)
        const handleAShow = () => setAShow(true);

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
                <Col md ={5}>
                <Fade left>
                <div style={{backgroundColor:"rgba(252,210,108,0.9)",marginTop:"5vh", padding:"4vh 4vh"}}>
                    <Button style={linkStyle} onClick={handleMShow}><h3>Witness the rise and fall of Mapleine!</h3></Button>                    
                </div>
                <Modal style={{minWidth:"100vh",maxWidth:"none"}}show={mShow} onHide={handleMClose}>
        <Modal.Header closeButton>
          <Modal.Title>Maplepine Nut Cake</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image style={{maxHeight:"50vh"}} src={mapleineImage} fluid></Image>
        <p>The above is an image ca.1930-1960 and is approximately when the Great Depression hit, and American society faced heavy struggles. Something that is different than current recipes that are offered by food magazines is the inclusion of Mapleine as an ingredient. I had never heard of it before coming across this recipe and decided to do some research on it. </p>
        <p>Mapleine was the Crescent Company’s main product in the twentieth century, as it was an imitation maple flavoring, and acted as a substitute for maple syrup (Warren). This was especially crucial during the Great Depression, for households needed to save every penny they could and Mapleine became the perfect substitute to replicate the functionality and taste of maple syrup. In order to further push the product to market, the Crescent Company released recipes utilizing Mapleine, and even provided recommendations for the amount of Mapleine to use in a customer’s own recipe for the dish. The above image is a recipe provided by the Crescent Company itself, and an example of the various recipes provided.</p>
        <p>After the recovery from the Great Depression and the introduction of maple extract into market, Mapleine saw less and less space on shelves. Eventually, the Crescent Company was sold to McCormick & Company Inc in 1990, yet still sells Mapleine under the Crescent. The primary reason is not only because of nostalgia, but because people still use it in traditional recipes. According to Amazon listings, Mapleine is sold for the lowest price of $2.24/Fl oz (Amazon “Crescent…”) whereas maple extract is sold for the lowest price of $1.15/Fl oz (Amazon “Maple…”). Despite maple extract being sold for a lower price, Mapleine is still able to be sold and manufactured because of its usage in traditional recipes. Despite not being a mainstream product, it still holds a special place in people’s hearts who have had a recipe passed down and wish to replicate it</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleMClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                <div style={{backgroundColor:"rgba(252,210,108,0.9)",marginTop:"5vh", padding:"4vh 4vh"}}>
                    <Button style={linkStyle} onClick={handleMoShow}><h3>Experience mochi in the US!</h3></Button> 
                        <Modal style={{minWidth:"100vh",maxWidth:"none"}}show={moShow} onHide={handleMoClose}>
            <Modal.Header closeButton>
            <Modal.Title>How Mochi Made Its Way to the US</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Iframe url="https://player.simplecast.com/7f5850b5-7562-45d4-9754-686813440e69?dark=true"
                    height="200px"
                    width="100%"
                    frameBorder="no"
                    scrolling="no"
            ></Iframe>
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
                <div style={{backgroundColor:"rgba(252,210,108,0.9)",marginTop:"5vh", padding:"4vh 4vh"}}>
                    <Button style={linkStyle} onClick={handleAShow}><h3>The Evolution of Southern Food</h3></Button> 
                        <Modal style={{minWidth:"100vh",maxWidth:"none"}}show={aShow} onHide={handleAClose}>
            <Modal.Header closeButton>
            <Modal.Title>Southern Food and its Roots</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Iframe frameBorder="0" height="482" scrolling="no" url="https://playlist.megaphone.fm/?e=ADL2191550896"
            width="100%"></Iframe>      
            <p></p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleAClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
                </div>
                </Col>
                <Col md={1}></Col>
                <Col md={6} style={{color:"black"}}>
                <Fade right>
                    <div style={{backgroundColor:"rgba(248,218,198,0.9)",marginTop:"25vh",padding:"4vh 4vh"}}>
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