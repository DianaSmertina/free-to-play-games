import { Container, Image, Row, Col } from "react-bootstrap";

function Header() {
    return (
        <Container fluid className="bg-dark">
            <Row className="justify-content-lg-center">
                <Col lg={10}>
                    <header>
                        <Image
                            src="https://www.freetogame.com/assets/images/freetogame-logo.png"
                            alt="logo"
                            width={165}
                            height={45}
                        />
                        header
                    </header>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
