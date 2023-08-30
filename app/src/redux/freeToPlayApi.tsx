import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGame, IGameExtended } from "../types/types";
const key = import.meta.env.VITE_API_KEY;

export const freeToPlayApi = createApi({
    reducerPath: "freeToPlayApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", key);
            headers.set(
                "X-RapidAPI-Host",
                "free-to-play-games-database.p.rapidapi.com"
            );
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllGames: builder.query<Array<IGame>, void>({
            query: () => "games",
        }),
        getGameById: builder.query<IGameExtended, string>({
            query: (id) => {
                return {
                    url: "game",
                    params: { id },
                };
            },
        }),
    }),
});

export const { useGetAllGamesQuery, useGetGameByIdQuery } = freeToPlayApi;