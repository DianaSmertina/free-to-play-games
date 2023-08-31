import { Col, Row, Image, ListGroup, Carousel } from "react-bootstrap";
import { IGameExtended } from "../../types/types";

import styles from "./game.module.scss";
import { formatDate } from "../../utilities/utilities";
import BackButton from "../backButton.tsx/backButton";

function Game({ data }: { data: IGameExtended }) {
    return (
        <Col>
            <Row className="justify-content-center align-content-center">
                <Col lg={4} className="text-center flex-column">
                    <Row className="flex-column">
                        <Col><Image src={data.thumbnail} alt="game image" width={300} className="mb-2" /></Col>
                        <Col><BackButton /></Col>
                    </Row>
                </Col>
                <Col lg={8}>
                    <p className="h1 text-center">{data.title}</p>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{data.genre}</ListGroup.Item>
                        <ListGroup.Item>
                            Release date: {formatDate(data.release_date)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Publisher: {data.publisher}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Developer: {data.developer}
                        </ListGroup.Item>
                    </ListGroup>
                    <p className="h3 text-center">System requirements:</p>
                    <ListGroup variant="flush">
                        {Object.entries(data.minimum_system_requirements).map(
                            (el) => (
                                <ListGroup.Item key={el[0]}>
                                    {el[1]}
                                </ListGroup.Item>
                            )
                        )}
                    </ListGroup>
                    <p className="h3 text-center">Screenshots</p>
                    <Carousel className={styles.carousel} data-bs-theme="dark">
                        {data.screenshots.map((el) => (
                            <Carousel.Item key={el.id}>
                                <Image
                                    src={el.image}
                                    alt={`${data.title} game screenshot`}
                                    className={styles.carousel_image}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Col>
    );
}

export default Game;
