import { Row, Col, Image } from "react-bootstrap";

import gitLogo from "../../assets/git-logo.png"

function Footer() {
    return (
        <Col className="bg-dark flex-grow-0">
            <Row className="justify-content-lg-center align-content-center" style={{height: "60px"}}>
                <Col lg={11} className="px-2">
                    <footer >
                        <a href="https://github.com/DianaSmertina" className="d-flex text-decoration-none align-items-center text-white">
                            <Image 
                                src={gitLogo}
                                alt="git logo"
                                width={50}
                                height={50}
                            />
                            <p style={{margin: "0 10px"}}>Diana Smertina</p>
                        </a>
                    </footer>
                </Col>
            </Row>
        </Col>
    );
}

export default Footer;
