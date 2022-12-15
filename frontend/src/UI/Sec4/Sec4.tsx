import React from 'react';
import "./Sec4.scss"
import sec4_img from "../../img/img/sec3_3.png"

const Sec4 = () => {
    return (
        <div className="sec4">
            <div className="sec4__content">
                <div className="sec4__main-block">
                    <div className="sec4__main-block__left-side">
                        <h4 className="sec4__main-block__title">Cryptographically Signed & Staked with Proof of Ownership</h4>
                        <p className="sec4__main-block__desc">Algorithmically generated, unique, cute and collectibles NFTs.</p>
                        <div className="sec4__main-block__datas">
                            <div className="sec4__main-block__data">
                                <div className="sec4__main-block__data__title">10938</div>
                                <div className="sec4__main-block__data__desc">Ever minted</div>
                            </div>
                            <div className="sec4__main-block__data">
                                <div className="sec4__main-block__data__title">198</div>
                                <div className="sec4__main-block__data__desc">Unique Attributes</div>
                            </div>
                            <div className="sec4__main-block__data">
                                <div className="sec4__main-block__data__title">2m+</div>
                                <div className="sec4__main-block__data__desc">Possible combinations</div>
                            </div>
                            <div className="sec4__main-block__data">
                                <div className="sec4__main-block__data__title">100%</div>
                                <div className="sec4__main-block__data__desc">Sold out</div>
                            </div>
                        </div>
                    </div>
                    <div className="sec4__main-block__right-side">
                        <div className="sec4__main-block__right-side__block">
                            <img src={sec4_img} alt="img"/>
                            <h5>Sweepin Floats</h5>
                            <p>1x Horror FellowUnique NFT</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sec4;