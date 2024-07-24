import { useState, useEffect } from 'react';

const generateEmptyField = () => Array(4).fill({ num: '', suit: '' });

const Body = ({ resultBody = [] }) => {
    const [fields, setFields] = useState(Array(15).fill(generateEmptyField()));

    useEffect(() => {
        if (resultBody.length > 0) {
            addNewData(resultBody);
        }
    }, [resultBody]);

    const addNewData = (newData) => {
        setFields(() => {
            while (newData.length < 15) {
                newData.push(generateEmptyField());
            }
            return newData;
        });
    };

    return (
        <div className="app__body">
            <div className="app__body-fields">
                {fields.map((field, index) => {
                    if (index === 0) {
                        return (
                            <div key={index} className="app__body-field body-field">
                                <div className="snake-border">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="body-field__range">{index + 1}</div>
                                <div className="body-field__result">
                                    {field.map((card, idx) => (
                                        <div key={idx} className={`body-field__result-item result-item`}>
                                            <div className={`result-item__ranks ${card.suit}`}>
                                                {card.num}
                                            </div>
                                            <div className={`result-item__icon ${card.suit}`}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className="app__body-field body-field">
                                <div className="body-field__range">{index + 1}</div>
                                <div className="body-field__result">
                                    {field.map((card, idx) => (
                                        <div key={idx} className={`body-field__result-item result-item`}>
                                            <div className={`result-item__ranks ${card.suit}`}>
                                                {card.num}
                                            </div>
                                            <div className={`result-item__icon ${card.suit}`}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default Body;