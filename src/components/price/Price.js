import React from "react";
import styled from "styled-components";
import MainVisual from "../common/mainvisual/MainVisual";
import PriceTitle from "../common/mainvisual/PriceTitle";
import SectionPrice from "./SectionPrice.js";
import TitleHeadline from "./Headline";
import SectionPrecautions from "./SectionPrecautions.js";
import { ImCoinYen } from "react-icons/im";
import { FiAlertTriangle } from "react-icons/fi";
import Footer from "../common/Footer";

const PriceWrapper = styled.div`
    position: relative;
    max-width: 1500px;
    padding: 0px 30px;
    margin: 0 auto 205px;

    @media (max-width: 1000px) {
        margin-bottom: 100px;
    }

    @media (max-width: 850px) {
        padding: 0px 25px;
        margin-bottom: 80px;
    }
`;

function Price() {
    return (
        <>
            <MainVisual title={<PriceTitle />}></MainVisual>
            <PriceWrapper>
                <TitleHeadline title="料金表" icon={<ImCoinYen />} />
                <SectionPrice />
                <TitleHeadline title="注意事項" icon={<FiAlertTriangle />} />
                <SectionPrecautions />
            </PriceWrapper>
            <Footer />
        </>
    );
}

export default Price;
