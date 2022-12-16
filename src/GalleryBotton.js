import styled from "styled-components";

const MoreViewBotton = styled.button`
    display: block;
    margin: 0 auto;
    height: 20px;
    background-color: red;
    padding: 50px;
    margin-top: 150px;

    & span {
        line-height: 20px;
    }
`;

function GalleryBotton() {
    return (
        <>
            <MoreViewBotton>
                <span>GALLERY</span>
            </MoreViewBotton>
        </>
    );
}

export default GalleryBotton;
