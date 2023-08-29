import { Card, ListGroup } from "react-bootstrap";
import { IGame } from "../../types/types";
import { Link } from "react-router-dom";

import styles from "./cardTemplate.module.scss";

function CardTemplate({ data }: {data: IGame}) {
    return (
        <Card style={{ width: "18rem" }} className="bg-light text-center m-2">
            <Link to={`/game/${data.id}`} className={styles.link}>
                <Card.Img variant="top" src={data.thumbnail} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Subtitle className="text-muted">
                        {data.genre}
                    </Card.Subtitle>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="bg-light">
                            Release date: {data.release_date}
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-light">
                            Publisher: {data.publisher}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Link>
        </Card>
    );
}

export default CardTemplate;
