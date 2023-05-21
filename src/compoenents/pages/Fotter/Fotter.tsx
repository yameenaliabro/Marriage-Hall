import { Col,Form,Image, Input, Row} from "antd"
import fb from "./img/fb-icon.png"
import twiter from "./img/twitter-icon.png"
import linkedin from "./img/linkedin-icon.png"
import youtube  from "./img/youtub-icon.png"
import map from './img/map-icon.png'
import call from "./img/call-icon.png"
import gmail from "./img/mail-icon.png"
import "./fotter.css"
function Fotter(){
return(
    <div className="main-fotter">
    <Col className="fotter-image">
    <Image src={fb} preview={false} />
    <Image src={twiter}  preview={false} />
    <Image src={linkedin} preview={false}  />
    <Image src={youtube}  preview={false} />
    </Col>
    <Row className="news-row">
    <Row>
    <Image src={map}  preview={false}/>
    <p>Gb road 123 london Uk</p>
    </Row>
    <Row>
    <Image src={call} preview={false}/> 
    <p>Call :(+01) 123456789012</p>
    </Row>
    <Row>
    <Image src={gmail} preview={false}/>
    <p>demo@gmail.com</p>
    </Row>
    </Row>
    <Col >
    <Form className="fotter-input">
    <Form.Item>
    <Input placeholder="Enter a Name" />
    </Form.Item>
    </Form>
    </Col>
    <Col className="fotter-text">
    <p>Copyright @ 2023 All Rights</p>
    </Col>
    </div>
)
}
export default Fotter