import { Button, Container, Row, Col, Image } from "react-bootstrap";
import '../App.css';
import styles from './hero.module.css'

import shoesimage from '../assets/images/shoes-1.avif'
import amazonicon from '../assets/images/social.png'
import flipkarticon from '../assets/images/Flipkart-Logo.png'

function HeroSection(){
    return(
        <>
        <Container>
            <Row>
                <Col>

                <h1 className= {styles.heading}>Your Feet Deserve The Best</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos maxime dignissimos quo voluptate veniam!</p>
                <div className="pb-3 pt-2">
                <Button variant="danger"  className="me-3">Shop Now</Button>
                <Button variant="outline-secondary">Category</Button>
                </div>
                
                <div>
                    <p>Also Available On</p>
                    <div>
                    <Image src={amazonicon} className="icon" fluid />
                    <Image src={flipkarticon} className="flipicon" fluid />

                    </div>
                    </div>

                </Col>
                <Col>
                <Image src={shoesimage} fluid  className="shoeimg"/>
                </Col>

            </Row>
        </Container>
       
        </>
    )
}
export default HeroSection;

