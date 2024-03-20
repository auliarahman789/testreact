
import './App.css';
import Kart from './pages/kart';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Kart />} />
        <Route path="/kart" element={<Kart />} />
      </Routes>

    </>
  );
};

export default App;
