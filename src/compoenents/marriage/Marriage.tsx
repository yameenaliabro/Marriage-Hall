import { Col, Row,Image} from "antd";
import image1 from "./img/1.png"
import image2 from "./img/2.png"
import image3  from "./img/3.png"
import image4  from "./img/4.png"
import "./marriage.css"
function Marriage() {
    return (
        <div className="main-container-marriage">
            <div className="main-some">
                <Row>
                    <div className="main-image2">
                        <Col className="heading">
                        <h1>FACELITY OF OUR MARRIAGE HOUSE</h1>
                        <p>It is a long established fact that a reader will be distracted by the<br/>
                             readable content of a pag</p>
                        </Col>
                    <Row>
                    <Image src={image3} preview={false} alt="Good-decoratrion"/>
                    <Col className="column">
                    <h1>Car Parking</h1>
                    <p>it is a long established fact that a reader <br/>
                        will be distracted by the readable content of a page</p>
                    </Col>
                    </Row>
                    <Row>
                    <Image preview={false} alt="Good-decoratrion" src={image2}/>
                    <Col className="column">
                    <h1>Good Decoration</h1>
                    <p>It is a long established fact that a reader will be<br/>
                         distracted by the readable content of a
                        page</p>
                    </Col>
                    </Row>
                    <Row>
                    <Image preview={false} alt="Good-decoratrion" src={image4}/>
                    <Col className="column">
                    <h1>Pure Water</h1>
                    <p>It is a long established fact that a reader will be<br/>
                         distracted by the readable content of a page</p>
                    </Col>
                    </Row>
                    </div>
                    <Col className="main-image">
                    <Image src={image1} alt="Marriage image" preview={false}/>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
export default Marriage;