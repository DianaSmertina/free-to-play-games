import { Row } from "react-bootstrap";

import Toolbar from "../../components/toolbar/toolbar";
import Cards from "../../components/cards/cards";

function MainPage() {
    return (
        <Row>
            <Toolbar />
            <Cards />
        </Row>
    );
}

export default MainPage;
