import React from "react";
import MainVisual from "../common/mainvisual/MainVisual";
import SectionWork from "./SectionWork";
import GalleryButton from "./GalleryButton";
import Footer from "../common/Footer";
import TopTitle from "../common/mainvisual/Toptitle";

function Top() {
    return (
        <>
            <MainVisual title={<TopTitle />}></MainVisual>
            <SectionWork />
            <GalleryButton />
            <Footer />
        </>
    );
}

export default Top;
