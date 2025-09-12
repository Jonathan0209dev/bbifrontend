import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AssessmentOverview from './components/AssessmentOverview';
import Benefits from './components/Benefits';
import Organizations from './components/Organizations';
import AssessmentCTA from './components/AssessmentCTA';
import About from './components/About';
import Footer from './components/Footer';
import OnboardingFlow from './components/onboarding/OnboardingFlow';

// Landing Page Component
const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <AssessmentOverview />
    <Benefits />
    <Organizations />
    <AssessmentCTA />
    <About />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboarding/*" element={<OnboardingFlow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 