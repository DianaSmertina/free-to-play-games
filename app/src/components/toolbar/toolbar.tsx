import { Col, InputGroup, Row } from "react-bootstrap";
import { useGetAllGamesQuery } from "../../redux/freeToPlayApi";

function Toolbar() {
    const { data } = useGetAllGamesQuery();
    const genres = new Set(data?.map((el) => el.genre));
    const platforms = new Set(data?.map((el) => el.platform));

    const addFilters = (options: Set<string>) => {
        return Array.from(options).map((el) => (
            <InputGroup key={el}>
                <InputGroup.Checkbox value={el} />
                <InputGroup.Text style={{ width: "70%" }}>{el}</InputGroup.Text>
            </InputGroup>
        ));
    };

    return (
        <Col xs={3} className="border">
            {data && (
                <Row className="flex-column g-2 justify-content-center">
                    <Col>
                        <div className="h2">Genres</div>
                        {addFilters(genres)}
                    </Col>
                    <Col>
                        <div className="h2">Platforms</div>
                        {addFilters(platforms)}
                    </Col>
                </Row>
            )}
        </Col>
    );
}

export default Toolbar;
