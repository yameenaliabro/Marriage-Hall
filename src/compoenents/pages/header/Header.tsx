import { Row, Col, Menu, Image } from "antd"
import Container from "../../common/container/Container"
import "./header.css"
import { useNavigate } from "react-router"
function Header() {
    let navigate = useNavigate()
    const loggodinmenu = [
        { label: "Home", key: "" },
        { label: "About", key: "about" },
        { label: "Marriage", key: "marriage" },
        { label: "Blog", key: "blog" },
        { label: "News", key: "news" },
        { label: "Contact Us", key: "contactus" },
    ]
    const menuClickHandler = ({key} : {key : string}) => {
       return navigate(`/${key}`);
      };
    return (
        <div>
            <header style={{
                backgroundColor:"#b538a4",
            }}>
                <Container>
                    <Row justify="center" align="middle">
                        <Col xs={12}
                            lg={6}
                            style={{
                                marginTop: 10,
                                color:"#fff",
                                fontSize:16,
                            }}>
                     <h1>Denom</h1>
                        </Col>
                        <Col xs={12}
                            lg={16}
                            style={{
                                textAlign: "center",
                            }}>
                            <Menu
                                mode="horizontal"
                                items={loggodinmenu}
                                onClick={menuClickHandler}
                                style={{
                                    backgroundColor: 'transparent',
                                    justifyContent: "center",
                                    color:"#fff",
                                    fontSize:16
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}
export default Header