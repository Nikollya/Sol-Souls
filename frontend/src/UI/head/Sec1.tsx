import React from 'react';
import "./Sec1.scss"
import head from '../../img/head.png';

const Sec1 = () => {
    return (
        <div className="sec1">
            <div className="container">
                <div className="sec1__content">
                    <div className="sec1__leftSide">
                        <h1 className="sec1__title">Introducing <br/> Horror Fellow</h1>
                        <p className="sec1__desc">SOLD OUT - 10,000 uniquely generated, cute <br/>and collectible pixel art souls with proof of <br/>ownership stored on the Solana blockchain.</p>
                        <a href="#" className="sec1__button">Buy on DigitalEyes Marketplace</a>
                        <p className="sec1__desc2">Our mint is over, & our team is busy working on our roadmap. <br/>However, if you're looking to launch your own NFTs & join the <br/>Solana community - we can help</p>
                    </div>
                    <div className="sec1__rightSide">
                        <img src={head} alt="img" className="sec1__img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec1;