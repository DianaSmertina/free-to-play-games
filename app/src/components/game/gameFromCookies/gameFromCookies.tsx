import { IGameExtended } from "../../../types/types";
import Game from "../Game";

function GameFromCookies({ data }: { data: IGameExtended }) {
    return <Game data={data} />;
}

export default GameFromCookies;
