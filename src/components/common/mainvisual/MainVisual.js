import React from "react";
import styled from "styled-components";
import TopContainerImage from "../../../assets/image/top_mouse.png";
import TopNavigation from "../navigation/Navigation";

const TopContainer = styled.div`
    max-width: 1560px;
    height: 100vh;
    padding: 0 30px;
    margin: 0 auto;
    box-sizing: border-box;
`;
const Topwrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
        display: block;
    }
`;
const TopImageMouse = styled.img`
    position: absolute;
    max-width: 48%;
    object-fit: cover;
    opacity: 0.9;
    right: 90px;
    transform: translateY(-10%);

    @media (max-width: 950px) {
        min-width: 70%;
        right: 10px;
    }

    @media (max-width: 600px) {
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100%;
    }
`;

function MainVisual({ title }) {
    return (
        <TopContainer>
            <TopNavigation />
            <Topwrapper>
                <TopImageMouse
                    src={TopContainerImage}
                    alt="塗装屋さむのマウス"
                ></TopImageMouse>
                {title}
            </Topwrapper>
        </TopContainer>
    );
}

export default MainVisual;
