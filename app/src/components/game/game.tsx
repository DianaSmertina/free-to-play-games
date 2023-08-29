import { Col, Row, Image, ListGroup, Carousel } from "react-bootstrap";
import { IGameExtended } from "../../types/types";

import styles from "./game.module.scss";

function Game({ data }: { data: IGameExtended }) {
    return (
        <Col>
            <Row className="justify-content-center align-content-center">
                <Col lg={4} className="text-center">
                    <Image src={data.thumbnail} alt="game image" width={300} />
                    <p>System requirements:</p>
                    <ListGroup variant="flush">
                        {Object.entries(data.minimum_system_requirements).map(
                            (el) => (
                                <ListGroup.Item key={el[0]}>
                                    {el[1]}
                                </ListGroup.Item>
                            )
                        )}
                    </ListGroup>
                </Col>
                <Col lg={8} className="text-center">
                    <p className="h1">{data.title}</p>
                    <p>{data.genre}</p>
                    <p>Release date: {data.release_date}</p>
                    <p>Publisher: {data.publisher}</p>
                    <p>Developer: {data.developer}</p>
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
