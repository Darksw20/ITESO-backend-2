import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import Register from "./Register";
import Search from "./Search";
import NoPage from "./NoPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="search" element={<Search />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
const root = createRoot(document.getElementById("root"));
root.render(<App />);