import styled from "styled-components";
import TopContainerImage from "./assets/image/top_mouse.png";

const TopContainer = styled.div`
    position: relative;
    max-width: 1100px;
    height: 100vh;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    /* overflow: hidden; //出来上がり見て確認が必要そう。。。 */
`;
const TopContainerTitle = styled.div`
    position: absolute;

    & h1 {
        font-family: "DotGothic16";
        padding: 12px 17px;
        background-color: #5e5e5e;
        color: #ebebeb;
        font-size: 60px;
    }
`;
const SubTitle1 = styled.p`
    display: inline-block;
    font-family: "DotGothic16";
    padding: 17px 17px 2px;
    background-color: #5e5e5e;
    color: #ebebeb;
    font-size: 20px;
    letter-spacing: 1px;
`;
const SubTitle2 = styled(SubTitle1)`
    padding: 2px 17px 17px;
    letter-spacing: 3px;
`;

const TopImageMouse = styled.img`
    position: absolute;
    max-width: 60%;
    object-fit: cover;
    opacity: 0.9;
    right: 20px;
    transform: translateY(-3%);
`;

function MainVisual() {
    return (
        <>
            <TopContainer>
                <TopImageMouse
                    src={TopContainerImage}
                    alt="塗装屋さむのマウス"
                ></TopImageMouse>
                <TopContainerTitle>
                    <SubTitle1>ゲーミングマウス専門</SubTitle1>
                    <h1>塗装屋&nbsp;さむさん</h1>
                    <SubTitle2>Mause&nbsp;Painter&nbsp;Sam</SubTitle2>
                </TopContainerTitle>
            </TopContainer>
        </>
    );
}

export default MainVisual;
