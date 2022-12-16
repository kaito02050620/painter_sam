import styled from "styled-components";
import TopContainerImage from "./assets/image/top_mouse.png";

const TopImageMouse = styled.img`
    width: 100px;
`;
const TopContainer = styled.div`
    display: flex;
`;

function MainVisual() {
    return (
        <>
            <TopContainer>
                <div className="top__container-title">
                    <p>ゲーミングマウス専門</p>
                    <h1>塗装屋&nbsp;さむさん</h1>
                    <p>Mause&nbsp;Painter&nbsp;Sam</p>
                </div>
                <div className="top__container-image">
                    <TopImageMouse
                        src={TopContainerImage}
                        alt="塗装屋さむのマウス"
                    ></TopImageMouse>
                </div>
            </TopContainer>
        </>
    );
}

export default MainVisual;
