import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import MainPage from "./pages/mainPage/MainPage";
import GamePage from "./pages/gamePage/GamePage";

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
