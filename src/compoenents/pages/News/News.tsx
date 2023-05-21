import { Col,Row,Image} from "antd"
import "./news.css"
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
    <Image src="http://127.0.0.1:5500/html/images/quick-icon.png" preview={false}/>
    </Col>
    <Col className="news-image">
    <Image src="http://127.0.0.1:5500/html/images/news-img.png" preview={false}/>
    </Col>
    </Row>
    </div>
)
}
export default News 