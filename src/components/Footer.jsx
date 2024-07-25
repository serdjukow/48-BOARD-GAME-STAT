const Footer = ({ resultIce = [], resultHot = [], resultSuit = [] }) => {

    return (
        <div className="app__footer footer">
            <div className="footer__title">LAST 100 SPIN</div>
            <div className="footer__container">
                <div className="footer__coefficients coefficients">
                    <div className="coefficients__items">
                        {resultSuit.map((card, index) => (
                            <div key={index} className={`coefficients__item coefficients-item ${card.suit}`}>
                                <div className="coefficients-item__ranks">
                                    {card.percent}%
                                </div>
                                <div className={`coefficients-item__icon ${card.suit}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer__hot hot">
                    <div className="hot__items">
                        {resultHot.map((card, idx) => (
                            <div key={idx} className="hot__item hot-item">
                                <div className={`hot-item__ranks ${card.suit}`}>
                                    {card.rank}
                                </div>
                                <div className={`hot-item__icon ${card.suit}`}>
                                </div>
                                <div className={`hot-item__value`}>
                                    {card.count}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer__ice ice">
                    <div className="ice__items">
                        {resultIce.map((card, idx) => (
                            <div key={idx} className="ice__item ice-item">
                                <div className={`ice-item__ranks ${card.suit}`}>
                                    {card.rank}
                                </div>
                                <div className={`ice-item__icon ${card.suit}`}>
                                </div>
                                <div className={`ice-item__value`}>
                                    {card.count}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;