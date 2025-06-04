import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Footer from "./Footer";
import Project from "../Pages/Project";

export default function Routeur() {
    return (
        <BrowserRouter basename="/Portfolio">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/Portfolio" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
