import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Tools } from './components/Tools';
import { SectionsGrid } from './components/Section';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Tarif } from './components/Tarif'; // Votre nouvelle page
import MentionsLegales from './components/MentionsLegales';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Tools />
            <SectionsGrid />
            <CallToAction />
          </>
        } />
        <Route path="/tarif" element={
          <Tarif />
        }
        />
        <Route path="/mentionslegales" element={
          <MentionsLegales/>
        }
        
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
