import styled from "styled-components";
import workimage from "../../assets/image/work.png";

const WorkContainer = styled.div`
    position: relative;
    max-width: 1500px;
    height: 100vh;
    margin: 0 auto;
    background-color: rgba(211, 211, 211, 0.8);
`;
const WorkWrapper = styled.div`
    position: relative;
    max-width: 1100px;
    height: 100%;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
        flex-wrap: wrap-reverse;
        align-content: center;
        justify-content: center;
    }
`;
const WorkText = styled.p`
    position: absolute;
    z-index: 300;
    font-size: 40px;
    color: #373737;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;

    @media (max-width: 830px) {
        font-size: 30px;
    }

    @media (max-width: 600px) {
        margin-top: 30px;
        font-size: 20px;
        bottom: 20%;
    }
`;
const WorkImage = styled.div`
    position: absolute;
    right: 20px;
    max-width: 700px;

    @media (max-width: 980px) {
        max-width: 500px;
    }

    @media (max-width: 830px) {
        max-width: 400px;
    }

    @media (max-width: 600px) {
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
    }

    & img {
        object-fit: cover;
        transform: translate(-50% -50%);
        opacity: 0.65;
    }
`;

function SectionWork() {
    return (
        <WorkContainer>
            <WorkWrapper>
                <WorkText>大切に、丁寧に仕上げます。</WorkText>
                <WorkImage>
                    <img src={workimage} alt="作業風景"></img>
                </WorkImage>
            </WorkWrapper>
        </WorkContainer>
    );
}

export default SectionWork;
