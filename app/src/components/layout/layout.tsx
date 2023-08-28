import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Layout() {
    return (
        <>
            <Header />
            <Container fluid>
                <Row className="justify-content-lg-center">
                    <Col lg={10}>
                        <main>
                            <Outlet />
                        </main>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Layout;
