import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import BitcoinRates from './pages/BitcoinRates';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bitcoin-rates" element={<BitcoinRates />} />
    </Routes>
  );
};

export default App;
