import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Movies } from "./Movies";
import { Snacks } from "./Snacks";
import { Support } from "./Support";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/movies" element={Movies} />
                <Route path="/snacks" element={Snacks} />
                <Route path="/support" element={Support} />
            </Routes>
        </BrowserRouter>
    );
};
