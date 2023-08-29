import { Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Col className="bg-secondary flex-grow-0">
            <Row className="justify-content-lg-center">
                <Col lg={10}>
                    <footer>footer</footer>
                </Col>
            </Row>
        </Col>
    );
}

export default Footer;
