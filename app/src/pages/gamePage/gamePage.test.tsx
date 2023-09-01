import "@testing-library/jest-dom";
import "whatwg-fetch";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { renderWithProviders } from "../../utilities/testUtilities";
import GamePage from "./GamePage";

describe("Game page generates", () => {
    it("there is data on the page", async () => {
        renderWithProviders(
            <BrowserRouter>
                <GamePage />
            </BrowserRouter>
        );
        const game = await screen.findByText("Overwatch 2");
        expect(game).toBeInTheDocument();
    });
});