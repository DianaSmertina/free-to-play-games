import 'whatwg-fetch';
import '@testing-library/jest-dom';
import { renderWithProviders } from "./utilities/testUtilities";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

beforeEach(() => {
    process.env.VITE_API_KEY = 'your-test-api-key';
});

test("App component", async () => {
    const { getByText } = renderWithProviders(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(getByText("Category")).toBeInTheDocument();
});
