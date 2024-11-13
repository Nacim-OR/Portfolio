import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Tools } from './components/Tools';
import { SectionsGrid } from './components/Section';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Tarif } from './components/Tarif';
import MentionsLegales from './components/MentionsLegales';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Helmet>
                <title>Accueil | NOR'Digital</title>
                <meta name="description" content="Découvrez NOR'Digital, votre partenaire pour le développement web et mobile. Transformez vos idées en réalité numérique." />
                <link rel="canonical" href="https://nordigital.com/" />
              </Helmet>
              <Hero />
              <Tools />
              <SectionsGrid />
              <CallToAction />
            </>
          } 
        />
        <Route 
          path="/tarif" 
          element={
            <>
              <Helmet>
                <title>Tarifs | NOR'Digital</title>
                <meta name="description" content="Consultez nos offres tarifaires pour les services de développement web et mobile de NOR'Digital." />
                <link rel="canonical" href="https://nordigital.com/tarif" />
              </Helmet>
              <Tarif />
            </>
          } 
        />
        <Route 
          path="/mentionslegales" 
          element={
            <>
              <Helmet>
                <title>Mentions Légales | NOR'Digital</title>
                <meta name="description" content="Découvrez les mentions légales de NOR'Digital, entreprise individuelle spécialisée en développement numérique." />
                <link rel="canonical" href="https://nordigital.com/mentionslegales" />
              </Helmet>
              <MentionsLegales />
            </>
          } 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
