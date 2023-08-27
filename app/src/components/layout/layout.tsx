import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Container>header</Container>
            <Container>
                <Outlet />
            </Container>
            <Container>footer</Container>
        </>
    );
}

export default Layout;
