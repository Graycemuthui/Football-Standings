import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Characters from './components/Characters';

const App = () => (
  <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  </div>
);

export default App;
