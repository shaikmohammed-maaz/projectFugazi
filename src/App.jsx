import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NexCoinLanding from './NexCoinLanding';
import AboutNexCoin from './AboutNexCoin';
import Navbar from './Navbar';
import FAQ from './FAQ';
import Download from './Download';
import WhitepaperPage from './Whitepaper';
import TeamPage from './Team';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/projectFugazi" element={<NexCoinLanding />} />
        <Route path="/about" element={<AboutNexCoin />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/download" element={<Download />} />
        <Route path="/whitepaper" element={<WhitepaperPage />} />
        <Route path="/team" element={<TeamPage/> }/>
      </Routes>
    </Router>
  );
}

export default App
