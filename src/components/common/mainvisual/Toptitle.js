import React from "react";
import styled from "styled-components";

const TopContainerTitle = styled.div`
    position: absolute;

    @media (max-width: 600px) {
        bottom: 50px;
    }

    & h1 {
        font-family: "DotGothic16";
        padding: 12px 17px;
        background-color: #5e5e5e;
        color: #ebebeb;
        font-size: 60px;
        letter-spacing: 2px;
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

const SubTitle1 = styled.p`
    display: inline-block;
    font-family: "DotGothic16", sans-serif;
    padding: 17px 17px 2px;
    background-color: #5e5e5e;
    color: #ebebeb;
    font-size: 20px;
    letter-spacing: 1px;
    transform: translateX(100px);

    @media (max-width: 1050px) {
        font-size: 18px;
    }

    @media (max-width: 850px) {
        transform: translateX(0px);
    }
`;
const SubTitle2 = styled(SubTitle1)`
    padding: 2px 17px 17px;
    letter-spacing: 3px;
    transform: translateX(100px);

    @media (max-width: 1050px) {
        font-size: 18px;
    }

    @media (max-width: 850px) {
        transform: translateX(0px);
    }
`;

function TopTitle() {
    return (
        <TopContainerTitle>
            <SubTitle1>ゲーミングマウス専門</SubTitle1>
            <h1>塗装屋&nbsp;さむさん</h1>
            <SubTitle2>Mause&nbsp;Painter&nbsp;Sam</SubTitle2>
        </TopContainerTitle>
    );
}

export default TopTitle;
