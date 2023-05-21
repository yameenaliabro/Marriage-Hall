import { Col, Row, Image, Button } from "antd";
import imag1 from "./img/1.png"
import imag2 from "./img/2.png"
import imag3 from "./img/3.png"
import "./about.css"
function About() {
    return (
        <div className="main-container">
            <Row>
               
                <Col>
                    <div className="second-main">
                        <Image src={imag2} preview={false} className="first-img" />
                    </div>
                    <div className="main">
                        <Image src={imag1} preview={false} className="first-img" />
                        <Image src={imag3} preview={false} className="third-img" />
                    </div>
                </Col>
                <Col>
                <div className="main-first">
                    <h3>ABOUT</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable<br />
                        content of a page when looking at its layout. The point of using Lorem Ipsum <br />
                        is tha</p> 
                    <Button type="primary">Read More</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default About;