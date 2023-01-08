import React from "react";
import styled from "styled-components";

const TopContainerTitle = styled.div`
    position: absolute;

    @media (max-width: 600px) {
        bottom: 50px;
    }

    & h1 {
        font-family: "DotGothic16", sans-serif;
        padding: 12px 30px;
        background-color: #5e5e5e;
        color: #ebebeb;
        font-size: 60px;
        letter-spacing: 15px;
        transform: translateX(100px);

        @media (max-width: 1050px) {
            font-size: 40px;
        }

        @media (max-width: 850px) {
            transform: translateX(0px);
        }

        @media (max-width: 600px) {
            font-size: 30px;
            padding: 5px 17px;
        }
    }
`;

function GalleryTitle() {
    return (
        <TopContainerTitle>
            <h1>GALLERY</h1>
        </TopContainerTitle>
    );
}

export default GalleryTitle;
