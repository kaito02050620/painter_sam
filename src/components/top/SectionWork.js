import styled from "styled-components";

const WorkContainer = styled.div`
    position: relative;
    max-width: 1500px;
    height: 100vh;
    margin: 0 auto;
    background-color: rgba(211, 211, 211, 0.8);
`;
const WorkWrapper = styled.div`
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
    }
`;
const WorkImage = styled.div`
    & div {
        transform: translate(-50% -50%);
        max-width: 500px;
        background-color: red;
    }
`;

function SectionWork() {
    return (
        <WorkContainer>
            <WorkWrapper>
                <WorkText>大切に、丁寧に仕上げます。</WorkText>
                <WorkImage>
                    <div>image</div>
                </WorkImage>
            </WorkWrapper>
        </WorkContainer>
    );
}

export default SectionWork;
