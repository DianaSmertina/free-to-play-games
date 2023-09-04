import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/layout";
import MainPage from "./pages/mainPage/mainPage";
import GamePage from "./pages/gamePage/gamePage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/game/:gameId" element={<GamePage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
