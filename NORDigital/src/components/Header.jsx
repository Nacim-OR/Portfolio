import React from 'react';
import { Container } from './Container';

export const Header = () => {
    return (
        <section id="header" className="border-b bg-pri-c-2 border-stroke-2">
            <Container className="relative">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between py-4 lg:py-4 space-y-4 md:space-y-0">
                    
                    {/* Logo */}
                    <div className="flex items-center">
                        <h4 className="h3 relative after:bg-pri-a-1 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-1000 cursor-pointer">
                            NOR'Digital
                        </h4>
                    </div>

                    {/* Navigation Links and Icons */}
                    <div className="flex items-center space-x-6">
                        <a href="" className="text-sm md:text-base">Mes tarifs</a>
                        <a href="" className="text-sm md:text-base">Prendre contact</a>
                        
                        
                        {/* Icons */}
                        <div className="flex items-center space-x-3">
                            <a href="./src/assets/cv.pdf" target="_blank" download title="Télécharger mon CV" className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1 hover:bg-pri-f-3 hover:scale-110">
                                <img src="https://www.svgrepo.com/show/10480/download-symbol.svg" alt="télécharger mon cv" className="w-4 h-4" />
                            </a>
                            <a href="https://linkedin.com/in/nacim-ould-rabah" target="_blank" rel="noopener noreferrer" title="Mon LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1  hover:bg-pri-f-3 hover:scale-110">
                                <img src="https://img.icons8.com/ios11/512/linkedin.png" alt="LinkedIn" className="w-4 h-4" />
                            </a>
                            <a href="https://github.com/Nacim-OR" target="_blank" rel="noopener noreferrer" title="Mon GitHub" className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1  hover:bg-pri-f-3 hover:scale-110">
                                <img src="https://www.svgrepo.com/show/360450/github.svg" alt="GitHub" className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
