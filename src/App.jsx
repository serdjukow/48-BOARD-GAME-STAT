import './App.scss';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"


const App = () => {

  return (
    <div className="wrapper">
      <div className="app">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default App;
