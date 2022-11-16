import React from 'react';
import mint from "../../img/mint.png"
import "./Sec2.scss"

const Sec2 = () => {
    return (
        <div className="sec2">
            <div className="container">
                <div className="sec2__content">
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
            </div>
        </div>
    );
}

export default Sec2;