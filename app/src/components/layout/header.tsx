import { Image, Row, Col } from "react-bootstrap";

function Header() {
    return (
        <Col className="bg-dark flex-grow-0">
            <Row className="justify-content-lg-center">
                <Col lg={10}>
                    <header>
                        <Image
                            src="https://www.freetogame.com/assets/images/freetogame-logo.png"
                            alt="logo"
                            width={165}
                            height={45}
                        />
                    </header>
                </Col>
            </Row>
        </Col>
    );
}

export default Header;
