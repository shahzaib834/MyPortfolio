import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Main from './components/Projects/Main';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import initTiltEffect from './scripts/tiltAnimation';

const App = () => {
  initTiltEffect();

  return (
    <div>
      <Header />
      <About />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
