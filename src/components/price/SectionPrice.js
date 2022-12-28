import React from "react";
import styled from "styled-components";
import addlogo from "../../assets/image/Price_logo.png";

const BackGround = styled.div`
    max-width: 1500px;
    margin: 24px auto 120px;
    padding: 100px 200px;
    background-color: rgba(211, 211, 211, 0.8);

    @media (max-width: 1431px) {
        padding: 100px 100px;
    }

    @media (max-width: 1230px) {
        padding: 50px;
    }

    @media (max-width: 1130px) {
        /* padding: 15px; */
    }

    @media (max-width: 930px) {
        margin-bottom: 40px;
    }

    @media (max-width: 500px) {
        margin-bottom: 30px;
    }
`;
const PriceItems = styled.ul``;
const PriceItem = styled.li`
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 1130px) {
        display: block;
    }
    @media (max-width: 930px) {
        margin-bottom: 40px;
    }

    @media (max-width: 500px) {
        margin-bottom: 30px;
    }
`;
const TitleText = styled.h3`
    color: #5e5e5e;
    font-size: 40px;
    margin-right: 40px;

    @media (max-width: 1130px) {
        margin-bottom: 50px;
    }

    @media (max-width: 1000px) {
        font-size: 30px;
        margin-bottom: 30px;
    }

    @media (max-width: 850px) {
        font-size: 20px;
    }

    @media (max-width: 600px) {
        margin-bottom: 15px;
    }
`;
const OneColorPalette = styled.p`
    width: 150px;
    height: 100px;
    color: #5e5e5e;
    font-size: 30px;
    line-height: 100px;
    text-align: center;
    background-color: #64cdcd;

    @media (max-width: 930px) {
        font-size: 24px;
        line-height: 80px;
        width: 120px;
        height: 80px;
        margin-bottom: 30px;
    }

    @media (max-width: 500px) {
        font-size: 16px;
        line-height: 60px;
        width: 95px;
        height: 60px;
    }
`;
const ManyColorPalette = styled.p`
    position: relative;
    z-index: 1;
    width: 150px;
    height: 100px;
    color: #5e5e5e;
    font-size: 30px;
    line-height: 100px;
    text-align: center;
    background-color: #64cdcd;

    @media (max-width: 930px) {
        font-size: 24px;
        line-height: 80px;
        width: 120px;
        height: 80px;
    }

    @media (max-width: 500px) {
        font-size: 16px;
        line-height: 60px;
        width: 95px;
        height: 60px;
    }

    & span {
        position: absolute;
        z-index: 500;
        left: 0;
        width: 100%;
    }

    &::before {
        content: "";
        background-color: #a3b7ff;
        width: 33%;
        height: 100%;
        position: absolute;
        z-index: 100;
        left: 0;
    }

    &::after {
        content: "";
        background-color: #eaa96e;
        width: 33%;
        height: 100%;
        position: absolute;
        z-index: 100;
        right: 0;
    }
`;
const ColorPrice = styled.p`
    display: inline-block;
    color: #5e5e5e;
    margin-left: 40px;
    font-size: 30px;
    vertical-align: middle;

    @media (max-width: 930px) {
        margin-left: 20px;
        font-size: 24px;
    }

    @media (max-width: 600px) {
        margin-left: 15px;
        font-size: 18px;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const ColorBox = styled.div`
    max-width: 350px;
    margin-left: 60px;
    display: flex;
    align-items: center;

    @media (max-width: 930px) {
        margin-left: 30px;
    }

    @media (max-width: 500px) {
        margin-left: 15px;
    }
`;
const SpecialColor = styled.p`
    margin-left: 90px;
    font-size: 40px;
    color: #5e5e5e;

    @media (max-width: 930px) {
        font-size: 30px;
        margin-left: 30px;
    }

    @media (max-width: 500px) {
        font-size: 24px;
        margin-left: 15px;
    }

    & span {
        font-size: 20px;
        margin-left: 20px;

        @media (max-width: 930px) {
            font-size: 16px;
        }
    }
`;
const AddLetter = styled.img`
    margin-left: 90px;
    width: 160px;
    object-fit: cover;

    @media (max-width: 930px) {
        width: 140px;
        margin-left: 30px;
    }

    @media (max-width: 500px) {
        width: 120px;
        margin-left: 15px;
    }
`;

function PriceTitle({ title }) {
    return <TitleText>{title}&nbsp;&nbsp;&#058;</TitleText>;
}
function SectionPrice() {
    return (
        <BackGround>
            <PriceItems>
                <PriceItem>
                    <PriceTitle title="カラー" />
                    <Wrapper>
                        <ColorBox>
                            <OneColorPalette>単色</OneColorPalette>
                            <ColorPrice>&yen;&nbsp;3000～</ColorPrice>
                        </ColorBox>
                        <ColorBox>
                            <ManyColorPalette>
                                <span>複数色</span>
                            </ManyColorPalette>
                            <ColorPrice>&yen;&nbsp;5000～</ColorPrice>
                        </ColorBox>
                    </Wrapper>
                </PriceItem>
                <PriceItem>
                    <PriceTitle title="特殊塗装" />
                    <Wrapper>
                        <SpecialColor>
                            要相談
                            <span>
                                ※お問い合わせ又はTwitterより相談ください。
                            </span>
                        </SpecialColor>
                    </Wrapper>
                </PriceItem>
                <PriceItem>
                    <PriceTitle title="文字入れ" />
                    <Wrapper>
                        <AddLetter src={addlogo} alt="文字入れロゴ"></AddLetter>
                        <ColorPrice>&yen;&nbsp;800</ColorPrice>
                    </Wrapper>
                </PriceItem>
            </PriceItems>
        </BackGround>
    );
}

export default SectionPrice;
