import { Col, Row } from "react-bootstrap";
import { useGetAllGamesQuery } from "../../redux/freeToPlayApi";
import Loading from "../loading/loading";
import CardTemplate from "./cardTemplate";

function Cards() {
    const { data, isError, isFetching } = useGetAllGamesQuery();
    
    return (
        <Col xs={9} className="border">
            {isFetching && <Loading />}
            {isError && <p>Error occurred</p>}
            <Row className="justify-content-center">
                {!isFetching && !isError && data && data.length > 0 && data.map((el) => <CardTemplate key={el.id} data={el}/>)}
            </Row>
        </Col>
    )
}

export default Cards;