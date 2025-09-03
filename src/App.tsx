import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AssessmentOverview from './components/AssessmentOverview';
import Benefits from './components/Benefits';
import Organizations from './components/Organizations';
import AssessmentCTA from './components/AssessmentCTA';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AssessmentOverview />
      <Benefits />
      <Organizations />
      <AssessmentCTA />
      <About />
      <Footer />
    </div>
  );
}

export default App; 