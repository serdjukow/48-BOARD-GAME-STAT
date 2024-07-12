import { useEffect, useState } from 'react';
import './App.scss';
import icon_сlubs from "./assets/images/сlubs.png";
import icon_hearts from "./assets/images/hearts.png";
import icon_spades from "./assets/images/spades.png";
import icon_diamonds from "./assets/images/diamonds.png";
import { AnimatedCounter } from 'react-animated-counter';

const App = () => {
  const [counterValue, setCounterValue] = useState(1000000);
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const randomAddition = Math.floor(Math.random() * 100) + 1;
      setCounterValue(prevCount => prevCount + randomAddition);
      setAnimate(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => setAnimate(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [animate]);


  return (
    <div className="wrapper">
      <div className="app">
        <div className="app__header header">
          <div className={`header__jackpot-value ${animate ? 'animate' : ''}`}>
            <AnimatedCounter
              value={counterValue}
              includeDecimals={false}
              includeCommas={true}
              fontSize={false}
            />
          </div>
        </div>
        <div className="app__body">
          <div className="app__body-fields">

            <div className="app__body-field body-field">
              <div className="body-field__range">1</div>
              <div className="body-field__result">
                <div className="body-field__result-item result-item">
                  <div className="result-item__value">
                    12
                  </div>
                  <div className="result-item__icon">
                    <img src={icon_сlubs} alt="" />
                  </div>
                </div>
                <div className="body-field__result-item result-item">
                  <span className="result-item__value">
                    12
                  </span>
                  <div className="result-item__icon">
                    <img src={icon_hearts} alt="" />
                  </div>
                </div>
                <div className="body-field__result-item result-item">
                  <span className="result-item__value">
                    12
                  </span>
                  <div className="result-item__icon">
                    <img src={icon_diamonds} alt="" />
                  </div>
                </div>
                <div className="body-field__result-item result-item">
                  <span className="result-item__value">
                    12
                  </span>
                  <div className="result-item__icon">
                    <img src={icon_spades} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">2</div>
              <div className="body-field__result">
                <div className="body-field__result-item result-item">
                  <div className="result-item__value">
                    T
                  </div>
                  <div className="result-item__icon">
                    <img src={icon_сlubs} alt="" />
                  </div>
                </div>
                <div className="body-field__result-item result-item">
                  <span className="result-item__value">
                    2
                  </span>
                  <div className="result-item__icon">
                    <img src={icon_hearts} alt="" />
                  </div>
                </div>
                <div className="body-field__result-item result-item">
                  <span className="result-item__value">
                    1
                  </span>
                  <div className="result-item__icon">
                    <img src={icon_diamonds} alt="" />
                  </div>
                </div>
                <div className="body-field__result-item result-item">
                  <span className="result-item__value">
                    8
                  </span>
                  <div className="result-item__icon">
                    <img src={icon_spades} alt="" />
                  </div>
                </div>
              </div>

            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">3</div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">4</div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">5</div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">6</div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">7</div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">8</div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">9</div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">10</div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">11</div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">12</div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">13</div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">14</div>
            </div>
            <div className="app__body-field body-field">
              <div className="body-field__range">15</div>
            </div>
          </div>
        </div>
        <div className="app__footer footer">
          <div className="footer__container">
            <div className="footer__coefficients coefficients">
              <div className="coefficients__items">
                <div className="coefficients__item coefficients-item">
                  <div className="coefficients-item__value">
                    43%
                  </div>
                  <div className="coefficients-item__icon">
                    <img src={icon_сlubs} alt="" />
                  </div>
                </div>
                <div className="coefficients__item coefficients-item">
                  <div className="coefficients-item__value">
                    3%
                  </div>
                  <div className="coefficients-item__icon">
                    <img src={icon_hearts} alt="" />
                  </div>
                </div>
                <div className="coefficients__item coefficients-item">
                  <div className="coefficients-item__value">
                    14%
                  </div>
                  <div className="coefficients-item__icon">
                    <img src={icon_diamonds} alt="" />
                  </div>
                </div>
                <div className="coefficients__item coefficients-item">
                  <div className="coefficients-item__value">
                    40%
                  </div>
                  <div className="coefficients-item__icon">
                    <img src={icon_spades} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__hot hot">
            </div>
            <div className="footer__ice ice">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
