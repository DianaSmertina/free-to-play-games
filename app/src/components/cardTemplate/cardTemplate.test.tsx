import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import CardTemplate from "./cardTemplate";
import { gameForTest } from "../../mocks/mockData";

describe("Card tests", () => {
    it("all require elements should be rendered", () => {
        render(
            <BrowserRouter>
                <CardTemplate data={gameForTest} />
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
                <CardTemplate data={gameForTest} />
            </BrowserRouter>
        );
        const card = screen.getByText("Overwatch 2");
        fireEvent.click(card);
        expect(location.pathname).toBe("/game/540");
    });
});
