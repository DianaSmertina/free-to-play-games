import { useParams } from "react-router-dom";

function GamePage() {
    const { gameId } = useParams();

    return (
        <>
            <div className="h1">Game Page</div>
            <p>Game ID: {gameId}</p>
        </>
    );
}

export default GamePage;
