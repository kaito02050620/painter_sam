import React, { useState } from "react";
import styled from "styled-components";
import GalleryText from "./GalleryText";
import blue from "../../assets/image/gallery_image/blue.png";
import e_sportstigger1 from "../../assets/image/gallery_image/e_sportstigger1.png";
import g2e_sports from "../../assets/image/gallery_image/g2e_sports.png";
import ion_skin from "../../assets/image/gallery_image/ion_skin.png";
import sentinel_of_light from "../../assets/image/gallery_image/sentinel_of_light.png";
import blue_demon_phantom from "../../assets/image/gallery_image/blue_demon_phantom.png";
import japan from "../../assets/image/gallery_image/japan.png";
import lemon_yellow from "../../assets/image/gallery_image/lemon_yellow.png";
import lion_white_botan from "../../assets/image/gallery_image/lion_white_botan.png";
import rathalos_rare_pecies from "../../assets/image/gallery_image/rathalos_rare_pecies.png";
import red_demon_phantom from "../../assets/image/gallery_image/red_demon_phantom.png";

const GalleryContainer = styled.div`
    position: relative;
    max-width: 1500px;
    margin: 0 auto 205px;
    padding: 40px 30px 150px;
    background-color: rgba(211, 211, 211, 0.8);

    @media (max-width: 1000px) {
        padding: 40px 10px 30px;
        margin-bottom: 100px;
    }

    @media (max-width: 850px) {
        padding-top: 30px;
        margin-bottom: 80px;
    }
`;
const SelectBox = styled.div`
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 850px) {
        margin-bottom: 30px;
    }

    & label {
        display: block;
        margin-right: 15px;

        cursor: pointer;
    }
`;
const ColorSelect = styled.select`
    position: relative;
    color: #5e5e5e;
    padding: 5px 10px;
    display: block;
    text-align: center;
    cursor: pointer;

    & option {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
    }
`;
const GalleryItems = styled.div`
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
`;
const GalleryImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.05, 1.05);
    }
`;
const ImageFrame = styled.div`
    overflow: hidden;
`;
const ImageModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    height: 90vh;
    background-color: #d9d9d9;
    padding: 30px;
    z-index: 10000 !important;
    display: none;

    @media (max-width: 900px) {
        width: 90vw;
        height: 90vh;
    }

    &.open {
        display: block;
    }

    & button {
        position: absolute;
        top: 30px;
        right: 30px;
        width: 50px;
        height: 50px;

        @media (max-width: 700px) {
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
        }

        & span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotateZ(45deg);
            display: block;
            content: "";
            width: 60px;
            height: 2px;
            background-color: #5e5e5e;

            @media (max-width: 700px) {
                width: 40px;
            }

            &::after {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotateZ(90deg);
                display: block;
                content: "";
                width: 60px;
                height: 2px;
                background-color: #5e5e5e;

                @media (max-width: 700px) {
                    width: 40px;
                }
            }
        }
    }

    & div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 80%;

        @media (max-width: 700px) {
            width: 80%;
            height: 70%;
        }

        & img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
`;
const ModalBackGround = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #5b5b5b;
    opacity: 0.8;
    z-index: 9000;
    cursor: pointer;
    display: none;

    &.open {
        display: block;
    }
`;

const mouseItems = [
    {
        base: "RAZER V2 PRO",
        design: "マイカブルー×スカイブルー",
        color: "全てブルー",
        descripsion:
            "お客様指定のカラーで仕上げました。同色でまとめるのもおしゃれでおすすめです！表面はマットコーティング。",
        image: blue,
        position: "50% 50%",
    },
    {
        base: "Pulsar XLITE V2",
        design: "EsportsTigerマウスパッド風",
        color: "全てレッド",
        descripsion:
            "お客様が使用するマウスパッドと同じカラーリングで作成。お客様からとにかく派手にと追加依頼があったので金色を追加しました。",
        image: e_sportstigger1,
        position: "50% 100%",
    },
    {
        base: "Xenics TITAN GX AIR",
        design: "G2 Esportsユニフォーム風",
        color: "全てブラック",
        descripsion:
            "お客様の推すチーム G2 Esportsのユニフォームデザインを参考に製作しました。サイドの柄がこだわり",
        image: g2e_sports,
        position: "50% 100%",
    },
    {
        base: "Pulsar XLITE V2",
        design: "Valorant イオン風",
        color: "全てホワイト",
        descripsion:
            "Valoプレイヤーからの依頼で新ACT版のイオンスキンを参考に製作しました。サイドのラインとサイドから見た時に穴の中が青く見えるのが粋なポイントです！",
        image: ion_skin,
        position: "50% 40%",
    },
    {
        base: "ENDGAME XM1r",
        design: "Valorant センチネルオブライト風",
        color: "全てピンク",
        descripsion:
            "Valoプレイヤーからの依頼でセンチネルオブライトスキンを参考に製作しました。先端のグラデーション、サイドのラインが素敵です.",
        image: sentinel_of_light,
        position: "50% 0%",
    },
    {
        base: "GPROX SL",
        design: "VTuber獅白ぼたん",
        color: "全てブラック",
        descripsion:
            "お客様推しのVTuberをモチーフに作成したマウスとなっております。コーテイングは要望通りツヤありにしました。",
        image: lion_white_botan,
        position: "50% 20%",
    },
    {
        base: "ZA13-b",
        design: "レウス希少種",
        color: "全てブラック",
        descripsion:
            "お客様の好きなモンスターをモチーフに作成しました。筆を使用した特殊塗装で綺麗に仕上がりました！",
        image: rathalos_rare_pecies,
        position: "50% 50%",
    },
    {
        base: "ZA13-b",
        design: "単色レモンイエロー",
        color: "全てイエロー",
        descripsion:
            "単色でのご依頼送料込みで5000円以内で出来るのでおすすめです！",
        image: lemon_yellow,
        position: "50% 50%",
    },
    {
        base: "GPROX SL",
        design: "Valo 鬼ファントム青",
        color: "全てホワイト",
        descripsion:
            "ラップ塗装という特殊塗装を使い忠実に再現しました。愛用スキンとマウスがおなじデザイン…最高です！",
        image: blue_demon_phantom,
        position: "50% 50%",
    },
    {
        base: "M4 wireless",
        design: "Valo 鬼ファントム赤",
        color: "全てレッド",
        descripsion:
            "赤い部分多めでという要望がありましたので刺し色にこだわりスキンの再現できたかと思います！",
        image: red_demon_phantom,
        position: "50% 100%",
    },
    {
        base: "GPROX SL",
        design: "NIPPON Color",
        color: "全てホワイト",
        descripsion:
            "ワールドカップ2022記念で作成しました！趣味での製作品でしたがYUKIAIM好きな方に購入されました^^",
        image: japan,
        position: "50% 30%",
    },
];
const mouseColor = [
    "全て",
    "ブラック",
    "ホワイト",
    "レッド",
    "ブルー",
    "イエロー",
    "ピンク",
];

function SectionGallery() {
    const [active, setActive] = useState(false);
    const [tempimSrc, settempimSrc] = useState("");
    const [selectColor, setSelectColor] = useState("全て");

    const modalClick = (e) => {
        setActive(!active);
        settempimSrc(e.currentTarget.src);
    };

    return (
        <GalleryContainer>
            <ModalBackGround
                onClick={modalClick}
                className={active ? "open" : ""}
            ></ModalBackGround>
            <ImageModal className={active ? "open" : ""}>
                <button onClick={modalClick}>
                    <span></span>
                </button>
                <div>
                    <img src={tempimSrc} alt=""></img>
                </div>
            </ImageModal>
            <>
                <SelectBox>
                    <label htmlFor="colorselect">カラー&nbsp;&#58;&nbsp;</label>
                    <ColorSelect
                        id="colorselect"
                        onChange={(e) => setSelectColor(e.target.value)}
                        value={selectColor}
                    >
                        {mouseColor.map((color) => {
                            return <option key={color}>{color}</option>;
                        })}
                    </ColorSelect>
                </SelectBox>
                <GalleryItems>
                    {mouseItems
                        .filter((item) => {
                            if (item.color.indexOf(selectColor) !== -1) {
                                return item.color !== selectColor;
                            } else {
                                return item.color === selectColor;
                            }
                        })
                        .map((item) => {
                            return (
                                <GalleryItem key={item.design}>
                                    <ImageFrame>
                                        <GalleryImage
                                            onClick={modalClick}
                                            src={item.image}
                                            alt={item.design}
                                            style={{
                                                objectPosition: item.position,
                                            }}
                                        ></GalleryImage>
                                    </ImageFrame>
                                    <GalleryText {...item} />
                                </GalleryItem>
                            );
                        })}
                </GalleryItems>
            </>
        </GalleryContainer>
    );
}

export default SectionGallery;
