import { Button, Col, Row,Image} from "antd";
import image2 from "./img/2.png"
import "./blog2.css"
function Blog2(){
return(
    <div>
    <div className="main-blog">
    <Row>
   <Row className="row-main">
    <Col className="blog-main-heading">
    <h2>Liya Mainial Catt</h2>
    <Col>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit,sed do<br/>
     nulla. Necessitatibus ratione earum itaque provident voluptatem <br/>
     aliquid quo facilis reiciendis enim dolore officia quasi tempore,<br/>
      excepturi possimus iste fugiat perspiciatis.</p>
      </Col>
    <Button type="link" className="like">Like</Button>
    <Button type="link" className="comment">Comment</Button>
    </Col>
  <Image src={image2} alt="blog-image"/>
    </Row>  
   </Row>
    </div>
    </div>
)
}
export default Blog2;