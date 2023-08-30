import { useParams } from "react-router-dom";
import { useGetGameByIdQuery } from "../../redux/freeToPlayApi";
import Loading from "../../components/loading/loading";
import { Button, Row } from "react-bootstrap";
import Game from "../../components/game/game";
import { Link } from "react-router-dom";

import styles from "./gamePage.module.scss";

function GamePage() {
    const { gameId } = useParams();
    const { data, isError, isFetching } = useGetGameByIdQuery(gameId || "");

    return (
        <Row className="justify-content-center flex-column py-1">
            <Link to="/" className={styles.link}>
                <Button>Back</Button>
            </Link>
            {isFetching && <Loading />}
            {isError && <p>Error occurred</p>}
            {!isFetching && !isError && data && <Game data={data} />}
        </Row>
    );
}

export default GamePage;
