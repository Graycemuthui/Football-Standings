import { Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
