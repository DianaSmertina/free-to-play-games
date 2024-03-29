import { Col, Row, Image, ListGroup, Carousel } from "react-bootstrap";

import { IGameExtended } from "../../types/types";
import { formatDate } from "../../utilities/utilities";
import BackButton from "../backButton.tsx/backButton";

import styles from "./game.module.scss";

function Game({ data }: { data: IGameExtended }) {
    return (
        <Col>
            <Row className="justify-content-center align-content-center">
                <Col lg={4} className="text-center flex-column">
                    <Row className="flex-column">
                        <Col>
                            <Image
                                src={data.thumbnail}
                                alt="game image"
                                width={300}
                                className="mb-2"
                            />
                        </Col>
                        <Col>
                            <BackButton />
                        </Col>
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
                        {data.minimum_system_requirements
                            ? Object.entries(
                                  data.minimum_system_requirements
                              ).map((el) => (
                                  <ListGroup.Item key={el[0]}>
                                      {el[0].charAt(0).toUpperCase() +
                                          el[0].slice(1)}
                                      : {el[1]}
                                  </ListGroup.Item>
                              ))
                            : null}
                    </ListGroup>
                    <p className="h3 text-center">Screenshots</p>
                    <Carousel className={styles.carousel} data-bs-theme="dark">
                        {data.screenshots
                            ? data.screenshots.map((el) => (
                                  <Carousel.Item key={el.id}>
                                      <Image
                                          src={el.image}
                                          alt={`${data.title} game screenshot`}
                                          className={styles.carousel_image}
                                      />
                                  </Carousel.Item>
                              ))
                            : null}
                    </Carousel>
                </Col>
            </Row>
        </Col>
    );
}

export default Game;
