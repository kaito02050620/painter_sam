import styled from "styled-components";
import FooterLogoImage from "./assets/image/footer__logo.png";

const FooterContainer = styled.footer`
    position: relative;
    width: 100%;
    height: 300px;
    margin: 0 auto;
    background-color: #747474;
`;
const FooterWrapper = styled.div`
    position: relative;
    max-width: 1500px;
    padding: 30px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;

    justify-content: space-between;
`;
const FooterLogo = styled.img`
    width: 260px;
    object-fit: cover;
`;
const FooterNavigation = styled.nav`
    font-family: "Roboto";
    font-size: 18px;
    color: #ebebeb;
    font-weight: 400;

    & ul {
        & li {
            margin-bottom: 24px;

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
    transform: scale(90%) translateX(-50%);
    color: #ebebeb;
    letter-spacing: 1.5px;
    opacity: 0.8;
    font-family: "Roboto";
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLogo
                    src={FooterLogoImage}
                    alt="塗装屋さむロゴ"
                ></FooterLogo>
                <FooterNavigation>
                    <ul>
                        <li>ギャラリー</li>
                        <li>料金表&nbsp;&#38;&nbsp;使用上の注意</li>
                        <li>問い合わせ</li>
                        <li>Twitter</li>
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
