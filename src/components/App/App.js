import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <div className='app__wrapper'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;