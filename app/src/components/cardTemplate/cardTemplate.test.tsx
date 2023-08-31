import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { IGame } from "../../types/types";
import CardTemplate from "./CardTemplate";

const game: IGame = {
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

describe("Card tests", () => {
    it("all require elements should be rendered", () => {
        render(
            <BrowserRouter>
                <CardTemplate data={game} />
            </BrowserRouter>
        );
        expect(screen.getByText("Overwatch 2")).toBeInTheDocument();
        expect(screen.getByText("Shooter")).toBeInTheDocument();
        expect(screen.getByText("04.10.2022")).toBeInTheDocument();
        expect(screen.getByText("Activision Blizzard")).toBeInTheDocument();
    });

    it("should be redirect on click", () => {
        render(
            <BrowserRouter>
                <CardTemplate data={game} />
            </BrowserRouter>
        );
        const card = screen.getByText("Overwatch 2");
        fireEvent.click(card);
        expect(location.pathname).toBe("/game/540");
    });
});
