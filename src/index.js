import React from "react";
import ReactDOM from "react-dom/client";
import "@unocss/reset/eric-meyer.css";
import styled from "styled-components";
import MainVisual from "./MainVisual";
import SectionWork from "./SectionWork";
import GalleryBotton from "./GalleryBotton";

const Body = styled.body`
    background-color: #ebebeb;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Body>
        <MainVisual />
        <SectionWork />
        <GalleryBotton />
    </Body>
);
// reportWebVitals();
