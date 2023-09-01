import { rest, RestRequest, ResponseComposition, RestContext } from "msw";

import { extendedGame, gameForTest } from "./mockData";

export const handlers = [rest.get(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    (_: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(
            ctx.status(200),
            ctx.json(
                new Array(35)
                    .fill("")
                    .map((_, i) => ({ ...gameForTest, id: i }))
            )
        );
    }
),
rest.get(
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=540",
    (_: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(
            ctx.status(200),
            ctx.json(extendedGame)
        );
    }
),
]
