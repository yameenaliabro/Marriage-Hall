import { Button, Col, Row,Image} from "antd";
import "./blog.css"
import image1 from "./Blog2/img/1.png"
import Blog2 from "./Blog2/Blog2";
function Blog(){
return(
    <div className="main-blog-container">
    <div className="main-blog-heading">
    <h1>BLOG</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
    </div>
    <div className="main-blog">
    <Row>
   <Row className="row-main">
  <Image src={image1} alt="blog-image"/>
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
    </Row>  
   </Row>
    </div>
    <Blog2/>
    </div>
)
}
export default Blog;