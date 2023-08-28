import { Button, Card, ListGroup } from "react-bootstrap";
import { IGame } from "../../types/types";

interface ICardTemplate {
    data: IGame;
}

function CardTemplate({ data }: ICardTemplate) {
    return (
        <Card style={{ width: "18rem" }} className="bg-light text-center m-2">
            <Card.Img variant="top" src={data.thumbnail} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Subtitle className="text-muted">{data.genre}</Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item className="bg-light">Release date: {data.release_date}</ListGroup.Item>
                    <ListGroup.Item className="bg-light">Publisher: {data.publisher}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">More</Button>
            </Card.Body>
        </Card>
    );
}

export default CardTemplate;
