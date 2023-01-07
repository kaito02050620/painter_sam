import React from "react";
import styled from "styled-components";

const BackGround = styled.div`
    max-width: 1500px;
    margin: 24px auto 120px;
    padding: 100px 0;
    background-color: rgba(211, 211, 211, 0.8);

    @media (max-width: 1000px) {
        padding: 60px 0;
        margin: 15px auto 100px;
    }

    @media (max-width: 850px) {
        padding: 30px 0;
        margin: 10px auto 80px;
    }
`;
const DescriptionWrapper = styled.ul`
    list-style: circle;
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 100px;

    @media (max-width: 1000px) {
        padding: 0 60px;
    }

    @media (max-width: 850px) {
        padding: 0 20px 0 40px;
    }
`;
const Description = styled.li`
    max-width: 1100px;
    margin: 0 auto;
    font-size: 20px;
    font-family: "Roboto";
    color: #5e5e5e;
    margin-bottom: 40px;
    line-height: 30px;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 1000px) {
        margin-bottom: 30px;
    }

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

function DescriptionItem({ description }) {
    return <Description>{description}</Description>;
}
function SectionPrecautions() {
    return (
        <BackGround>
            <DescriptionWrapper>
                <DescriptionItem description="塗装されたマウスはラッカー塗料にてコーティングされています。手汗などに対する耐久性はありますが、耐シンナー性はございませんので掃除の際はアルコール入りのウェットティッシュ等は使わないようにお願い致します。" />
                <DescriptionItem description="都度確認し塗装作業していますが、塗装中まれに小さなゴミが入ってしまう可能性があります。ご理解宜しくお願い致します。" />
            </DescriptionWrapper>
        </BackGround>
    );
}

export default SectionPrecautions;
