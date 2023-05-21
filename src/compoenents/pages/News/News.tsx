import { Col,Row,Image} from "antd"
import "./news.css"
import image1 from "./img/1.png"
import image2 from "./img/2.png"
function News(){
return(
    <div className="container-news">
    <Col className="contact-main-heading">
    <h1>What says Our Grooms</h1>
    </Col>
    <Row>
    <Col className="contact-main">
    <h2>LINA AND JORV</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page <br/>
        when looking at its layout. The point of using Lorem Ipsum is thaIt is a long established fact that <br/>
        a reader will be distracted by the readable content of a page when looking at its layout. The<br/> 
        point of using Lorem Ipsum is tha</p>
    <Image src={image2} preview={false}/>
    </Col>
    <Col className="news-image">
    <Image src={image1} preview={false}/>
    </Col>
    </Row>
    </div>
)
}
export default News 