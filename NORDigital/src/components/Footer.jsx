import React from 'react';
import { Container } from './Container';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="border-t bg-pri-c-2 border-stroke-2 py-4" role="contentinfo" aria-labelledby="footer-heading">
            <Container className="relative">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    
                    {/* Logo */}
                    <h4 id="footer-heading" className="text-lg font-bold relative after:bg-pri-a-1 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-1000 cursor-pointer">
                        <Link to="/" aria-label="Retour à la page d'accueil">NOR'Digital</Link>
                    </h4>
                    
                    {/* Navigation Links */}
                    <nav aria-label="Liens de navigation du pied de page">
                        <ul className="flex items-center space-x-6">
                            <li><Link to="/" className="text-sm md:text-base" aria-label="À propos">À propos</Link></li>
                            <li><Link to="/mentionslegales" className="text-sm md:text-base" aria-label="Voir les mentions légales">Mentions légales</Link></li>
                        </ul>
                    </nav>

                    {/* Social Media Icons */}
                    <div className="flex items-center space-x-3" aria-label="Liens vers les réseaux sociaux">
                        <a href="https://linkedin.com/in/nacim-ould-rabah" target="_blank" rel="noopener noreferrer" title="Mon LinkedIn" aria-label="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1 hover:bg-pri-f-3 hover:scale-110">
                            <img src="https://img.icons8.com/ios11/512/linkedin.png" alt="LinkedIn icon" className="w-4 h-4" loading="lazy" />
                        </a>
                        <a href="https://github.com/Nacim-OR" target="_blank" rel="noopener noreferrer" title="Mon GitHub" aria-label="GitHub" className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1 hover:bg-pri-f-3 hover:scale-110">
                            <img src="https://www.svgrepo.com/show/360450/github.svg" alt="GitHub icon" className="w-4 h-4" loading="lazy" />
                        </a>
                        <a href="./src/assets/cv.pdf" target="_blank" download title="Télécharger mon CV" aria-label="Télécharger mon CV" className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1 hover:bg-pri-f-3 hover:scale-110">
                            <img src="https://www.svgrepo.com/show/10480/download-symbol.svg" alt="Download CV icon" className="w-4 h-4" loading="lazy" />
                        </a>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="mt-4 text-center text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} NOR'Digital. Tous droits réservés.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
