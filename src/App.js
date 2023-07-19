
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Main from './components/Main';

function App() {
  return (
    <section>
      <section className='Window shadow-1'>
        <Header />
        <Home />
        <Main />
        <Footer />
      </section>
      <div style={{height:50}}></div>
    </section>
  );
}

export default App;
