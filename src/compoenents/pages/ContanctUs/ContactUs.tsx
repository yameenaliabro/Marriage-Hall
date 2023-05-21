import { Button, Col, Form, Input, Row } from "antd"
import "./contactus.css"
function ContactUs(){
return(
    <div className="main-contact-us">
    <div className="main-heading">
    <h1>Requeste A call Back</h1>
    </div>
    <Col className="main-contact">
    <Row className="contact-form">
     <Form>
        <Form.Item>
    <Input type="text" placeholder="Enter Name"/>
    </Form.Item>
    <Form.Item>
    <Input type="text" placeholder="Enter Email"/>
    </Form.Item>
    </Form>
    </Row>
    <Row className="contact-form">
    <Form>
    <Form.Item>
    <Input type="number" placeholder="Phone Number"/>
    </Form.Item>
    <Form.Item>
    <Input type="text" placeholder="Message"/>
    </Form.Item>
    </Form>
    </Row>
    </Col>
    <div className="send-button">
    <Button type="primary">SEND </Button>
    </div>
    </div>
)
}
export default ContactUs