import Game from "./game";
import { useGetGameByIdQuery } from "../../redux/freeToPlayApi";
import Loading from "../loading/loading";
import { setGameDataCookie } from "../../utilities/utilities";

function GameFromRTK({gameId}: {gameId: string | undefined}) {
    const { data, isError, isFetching } = useGetGameByIdQuery(gameId || "");

    if (data) {
        setGameDataCookie(data)
    }

    return (
        <>
            {isFetching && <Loading />}
            {isError && <p>Error occurred</p>}
            {!isFetching && !isError && data && <Game data={data} />}
        </>
    );
}

export default GameFromRTK;