import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import "whatwg-fetch";

import Toolbar from "./toolbar";
import { renderWithProviders } from "../../utilities/testUtilities";
import { tags, platforms, sortBy } from "../../assets/data";

describe("Toolbar is working", () => {
    it("should contain all radio buttons", () => {
        renderWithProviders(<Toolbar />);
        expect(screen.getAllByRole("radio").length).toBe(
            tags.length + platforms.length + sortBy.length
        );
    });

    it("should be clickable", () => {
        renderWithProviders(<Toolbar />);
        const radio = screen.getAllByRole("radio")[0];
        fireEvent.click(radio);
        expect(radio).toBeChecked();
    });

    it("all radio should be unchecked after reset button clicked", () => {
        renderWithProviders(<Toolbar />);
        const allRadio = screen.getAllByRole("radio");
        const clickedRadio = allRadio[0];
        fireEvent.click(clickedRadio);
        const resetBtn = screen.getByRole("button");
        fireEvent.click(resetBtn);
        allRadio.forEach((radioButton) => {
            expect(radioButton).not.toBeChecked();
        });
    });
});
