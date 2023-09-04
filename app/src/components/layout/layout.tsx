import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Header from "../header/header";
import Footer from "../footer/footer";

function Layout() {
    return (
        <Container fluid className="p-0 vh-100">
            <Row className="flex-column" style={{minHeight:"100vh"}}>
                <Header />
                <Col className="align-self-center">
                    <Row className="justify-content-lg-center">
                        <Col lg={11} className="px-xs-4">
                            <main>
                                <Outlet />
                            </main>
                        </Col>
                    </Row>
                </Col>
                <Footer />
            </Row>
        </Container>
    );
}

export default Layout;
