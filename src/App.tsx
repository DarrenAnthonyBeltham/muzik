import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturedLyricsSection from './components/FeaturedLyricsSection';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchPage />
      <HowItWorksSection />
      <FeaturedLyricsSection />
      <Footer />
    </div>
  );
}

export default App;
