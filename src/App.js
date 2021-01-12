
// styles
import './assets/css/gral.css';
import './assets/css/mobile.css';

// componenst
import Header from './components/Header';
import SectionManual from './components/SectionManual';
import SectionCalc from './components/SectionCalc';
import SectionCompare from './components/SectionCompare';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SectionManual />
        <SectionCalc />
        <SectionCompare />
      </main>
      <Footer />
    </div>
  );
}

export default App;
