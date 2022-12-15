import React from 'react';
import "./Sec2.scss"

//import img
import mint from "../../img/img/mint.png"
import bg from "../../img/img/sec2_bg.png"
import sec2_icon1 from "../../img/icon/sec2__bottom-side_1.png"
import sec2_icon2 from "../../img/icon/sec2__bottom-side_2.png"
import sec2_icon3 from "../../img/icon/sec2__bottom-side_3.png"

const Sec2 = () => {
    return (
        <div className="sec2" style={{backgroundImage: `url(${bg})`}}>
            <div className="sec2__front-side">
                <div className="sec2__content container">
                    <div className="sec2__leftSide">
                        <img src={mint} alt="mint"/>
                    </div>
                    <div className="sec2__rightSide">
                        <h2 className="sec2__title">Mint a Horror Fellow</h2>
                        <p className="sec2__desc">Mint a Soul Sol by connecting your Solana Sollet or Phantom wallet.</p>
                        <div className="sec2__bottomSide">
                            <div className="sec2__bottomSide_left">
                                <h3 className="sec2__bottomSide_left__title">Single</h3>
                                <h4 className="sec2__bottomSide_left__desc">You will receive</h4>
                                <p className="sec2__bottomSide_left__receive1">1x Sol Soul Unique NFT</p>
                                <p className="sec2__bottomSide_left__receive2">3 SOL per NFT</p>
                            </div>
                            <div className="sec2__bottomSide_right">
                                <span className="sec2__bottomSide_right__title">1 Horror</span>
                                <a href="#" className="sec2__bottomSide_right__button">Mint</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sec2__bottom-side container">
                    <div className="sec2__bottom-side_left">
                        <img src={sec2_icon1} alt="icon1" className="sec2__bottom-side_left_img"/>
                        <h4 className="sec2__bottom-side_left_title">Horror Fellow are arriving</h4>
                        <p className="sec2__bottom-side_left_text">Get in on the ground floor by collecting the exclusive Horror Fellow NFTs. See our roadmap for our future plans, including our DAPP interactive Horror Fellow FUSION feature.</p>
                    </div>
                    <div className="sec2__bottom-side_center">
                        <img src={sec2_icon2} alt="icon1" className="sec2__bottom-side_center_img"/>
                        <h4 className="sec2__bottom-side_center_title">10,000 Ever Minted</h4>
                        <p className="sec2__bottom-side_center_text">Each Horror Fellow is unique & algorithmically generated & minted on the Solana blockchain. We are only ever generating 10k completely unique Sol Souls. There will be no further generations.</p>
                    </div>
                    <div className="sec2__bottom-side_right">
                        <img src={sec2_icon3} alt="icon1" className="sec2__bottom-side_right_img"/>
                        <h4 className="sec2__bottom-side_right_title">Join the Soul Train</h4>
                        <p className="sec2__bottom-side_right_text">Get the latest updates & get exclusive air drops & contests.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sec2;