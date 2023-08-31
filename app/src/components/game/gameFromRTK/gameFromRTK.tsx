import Game from "../Game";
import { useGetGameByIdQuery } from "../../../redux/freeToPlayApi";
import Loading from "../../loading/Loading";
import { setGameDataCookie } from "../../../utilities/utilities";
import BackButton from "../../backButton.tsx/BackButton";

function GameFromRTK({ gameId }: { gameId: string | undefined }) {
    const { data, isError, isFetching } = useGetGameByIdQuery(gameId || "");

    if (data) {
        setGameDataCookie(data);
    }

    return (
        <>
            {isFetching && <Loading />}
            {isError && (
                <>
                    <p>Error occurred</p>
                    <BackButton />
                </>
            )}
            {!isFetching && !isError && data && <Game data={data} />}
        </>
    );
}

export default GameFromRTK;
