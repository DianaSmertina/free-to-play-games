import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Container fluid className="bg-secondary">
            <Row className="justify-content-lg-center">
                <Col lg={10}>
                    footer
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;