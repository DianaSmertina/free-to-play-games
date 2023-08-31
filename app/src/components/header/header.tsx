import { Image, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <Col className="bg-dark flex-grow-0 sticky-top">
            <Row className="justify-content-lg-center align-content-center" style={{height: "60px"}}>
                <Col lg={11} className="px-2">
                    <header>
                        <NavLink to="/">
                            <Image
                                src="https://www.freetogame.com/assets/images/freetogame-logo.png"
                                alt="logo"
                                width={165}
                                height={45}
                            />
                        </NavLink>
                    </header>
                </Col>
            </Row>
        </Col>
    );
}

export default Header;
