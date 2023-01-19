import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import Home from "./Home";
import Single from "./Single";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Single />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
