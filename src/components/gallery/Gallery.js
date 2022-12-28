import React from "react";
import Footer from "../common/Footer.js";
import MainVisual from "../common/mainvisual/MainVisual";
import GalleryTitle from "../common/mainvisual/GalleryTitle";
import SectionGallery from "./SectionGallery";

function Gallery() {
    return (
        <>
            <MainVisual title={<GalleryTitle />}></MainVisual>
            <SectionGallery />
            <Footer />
        </>
    );
}

export default Gallery;
