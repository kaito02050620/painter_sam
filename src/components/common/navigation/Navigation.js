import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
    appearance: none;
    width: 80px;
    height: 40px;
    opacity: 0.7;
    transition: 0.2s;

    &:hover {
        opacity: 1;
    }

    &.open {
        height: 50px;
    }
`;
const Line1 = styled.span`
    position: absolute;
    top: 10px;
    display: block;
    content: "";
    width: 80px;
    height: 3px;
    background-color: #5e5e5e;
    transition: all 0.4s;

    &.open {
        transform: translateY(20px) rotateZ(45deg);
        background-color: #ebebeb;
    }

    @media (max-width: 590px) {
        height: 2px;
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
    transition: all 0.4s;

    &.open {
        width: 80px;
        transform: rotateZ(-45deg);
        background-color: #ebebeb;
    }

    @media (max-width: 590px) {
        height: 2px;
        width: 35px;

        &.open {
            width: 50px;
        }
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
    transition: 0.15s;
    text-decoration: none;

    &:hover {
        background-color: #4865c9;
    }

    @media (max-width: 590px) {
        display: none;
    }

    & p {
        display: block;
        font-size: 20px;
        font-family: "Roboto", sans-serif;
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
    width: 80%;
    height: 100vh;
    right: 0;
    z-index: 4000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(110%);
    transition: all 0.4s;

    @media (max-width: 590px) {
        width: 80%;
    }

    &.open {
        transform: translateX(0);
    }

    & ul {
        & li {
            margin: 0 auto;
            width: 500px;
            color: #ebebeb;
            font-size: 35px;
            font-family: "Roboto", sans-serif;

            text-align: center;
            margin-bottom: 30px;
            cursor: pointer;
            text-decoration: none;

            @media (max-width: 590px) {
                font-size: 18px;
                width: 100%;
            }

            & :hover {
                transition: 0.2s;
                color: #7997ff;
            }

            & a {
                text-decoration: none;
            }

            & p {
                color: #ebebeb;
            }

            & svg {
                width: 60px;
                height: 60px;
                display: inline;
                color: #ebebeb;

                @media (max-width: 590px) {
                    width: 40px;
                    height: 40px;
                }
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

    &.open {
        display: block;
    }
`;

function TopNavigation() {
    const [active, setActive] = useState(false);

    const MenuToggle = () => {
        setActive(!active);
    };

    return (
        <>
            <Navigation>
                <FormButton
                    href="https://forms.gle/FZgut4MH34NcEdzp6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={active ? "open" : ""}
                >
                    <HiMail />
                    <p>ご依頼はこちらから</p>
                </FormButton>
                <HamburgarButton
                    onClick={MenuToggle}
                    className={active ? "open" : ""}
                >
                    <Line1 className={active ? "open" : ""}></Line1>
                    <Line2 className={active ? "open" : ""}></Line2>
                </HamburgarButton>
            </Navigation>
            <HamburgarMenu className={active ? "open" : ""}>
                <ul>
                    <li>
                        <Link to="/">
                            <p>トップ</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery">
                            <p>ギャラリー</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/price">
                            <p>料金表&nbsp;&&nbsp;使用上の注意</p>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://forms.gle/FZgut4MH34NcEdzp6"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p>問い合わせ</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/paint_Samsan">
                            <AiFillTwitterCircle />
                        </a>
                    </li>
                </ul>
            </HamburgarMenu>
            <CloseBackGround
                className={active ? "open" : ""}
                onClick={MenuToggle}
            ></CloseBackGround>
        </>
    );
}

export default TopNavigation;
