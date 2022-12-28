import React from "react";
import styled from "styled-components";

const TitleBackGround = styled.h2`
    background-color: #747474;
    width: 280px;
    height: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        width: 200px;
        height: 65px;
    }

    @media (max-width: 600px) {
        width: 150px;
        height: 50px;
    }

    & p {
        display: block;
        font-size: 40px;
        font-family: "Roboto";
        color: #ebebeb;

        @media (max-width: 1000px) {
            font-size: 30px;
        }

        @media (max-width: 600px) {
            font-size: 20px;
        }
    }

    & svg {
        display: block;
        color: #ebebebeb;
        width: 45px;
        height: 45px;
        padding-left: 10px;

        @media (max-width: 1000px) {
            width: 35px;
            height: 35px;
        }

        @media (max-width: 600px) {
            width: 25px;
            height: 25px;
        }
    }
`;

function TitleHeadline({ title, icon }) {
    return (
        <TitleBackGround>
            <p>{title}</p>
            {icon}
        </TitleBackGround>
    );
}

export default TitleHeadline;
