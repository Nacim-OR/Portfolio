import React from 'react';
import { Container } from './Container';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="border-b bg-pri-c-2 border-stroke-2" aria-label="Main Navigation">
            <Container className="relative">
                <nav role="navigation" aria-label="Primary" className="relative z-10 flex flex-col md:flex-row items-center justify-between py-4 lg:py-4 space-y-4 md:space-y-0">
                    
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link 
                            to="/" 
                            aria-label="Home" 
                            className="h3 relative after:bg-pri-a-1 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-1000 cursor-pointer"
                        >
                            NOR'Digital
                        </Link>
                    </div>

                    {/* Navigation Links and Icons */}
                    <div className="flex items-center space-x-6">
                        <Link to="/tarif" className="text-sm md:text-base" aria-label="View Pricing">Mes tarifs</Link>
                        <a href="https://forms.gle/SQePZgWNcg5ucBB97" title="Prendre contact" target="_blank" rel="noopener noreferrer" aria-label="Contact Us">
                            Prendre contact
                        </a>
                        
                        {/* Social and Download Icons */}
                        <div className="flex items-center space-x-3">
                            <a href="./src/assets/cv.pdf" target="_blank" download title="Télécharger mon CV" aria-label="Download CV" className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1 hover:bg-pri-f-3 hover:scale-110">
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
        </header>
    );
};

export default Header;
