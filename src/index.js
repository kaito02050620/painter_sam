import React from "react";
import ReactDOM from "react-dom/client";
import "@unocss/reset/eric-meyer.css";
import styled from "styled-components";
import MainVisual from "./MainVisual";
import SectionWork from "./SectionWork";
import GalleryButton from "./GalleryButton";
import Footer from "./Footer";

const GrobalContainer = styled.div`
    background-color: #ebebeb;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <GrobalContainer>
            <MainVisual />
            <SectionWork />
            <GalleryButton />
            <Footer />
        </GrobalContainer>
    </>
);
