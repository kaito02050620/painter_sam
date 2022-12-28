import React from "react";
import styled from "styled-components";
import GalleryText from "./GalleryText";
import mouse1 from "../../assets/image/gallery_image/blue3.png";
import mouse2 from "../../assets/image/gallery_image/E-sportstigger1.png";
import mouse3 from "../../assets/image/gallery_image/G2e-sports.png";
import mouse4 from "../../assets/image/gallery_image/red-purple1.png";
import mouse5 from "../../assets/image/gallery_image/ion-skin.png";
import mouse6 from "../../assets/image/gallery_image/Sentinel-of-light.png";

const GalleryContainer = styled.div`
    position: relative;
    max-width: 1500px;
    margin: 0 auto 205px;
    padding: 150px 30px;
    background-color: rgba(211, 211, 211, 0.8);

    @media (max-width: 1000px) {
        padding: 80px 10px 30px;
        margin-bottom: 100px;
    }

    @media (max-width: 850px) {
        margin-bottom: 80px;
    }
`;
const GalleryWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 75px;

    @media (max-width: 1270px) {
        justify-content: space-around;
    }

    @media (max-width: 800px) {
        gap: 30px;
    }
`;
const GalleryItem = styled.div`
    max-width: 350px;
    height: 440px;
    background-color: #ebebeb;
    padding: 25px;

    @media (max-width: 800px) {
        padding: 15px;
    }

    &:hover {
        box-shadow: 0px 0px 0px 3px #bdbbbb;
        transition: 0.2s;
    }
`;
const GalleryImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

function SectionGallery() {
    return (
        <GalleryContainer>
            <GalleryWrapper>
                <GalleryItem>
                    <GalleryImage
                        src={mouse1}
                        alt="マイカブルー×スカイブルー"
                        style={{
                            objectPosition: "50% 100%",
                        }}
                    ></GalleryImage>
                    <GalleryText
                        obj={{
                            base: "RAZER V2 PRO",
                            design: "マイカブルー×スカイブルー",
                            descripsion:
                                "お客様指定のカラーで仕上げました。同色でまとめるのもおしゃれでおすすめです！表面はマットコーティング。",
                        }}
                    />
                </GalleryItem>
                <GalleryItem>
                    <GalleryImage
                        src={mouse2}
                        alt="EsportsTigerマウスパッド風"
                        style={{
                            objectPosition: "50% 100%",
                        }}
                    ></GalleryImage>
                    <GalleryText
                        obj={{
                            base: "RAZER V2 PRO",
                            design: "EsportsTigerマウスパッド風",
                            descripsion:
                                "お客様が使用するマウスパッドと同じカラーリングで作成。お客様からとにかく派手にと追加依頼があったので金色を追加しました。",
                        }}
                    />
                </GalleryItem>
                <GalleryItem>
                    <GalleryImage
                        src={mouse3}
                        alt="G2 Esportsユニフォーム風"
                        style={{
                            objectPosition: "50% 100%",
                        }}
                    ></GalleryImage>
                    <GalleryText
                        obj={{
                            base: "Xenics TITAN GX AIR",
                            design: "G2 Esportsユニフォーム風",
                            descripsion:
                                "お客様の推すチーム G2 Esportsのユニフォームデザインを参考に製作しました。サイドの柄がこだわり",
                        }}
                    />
                </GalleryItem>
                <GalleryItem>
                    <GalleryImage
                        src={mouse4}
                        alt="某人造人間風"
                        style={{
                            objectPosition: "50% 45%",
                        }}
                    ></GalleryImage>
                    <GalleryText
                        obj={{
                            base: "SteelSeries Aerox5",
                            design: "某人造人間風",
                            descripsion:
                                "お客様の好きなアニメのキャラをモチーフに作成。好きなキャラの絵は使えませんがカラーで似せることは可能です！",
                        }}
                    />
                </GalleryItem>
                <GalleryItem>
                    <GalleryImage
                        src={mouse5}
                        alt="Valorant イオン風"
                        style={{
                            objectPosition: "50% 40%",
                        }}
                    ></GalleryImage>
                    <GalleryText
                        obj={{
                            base: "Pulsar XLITE V2",
                            design: "Valorant イオン風",
                            descripsion:
                                "Valoプレイヤーからの依頼で新ACT版のイオンスキンを参考に製作しました。サイドのラインとサイドから見た時に穴の中が青く見えるのが粋なポイントです！",
                        }}
                    />
                </GalleryItem>
                <GalleryItem>
                    <GalleryImage
                        src={mouse6}
                        alt="Valorant センチネルオブライト風"
                        style={{
                            objectPosition: "50% 15%",
                        }}
                    ></GalleryImage>
                    <GalleryText
                        obj={{
                            base: "ENDGAME XM1r",
                            design: "Valorant センチネルオブライト風",
                            descripsion:
                                "Valoプレイヤーからの依頼でセンチネルオブライトスキンを参考にしました。先端のグラデーション、サイドのラインが素敵です。",
                        }}
                    />
                </GalleryItem>
            </GalleryWrapper>
        </GalleryContainer>
    );
}

export default SectionGallery;
