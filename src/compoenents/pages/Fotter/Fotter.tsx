import { Col,Form,Image, Input, Row} from "antd"
import "./fotter.css"
function Fotter(){
return(
    <div className="main-fotter">
    <Col className="fotter-image">
    <Image src="http://127.0.0.1:5500/html/images/fb-icon.png" preview={false} />
    <Image src="http://127.0.0.1:5500/html/images/twitter-icon.png"  preview={false} />
    <Image src="http://127.0.0.1:5500/html/images/fb-icon.png" preview={false}  />
    <Image src="http://127.0.0.1:5500/html/images/youtub-icon.png"  preview={false} />
    </Col>
    <Row className="news-row">
    <Row>
    <Image src="http://127.0.0.1:5500/html/images/map-icon.png"  preview={false}/>
    <p>Gb road 123 london Uk</p>
    </Row>
    <Row>
    <Image src="http://127.0.0.1:5500/html/images/call-icon.png" preview={false}/> 
    <p>Call :(+01) 123456789012</p>
    </Row>
    <Row>
    <Image src="http://127.0.0.1:5500/html/images/mail-icon.png" preview={false}/>
    <p>demo@gmail.com</p>
    </Row>
    </Row>
    <Col >
    <Form className="fotter-input">
    <Form.Item>
    <Input placeholder="Enter a Email Address" />
    </Form.Item>
    </Form>
    </Col>
    <hr/>
    <Col className="fotter-text">
    <p>Copyright @ 2023 All Rights</p>
    </Col>
    </div>
)
}
export default Fotter