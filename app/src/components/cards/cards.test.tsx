import "@testing-library/jest-dom";
import "whatwg-fetch";
import { screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { renderWithProviders } from "../../utilities/testUtilities";
import Cards from "./Cards";

describe("Cards generates", () => {
    it("first page contains only 30 cards", async () => {
        renderWithProviders(
            <BrowserRouter>
                <Cards />
            </BrowserRouter>
        );
        const game = await screen.findAllByText("Overwatch 2");
        expect(game.length).toBe(30);
    });

    it("there is second page", async () => {
        renderWithProviders(
            <BrowserRouter>
                <Cards />
            </BrowserRouter>
        );
        const ulElement = await screen.findByRole("list");
        const liElements = await within(ulElement).findAllByRole("listitem");
        expect(liElements.length).toBe(4); //2 page and 2 buttons for first and last page
    });
});
