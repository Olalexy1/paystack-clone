import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Section from './components/Section';
import {TrustCards, SponsorCards} from './components/Cards';
import {SectionTwo, SectionThree} from './components/SectionTwo';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
