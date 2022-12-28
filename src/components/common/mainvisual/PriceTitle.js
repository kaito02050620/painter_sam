import React from "react";
import styled from "styled-components";

const TopContainerTitle = styled.div`
    position: absolute;

    @media (max-width: 600px) {
        bottom: 50px;
    }

    & p {
        text-align: center;
        color: #5e5e5e;
        font-family: "DotGothic16";
        padding: 12px 0px;
        font-size: 60px;
        transform: translateX(100px);

        @media (max-width: 1050px) {
            font-size: 40px;
        }

        @media (max-width: 850px) {
            transform: translateX(0px);
        }

        @media (max-width: 600px) {
            width: 150px;
            font-size: 30px;
            padding: 3px 17px;
        }
    }
`;
const PriceText = styled.h1`
    width: 300px;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    font-family: "DotGothic16";
    padding: 12px 30px;
    background-color: #5e5e5e;
    color: #ebebeb;
    font-size: 60px;
    letter-spacing: 13px;
    transform: translateX(100px);

    @media (max-width: 1050px) {
        width: 230px;
        font-size: 40px;
    }

    @media (max-width: 850px) {
        transform: translateX(0px);
    }

    @media (max-width: 600px) {
        letter-spacing: 8px;
        margin-left: 0px;
        width: 150px;
        font-size: 30px;
        padding: 10px 17px;
    }
`;
const PrecautionsText = styled.h1`
    font-family: "DotGothic16";
    padding: 12px 30px;
    background-color: #5e5e5e;
    color: #ebebeb;
    font-size: 60px;
    letter-spacing: 13px;
    transform: translateX(100px);

    @media (max-width: 1050px) {
        font-size: 40px;
    }

    @media (max-width: 850px) {
        transform: translateX(0px);
    }

    @media (max-width: 600px) {
        letter-spacing: 8px;
        font-size: 30px;
        padding: 10px 17px;
    }
`;

function PriceTitle() {
    return (
        <TopContainerTitle>
            <PriceText>PRICE</PriceText>
            <p>&</p>
            <PrecautionsText>PRECAUTIONS</PrecautionsText>
        </TopContainerTitle>
    );
}

export default PriceTitle;
