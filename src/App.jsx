import React, { useState, useEffect } from 'react';
import { useStatisticsQuery } from "./hooks/useStatisticsQuery"
import Loader from './components/Loader'
import './App.scss';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"

const transformObjectToArray = (obj) => {
  const result = [];
  for (let i = 1; i <= 4; i++) {
    result.push({
      num: obj[`num${i}`],
      suit: obj[`suit${i}`]
    });
  }
  return result;
};

const transformData = (data) => {
  return Object.entries(data).map(([key, value]) => {
    const [rank, suit] = key.split('_');
    return {
      suit,
      rank,
      count: value.count,
      percent: value.percent
    };
  });
};

const transformSuitData = (data) => {
  return Object.entries(data).map(([suit, details]) => ({
    suit,
    count: details.count,
    percent: details.percent,
  }));
};


const App = () => {
  const { data, isLoading, isSuccess, error } = useStatisticsQuery()
  const [resultBody, setResultBody] = useState([])
  const [resultIce, setResultIce] = useState([])
  const [resultHot, setResultHot] = useState([])
  const [resultSuit, setResultSuit] = useState([])

  const { hot, ice, lastround, suit, jackpot } = isSuccess && data
  console.log(data);

  useEffect(() => {
    if (isSuccess) {
      setResultBody(lastround.map(transformObjectToArray))
      setResultHot(transformData(hot))
      setResultIce(transformData(ice))
      setResultSuit(transformSuitData(suit))
    }
  }, [data])

  return (
    <div className="wrapper">
      <div className="app">
        {
          isLoading
            ?
            <Loader />
            :
            <>
              {isSuccess && <Header jackpot={jackpot} />}
              {isSuccess && <Body resultBody={resultBody} />}
              {isSuccess && <Footer resultHot={resultHot} resultIce={resultIce} resultSuit={resultSuit} />}
            </>
        }
      </div>
    </div>
  );
};

export default App;
