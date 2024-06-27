import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/Landing/LandingPage';
import Skills from './pages/Skills/Skills';
import ProjectsPage from './pages/Projects/ProjectsPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <LandingPage />
        <Skills />
        <ProjectsPage />
      </main>
      <Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
