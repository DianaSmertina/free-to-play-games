import { useParams } from "react-router-dom";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./gamePage.module.scss";
import { useState } from "react";
import { getGameDataCookie } from "../../utilities/utilities";
import GameFromCookies from "../../components/game/gameFromCookies";
import { IGameExtended } from "../../types/types";
import GameFromRTK from "../../components/game/gameFromRTK";

function GamePage() {
    const { gameId } = useParams();
    const [ data ] = useState<IGameExtended | null>(getGameDataCookie(gameId));

    return (
        <Row className="justify-content-center flex-column py-1">
            <Link to="/" className={styles.link}>
                <Button>Back</Button>
            </Link>
            {data && <GameFromCookies data={data} />}
            {!data && <GameFromRTK gameId={gameId} />}
        </Row>
    );
}

export default GamePage;
