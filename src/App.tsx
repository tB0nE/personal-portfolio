import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/Landing/LandingPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import CVPage from './pages/CV/CVPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="cv" element={<CVPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
