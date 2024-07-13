import React, { useState, useEffect } from 'react';

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const generateRandomCard = () => {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    return { suit, rank };
};

const generateRandomCards = (numCards) => {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
        cards.push(generateRandomCard());
    }
    return cards;
}

const Body = () => {
    const [fields, setFields] = useState(Array(15).fill(null));

    useEffect(() => {
        const interval = setInterval(() => {
            const newData = generateRandomCards(4);
            addNewData(newData);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const addNewData = (newData) => {
        setFields(prevFields => {
            const updatedFields = [newData, ...prevFields];
            if (updatedFields.length > 15) {
                updatedFields.pop();
            }
            return updatedFields;
        });
    };

    return (
        <div className="app__body">
            <div className="app__body-fields">
                {fields.map((field, index) => (
                    <div key={index} className="app__body-field body-field">
                        <div className="body-field__range">{index + 1}</div>
                        <div className="body-field__result">
                            {field ? field.map((card, idx) => (
                                <div key={idx} className={`body-field__result-item result-item`}>
                                    <div className={`result-item__value ${card.suit}`}>
                                        {card.rank}
                                    </div>
                                    <div className={`result-item__icon ${card.suit}`}>
                                    </div>
                                </div>
                            )) : ''}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Body;