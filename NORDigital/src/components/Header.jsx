import React, { useState } from 'react';
import { Container } from './Container';
import { Link } from 'react-router-dom';

export const Header = () => {
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
        <header className="border-b bg-pri-c-2 border-stroke-2 relative" aria-label="Main Navigation">
            <Container className="relative">
                <nav
                    role="navigation"
                    aria-label="Primary"
                    className="relative z-10 flex flex-col md:flex-row items-center justify-between py-2 lg:py-2 space-y-2 md:space-y-0"
                >
                    <div className="flex items-center space-x-2">
                        <Link to="/" aria-label="Home" className="flex items-center space-x-2 h3">
                            <div className="flex items-center justify-center">
                                <img src="../public/logo.svg" alt="logo" className="w-24 h-24" />
                            </div>

                            <div className="relative group cursor-pointer">
                                <span className="relative">
                                    NOR Numérique
                                    <span className="absolute left-0 -bottom-1 w-full h-1 bg-pri-a-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-6">
                        <Link to="/tarif" className="text-sm md:text-base" aria-label="View Pricing">Mes tarifs</Link>
                        <a href="https://forms.gle/SQePZgWNcg5ucBB97" title="Prendre contact" target="_blank" rel="noopener noreferrer" aria-label="Contact Us">
                            Prendre contact
                        </a>

                        <div className="flex items-center space-x-3">
                            <a
                                href="#"
                                onClick={handleDownloadClick}
                                title="Télécharger mon CV"
                                aria-label="Download CV"
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1 hover:bg-pri-f-3 hover:scale-110 transition-transform duration-300"
                            >
                                <img src="https://www.svgrepo.com/show/10480/download-symbol.svg" alt="Download CV icon" className="w-4 h-4" loading="lazy" />
                            </a>

                            <a href="https://linkedin.com/in/nacim-ould-rabah" target="_blank" rel="noopener noreferrer" title="Mon LinkedIn" aria-label="LinkedIn Profile" className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1 hover:bg-pri-f-3 hover:scale-110">
                                <img src="https://img.icons8.com/ios11/512/linkedin.png" alt="LinkedIn icon" className="w-4 h-4" loading="lazy" />
                            </a>
                            <a href="https://github.com/Nacim-OR" target="_blank" rel="noopener noreferrer" title="Mon GitHub" aria-label="GitHub Profile" className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1 hover:bg-pri-f-3 hover:scale-110">
                                <img src="https://www.svgrepo.com/show/360450/github.svg" alt="GitHub icon" className="w-4 h-4" loading="lazy" />
                            </a>
                        </div>
                    </div>
                </nav>
            </Container>

            {/* Popup de confirmation de téléchargement */}
            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto text-center z-60">
                        <p className="text-lg text-pri-a-2 font-semibold mb-4">Vous êtes sur le point de télècharger mon CV ! Confirmez-vous ?</p>
                        <div className="flex justify-center space-x-4">
                            <button onClick={confirmDownload} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Oui</button>
                            <button onClick={() => setShowConfirmation(false)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Non</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
