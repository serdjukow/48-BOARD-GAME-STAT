import React, { useState, useEffect } from 'react';

const suits = ['clubs', 'hearts', 'diamonds', 'spades'];
const generateRandomPercentages = () => {
    const percentages = {};
    let total = 100;

    for (let i = 0; i < suits.length; i++) {
        const suit = suits[i];
        if (i === suits.length - 1) {
            percentages[suit] = total;
        } else {
            const percentage = Math.floor(Math.random() * (total + 1));
            percentages[suit] = percentage;
            total -= percentage;
        }
    }

    return percentages;
};

const Coefficients = () => {
    const [percentages, setPercentages] = useState(generateRandomPercentages());
    useEffect(() => {
        const interval = setInterval(() => {
            setPercentages(generateRandomPercentages());
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="footer__coefficients coefficients">
            <div className="coefficients__items">
                {suits.map((suit, index) => (
                    <div key={index} className={`coefficients__item coefficients-item ${suit}`}>

                        <div className="coefficients-item__ranks">
                            {percentages[suit]}%
                        </div>
                        <div className={`coefficients-item__icon ${suit}`}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Coefficients