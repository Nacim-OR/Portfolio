import React, { useState } from 'react';
import { Container } from './Container';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDownloadClick = (e) => {
        e.preventDefault();
        setShowConfirmation(true);
    };

    const confirmDownload = () => {
        const link = document.createElement("a");
        link.href = "./src/assets/cv.pdf";
        link.download = "cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowConfirmation(false);
    };

    return (
        <footer className="border-t bg-pri-c-2 border-stroke-2 py-4" role="contentinfo" aria-labelledby="footer-heading">
            <Container className="relative">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
                    <div className="flex items-center space-x-2">
                        <Link to="/" aria-label="Home" className="flex items-center space-x-2 h4">
                            <div className="flex-shrink-0">
                                <img src="../public/logo.svg" alt="logo" className="w-24 h-24" />
                            </div>

                            <div className="relative group cursor-pointer">
                                <span className="relative whitespace-nowrap">
                                    NOR Numérique
                                    <span className="absolute left-0 -bottom-1 w-full h-1 bg-pri-a-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <nav aria-label="Liens de navigation du pied de page">
                        <ul className="flex items-center space-x-6">
                            <li><Link to="/" className="text-sm md:text-base" aria-label="À propos">À propos</Link></li>
                            <li><Link to="/mentionslegales" className="text-sm md:text-base" aria-label="Voir les mentions légales">Mentions légales</Link></li>
                        </ul>
                    </nav>

                    <div className="flex items-center space-x-3" aria-label="Liens vers les réseaux sociaux">
                        <a href="https://linkedin.com/in/nacim-ould-rabah" target="_blank" rel="noopener noreferrer" title="Mon LinkedIn" aria-label="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1 hover:bg-pri-f-3 hover:scale-110">
                            <img src="https://img.icons8.com/ios11/512/linkedin.png" alt="LinkedIn icon" className="w-4 h-4" loading="lazy" />
                        </a>
                        <a href="https://github.com/Nacim-OR" target="_blank" rel="noopener noreferrer" title="Mon GitHub" aria-label="GitHub" className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1 hover:bg-pri-f-3 hover:scale-110">
                            <img src="https://www.svgrepo.com/show/360450/github.svg" alt="GitHub icon" className="w-4 h-4" loading="lazy" />
                        </a>
                        <a
                            href="#"
                            onClick={handleDownloadClick}
                            title="Télécharger mon CV"
                            aria-label="Download CV"
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1 hover:bg-pri-f-3 hover:scale-110"
                        >
                            <img src="https://www.svgrepo.com/show/10480/download-symbol.svg" alt="Download CV icon" className="w-4 h-4" loading="lazy" />
                        </a>
                    </div>
                </div>

                <div className="mt-4 text-center text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} NOR Numérique. Tous droits réservés.
                </div>
            </Container>

            {/* Popup de confirmation de téléchargement */}
            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto text-center z-60">
                        <p className="text-lg text-pri-a-2 font-semibold mb-4">Vous êtes sur le point de télécharger mon CV ! Confirmez-vous ?</p>
                        <div className="flex justify-center space-x-4">
                            <button onClick={confirmDownload} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Oui</button>
                            <button onClick={() => setShowConfirmation(false)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Non</button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
