import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";

import { useState } from "react";
import { getGameDataCookie } from "../../utilities/utilities";
import GameFromCookies from "../../components/game/gameFromCookies";
import { IGameExtended } from "../../types/types";
import GameFromRTK from "../../components/game/gameFromRTK";

function GamePage() {
    const { gameId } = useParams();
    const [data] = useState<IGameExtended | null>(getGameDataCookie(gameId));

    return (
        <Row className="justify-content-center flex-column align-items-center py-4">
            {data ? <GameFromCookies data={data} /> : <GameFromRTK gameId={gameId} />}
        </Row>
    );
}

export default GamePage;
