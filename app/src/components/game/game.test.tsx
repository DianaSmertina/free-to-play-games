import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Game from "./Game";
import { extendedGame } from "../../mocks/mockData";

describe("Game component tests", () => {
    it("all additional information should be rendered", () => {
        render(
            <BrowserRouter>
                <Game data={extendedGame} />
            </BrowserRouter>
        );
        expect(screen.getByText("Windows 10 64-bit")).toBeInTheDocument();
        expect(screen.getByText("Developer: Blizzard Entertainment")).toBeInTheDocument();
        expect(
            screen.getByText("Intel Core i3 or AMD Phenom X3 8650")
        ).toBeInTheDocument();
        expect(screen.getByText("6 GB")).toBeInTheDocument();
        expect(
            screen.getByText(
                "NVIDIA GeForce GTX 600 series or AMD Radeon HD 7000 series"
            )
        ).toBeInTheDocument();
        expect(screen.getByText("50 GB")).toBeInTheDocument();
    });
});
