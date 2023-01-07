import React from "react";
import ReactDOM from "react-dom/client";
import "@unocss/reset/eric-meyer.css";
import styled from "styled-components";
import Top from "./components/top/Top";
import Gallery from "./components/gallery/Gallery";
import Price from "./components/price/Price";
import { BrowserRouter as Ro, Route, Routes } from "react-router-dom";
import ScrollTop from "./Location";

const GrobalContainer = styled.div`
    background-color: #ebebeb;
    position: relative;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Ro>
        <GrobalContainer>
            <ScrollTop />
            <Routes>
                <Route path="/" element={<Top />}></Route>
                <Route path="/price" element={<Price />}></Route>
                <Route path="/gallery" element={<Gallery />}></Route>
            </Routes>
        </GrobalContainer>
    </Ro>
);
