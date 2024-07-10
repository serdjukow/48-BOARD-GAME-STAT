import './App.scss';
import icon_сlubs from "./assets/images/сlubs.png";
import icon_hearts from "./assets/images/hearts.png";
import icon_spades from "./assets/images/spades.png";
import icon_diamonds from "./assets/images/diamonds.png";

const App = () => {
  return (
    <div className="wrapper">
      <div className="app">
        <div className="app__header header">
          <div className="header__jackpot-value">1,003,996</div>
        </div>
        <div className="app__body">
          <div className="app__body-fields">

            <div className="app__body-field body-field">
              <div className="body-field__range">2</div>

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
              <div className="body-field__range">1</div>

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
          </div>
        </div>
        <div className="app__footer">footer</div>
      </div>
    </div>
  );
};

export default App;
