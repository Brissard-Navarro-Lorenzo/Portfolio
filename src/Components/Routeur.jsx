import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../Pages/Home";
// import Project from "../Pages/Project";

export default function Routeur() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/project/:id" element={<Project />} /> */}
            </Routes>
        </BrowserRouter>
    );
}
