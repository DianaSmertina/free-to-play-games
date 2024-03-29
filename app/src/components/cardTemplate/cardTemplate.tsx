import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IGame } from "../../types/types";
import { formatDate } from "../../utilities/utilities";

import styles from "./cardTemplate.module.scss";

function CardTemplate({ data }: { data: IGame }) {
    return (
        <Card className={`${styles.card} bg-light text-center m-2`}>
            <Link to={`/game/${data.id}`} className="text-decoration-none">
                <Card.Img variant="top" src={data.thumbnail} />
                <Card.Body>
                    <Card.Title className="fs-5 fs-sm-6">
                        {data.title}
                    </Card.Title>
                    <Card.Subtitle className="text-muted">
                        {data.genre}
                    </Card.Subtitle>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="bg-light">
                            <span className="d-none d-sm-inline">
                                Release date:{" "}
                            </span>
                            {formatDate(data.release_date)}
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-light">
                            <span className="d-none d-sm-inline">
                                Publisher:{" "}
                            </span>
                            {data.publisher}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Link>
        </Card>
    );
}

export default CardTemplate;
