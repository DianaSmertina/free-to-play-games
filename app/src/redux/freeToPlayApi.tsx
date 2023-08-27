import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGame } from "../types/types";

export const freeToPlayApi = createApi({
    reducerPath: "freeToPlayApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", import.meta.env.API_KEY);
            headers.set("X-RapidAPI-Host", "free-to-play-games-database.p.rapidapi.com");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllGames: builder.query<IGame, void>({
            query: () => "games",
        }),
    }),
});

export const { useGetAllGamesQuery } = freeToPlayApi;
