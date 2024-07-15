import React, { useState, useEffect } from 'react';
import Coefficients from './Coefficients'

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const generateRandomCard = () => {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    let percent = Math.floor(Math.random() * 100)
    return { suit, rank, percent };
};

const generateRandomCards = (numCards) => {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
        cards.push(generateRandomCard());
    }
    return cards;
};
const Footer = () => {
    const [fields, setFields] = useState(Array(1).fill(null));
    console.log(fields);

    useEffect(() => {
        const interval = setInterval(() => {
            const newData = generateRandomCards(5);
            addNewData(newData);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const addNewData = (newData) => {
        setFields(prevFields => {
            const updatedFields = [newData, ...prevFields];
            if (updatedFields.length > 1) {
                updatedFields.pop();
            }
            return updatedFields;
        });
    };

    return (
        <div className="app__footer footer">
            <div className="footer__container">
                <Coefficients />
                <div className="footer__hot hot">
                    <div className="hot__items">
                        {fields[0] ? fields[0].map((card, idx) => (
                            <div key={idx} className="hot__item hot-item">
                                <div className={`hot-item__ranks ${card.suit}`}>
                                    {card.rank}
                                </div>
                                <div className={`hot-item__icon ${card.suit}`}>
                                </div>
                                <div className={`hot-item__value`}>
                                    {card.percent}
                                </div>
                            </div>
                        )) : ''}
                    </div>
                </div>
                <div className="footer__ice ice">
                    <div className="ice__items">
                        {fields[0] ? fields[0].map((card, idx) => (
                            <div key={idx} className="ice__item ice-item">
                                <div className={`ice-item__ranks ${card.suit}`}>
                                    {card.rank}
                                </div>
                                <div className={`ice-item__icon ${card.suit}`}>
                                </div>
                                <div className={`ice-item__value`}>
                                    {card.percent}
                                </div>
                            </div>
                        )) : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;