import React from "react";
import styled from "styled-components";
import "@unocss/reset/eric-meyer.css";
import FooterLogoImage from "../../assets/image/footer__logo.png";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
    position: relative;
    width: 100%;
    height: 300px;
    margin: 0 auto;
    background-color: #747474;
`;
const FooterWrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    max-width: 1560px !important;
    padding: 30px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 600px) {
        padding: 15px;
    }
`;
const FooterLogo = styled.img`
    width: 260px;
    object-fit: cover;
    opacity: 0.9;
    transition: 0.2s;

    &:hover {
        opacity: 1;
    }

    @media (max-width: 650px) {
        width: 150px;
    }
    @media (max-width: 400px) {
        width: 90px;
    }
`;
const FooterNavigation = styled.nav`
    box-sizing: border-box;
    font-family: "Roboto";
    font-size: 18px;
    color: #ebebeb;
    font-weight: 400;

    & ul {
        list-style: none;
        box-sizing: border-box;

        & li {
            margin-bottom: 24px;
            height: 18px;
            box-sizing: border-box;

            @media (max-width: 600px) {
                font-size: 16px;
            }

            & a {
                text-decoration: none;
                color: #ebebeb;
                transition: 0.2s;

                &:hover {
                    opacity: 0.7;
                }
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
`;
const FooterCopyRight = styled.small`
    position: absolute;
    left: 50%;
    bottom: 10px;
    box-sizing: border-box;
    transform: scale(90%) translateX(-50%);
    color: #ebebeb;
    letter-spacing: 1.5px;
    opacity: 0.8;
    font-family: "Noto sans";

    @media (max-width: 600px) {
        opacity: 0.6;
        letter-spacing: 0;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Link to="/">
                    <FooterLogo
                        src={FooterLogoImage}
                        alt="塗装屋さむロゴ"
                    ></FooterLogo>
                </Link>
                <FooterNavigation>
                    <ul>
                        <li>
                            <Link to="/gallery">ギャラリー</Link>
                        </li>
                        <li>
                            <Link to="/price">
                                料金表&nbsp;&#38;&nbsp;使用上の注意
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://forms.gle/FZgut4MH34NcEdzp6"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                問い合わせ
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/paint_Samsan">
                                Twitter
                            </a>
                        </li>
                    </ul>
                </FooterNavigation>
            </FooterWrapper>
            <FooterCopyRight>
                &copy;&nbsp;2023&nbsp;Mause&nbsp;Painter&nbsp;Sam&nbsp;Inc.
            </FooterCopyRight>
        </FooterContainer>
    );
}

export default Footer;
