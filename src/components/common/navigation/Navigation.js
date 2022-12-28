import React from "react";
import styled from "styled-components";
import { HiMail } from "react-icons/hi";
import { AiFillTwitterCircle } from "react-icons/ai";

const Navigation = styled.div`
    width: 500px;
    padding: 15px 30px;
    right: 0;
    margin: 0 auto;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    z-index: 5000;

    @media (max-width: 590px) {
        width: 100px;
        padding: 15px;
    }
`;
const HamburgarButton = styled.button`
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    width: 80px;
    height: 40px;
`;
const Line1 = styled.span`
    position: absolute;
    top: 10px;
    display: block;
    content: "";
    width: 80px;
    height: 3px;
    background-color: #5e5e5e;

    @media (max-width: 590px) {
        right: 0;
        width: 50px;
    }
`;
const Line2 = styled.span`
    position: absolute;
    top: 30px;
    right: 0;
    display: block;
    content: "";
    width: 60px;
    height: 3px;
    background-color: #5e5e5e;

    @media (max-width: 590px) {
        width: 35px;
    }
`;
const FormButton = styled.a`
    width: 260px;
    height: 50px;
    margin-right: 50px;
    background-color: #5e5e5e;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.9;

    @media (max-width: 590px) {
        position: absolute;
        top: 90px;
        right: 0;
        margin-right: 0;
        width: 45px;
        height: 230px;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        text-align: center;
    }

    & p {
        display: block;
        font-size: 20px;
        font-family: "Roboto";
        color: #ebebeb;
        margin-left: 10px;

        @media (max-width: 590px) {
            margin-top: 5px;
            margin-left: 0;
            font-size: 18px;
            letter-spacing: 2px;
        }
    }

    & svg {
        color: #ebebeb;
        width: 30px;
        height: 30px;

        @media (max-width: 590px) {
            display: inline;
            width: 28px;
            height: 28px;
        }
    }
`;
const HamburgarMenu = styled.div`
    position: fixed;
    background-color: #373737;
    width: 60%;
    height: 100vh;
    right: 0;
    z-index: 4000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;

    & ul {
        & li {
            margin: 0 auto;
            width: 500px;
            color: #ebebeb;
            font-size: 35px;
            text-align: center;
            margin-bottom: 30px;
            cursor: pointer;

            & :hover {
                transition: 0.2s;
                color: #7997ff;
            }

            & svg {
                width: 40px;
                height: 40px;
                display: inline;
            }

            &:last-child {
                width: 50px;
                margin-bottom: 0;
            }
        }
    }
`;
const CloseBackGround = styled.div`
    position: fixed;
    background-color: #373737;
    opacity: 0.7;
    width: 100%;
    height: 100vh;
    right: 0;
    z-index: 3000;
    display: flex;
    cursor: pointer;
    display: none;
`;

function TopNavigation() {
    return (
        <>
            <Navigation>
                <FormButton>
                    <HiMail />
                    <p>ご依頼はこちらから</p>
                </FormButton>
                <HamburgarButton>
                    <Line1></Line1>
                    <Line2></Line2>
                </HamburgarButton>
            </Navigation>
            <HamburgarMenu>
                <ul>
                    <li>
                        <p>ギャラリー</p>
                    </li>
                    <li>
                        <p>料金表&nbsp;&&nbsp;使用上の注意</p>
                    </li>
                    <li>
                        <p>問い合わせ</p>
                    </li>
                    <li>
                        <AiFillTwitterCircle />
                    </li>
                </ul>
            </HamburgarMenu>
            <CloseBackGround></CloseBackGround>
        </>
    );
}

export default TopNavigation;
