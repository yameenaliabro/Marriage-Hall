import "./banner.css";
import { Button, Carousel, Col, Row, } from "antd";
import Container from "../../../common/container/Container";
import { useNavigate } from "react-router";

const Banner = () => {
    let navigate = useNavigate()
    return (
        <section>
            <Carousel autoplay >
                <div className="banner banner-slide-1">
                    <Container>
                        <Row>
                            <Col span={24} className="content">
                                <h2 className="food-title">MARRIAGE HOUSE</h2>
                                <p className="food-detail">
                                    it is a long  established fact  that a reader will be distracted by the
                                    <br />  read abel of page
                                </p>
                            </Col>
                            <Col className="col-button">
                                <Button type="default" size="large" className="contact-us" onClick={() => navigate("/contactus")}>
                                    CONTACT US
                                </Button>
                                <Button type="primary" size="large" >
                                    Read More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="banner banner-slide-2">
                    <Container>
                        <Row>
                            <Col span={24} className="content">
                                <h2 className="food-title">MARRIAGE HOUSE</h2>
                                <p className="food-detail">
                                    it is a long  established fact  that a reader will be distracted by the
                                    <br />  read abel of page
                                </p>
                            </Col>
                            <Col className="col-button">
                                <Button type="default" size="large" className="contact-us">
                                    CONTACT US
                                </Button>
                                <Button type="primary" size="large">
                                    Read More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="banner banner-slide-3">
                    <Container>
                        <Row>
                            <Col span={24} className="content">
                                <h2 className="food-title">MARRIAGE HOUSE</h2>
                                <p className="food-detail">
                                    it is a long  established fact  that a reader will be distracted by the
                                    <br />  read abel of page
                                </p>
                            </Col>
                            <Col className="col-button">
                                <Button type="default" size="large" className="contact-us">
                                    CONTACT US
                                </Button>
                                <Button type="primary" size="large">
                                    Read More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;