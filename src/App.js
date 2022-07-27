import { Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import HomePage from './components/HomePage';
import LeaguesList from './components/LeagueList';

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/leagues" element={<LeaguesList />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
