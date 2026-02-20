import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/Landing/LandingPage';
import ProfessionalPage from './pages/Professional/ProfessionalPage';
import PersonalPage from './pages/Personal/PersonalPage';
import CVPage from './pages/CV/CVPage';
import AboutPage from './pages/About/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="professional" element={<ProfessionalPage />} />
          <Route path="creative" element={<PersonalPage />} />
          <Route path="cv" element={<CVPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
