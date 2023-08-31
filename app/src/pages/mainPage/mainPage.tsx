import { Row } from "react-bootstrap";

import Toolbar from "../../components/toolbar/Toolbar";
import Cards from "../../components/cards/Cards";

function MainPage() { 
    return (
        <Row>
            <Toolbar />
            <Cards />
        </Row>
    );
}

export default MainPage;
