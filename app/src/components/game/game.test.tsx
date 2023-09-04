import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Game from "./game";
import { extendedGame } from "../../mocks/mockData";

describe("Game component tests", () => {
    it("all additional information should be rendered", () => {
        render(
            <BrowserRouter>
                <Game data={extendedGame} />
            </BrowserRouter>
        );
        expect(screen.getByText("Os: Windows 10 64-bit")).toBeInTheDocument();
        expect(
            screen.getByText("Developer: Blizzard Entertainment")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Processor: Intel Core i3 or AMD Phenom X3 8650")
        ).toBeInTheDocument();
        expect(screen.getByText("Memory: 6 GB")).toBeInTheDocument();
        expect(
            screen.getByText(
                "Graphics: NVIDIA GeForce GTX 600 series or AMD Radeon HD 7000 series"
            )
        ).toBeInTheDocument();
        expect(screen.getByText("Storage: 50 GB")).toBeInTheDocument();
    });
});
