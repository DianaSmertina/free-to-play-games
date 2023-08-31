import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { IGame, IGameExtended, IParamsGamesList } from "../types/types";
const key = import.meta.env.VITE_API_KEY;

const staggeredBaseQuery = retry(fetchBaseQuery({
    baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api",
    prepareHeaders: (headers) => {
        headers.set("X-RapidAPI-Key", key);
        headers.set(
            "X-RapidAPI-Host",
            "free-to-play-games-database.p.rapidapi.com"
        );
        return headers;
    },
}), {
    maxRetries: 3,
})

export const freeToPlayApi = createApi({
    reducerPath: "freeToPlayApi",
    baseQuery: staggeredBaseQuery,
    endpoints: (builder) => ({
        getAllGames: builder.query<Array<IGame>, IParamsGamesList>({
            query: (params) => {
                return {
                    url: "games",
                    params: params,
                };
            },
        }),
        getGameById: builder.query<IGameExtended, string>({
            query: (id) => {
                return {
                    url: "game",
                    params: { id },
                };
            },
            keepUnusedDataFor: 300,
        }),
    }),
});

export const { useGetAllGamesQuery, useGetGameByIdQuery } = freeToPlayApi;
