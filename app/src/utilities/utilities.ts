import { IGameExtended } from "../types/types";

export function formatDate(stringDate: string) {
    const [year, month, day] = stringDate.split("-");
    return `${day}.${month}.${year}`;
}

export function formatString(str: string) {
    return str.toLowerCase().replace(" ", "-");
}

export function getGameDataCookie(gameId: string | undefined) {
    if (!gameId) return null;
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === `game_${gameId}`) {
            const decodedValue = decodeURIComponent(value);
            return JSON.parse(decodedValue);
        }
    }
    return null;
}

export function setGameDataCookie(game: IGameExtended) {
    const gameDataJSON = JSON.stringify(game);
    const expirationMs = 300000;
    const expirationDate = new Date(Date.now() + expirationMs);
    document.cookie = `game_${game.id}=${encodeURIComponent(gameDataJSON)}; expires=${expirationDate.toUTCString()}; path=/`;
}
