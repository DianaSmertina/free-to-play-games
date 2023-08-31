import { rest, RestRequest, ResponseComposition, RestContext } from "msw";
import { IGame } from "../types/types";

export const gameForTest: IGame = {
    id: 540,
    title: "Overwatch 2",
    thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
    short_description:
        "A hero-focused first-person team shooter from Blizzard Entertainment.",
    game_url: "https://www.freetogame.com/open/overwatch-2",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Activision Blizzard",
    developer: "Blizzard Entertainment",
    release_date: "2022-10-04",
    freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
};

export const handler = rest.get(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    (_: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(
            ctx.status(200),
            ctx.json(new Array(35).fill("").map((_, i) => ({ ...gameForTest, id: i })))
        );
    }
);
