import React from "react";
import AboutUs from "../components/pages/AboutUs";
import Home from "../components/pages/Home";
import Tutorial from "../components/pages/Tutorial";
import "../css/style.css";

export default function Landing() {
    return(
        <>
            <Home/>
            <AboutUs/>
            <Tutorial/>
        </>
    )
}