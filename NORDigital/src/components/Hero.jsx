import React from 'react';
import { Container } from './Container';
import { Button } from './Button';

export const Hero = () => {
    return (
        <section className="relative bg-hero-pattern bg-cover bg-center py-10 text-white">
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Filtre sombre */}
            <Container className="relative z-10 flex flex-col items-center text-center space-y-8 animate-fadeIn max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Titre principal et sous-titre */}
                <div className="space-y-2">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight hover:scale-105 transition-transform">
                        Nacim Ould-Rabah
                    </h2>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold italic text-gray-300 hover:text-white transition-colors">
                        Ne perdez pas le cap du numérique !
                    </h1>
                </div>

                {/* Section avec les cartes et la photo au centre */}
                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 w-full mt-6">
                    
                    {/* Carte "Qui suis-je ?" à gauche */}
                    <div className="flex-1 max-w-xs bg-white bg-opacity-20 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-500 text-left hover:bg-pri-c-1 group transform transition duration-300 hover:scale-105">
                        <h4 className="text-lg sm:text-xl font-semibold text-pri-c-1 mb-2 group-hover:text-white">Qui suis-je ?</h4>
                        <p className="text-white text-sm sm:text-base group-hover:text-white leading-relaxed">
                            Développeur freelance passionné par le numérique, j'accompagne entreprises et particuliers dans leurs projets. Je propose des solutions modernes, efficaces et adaptées aux besoins de chaque client. Mon objectif est d'aider mes partenaires à prospérer dans le monde numérique.
                        </p>
                    </div>

                    {/* Carte de la photo de profil au centre */}
                    <div className="flex-shrink-0 max-w-xs order-first md:order-none lg:order-none mb-6 bg-white bg-opacity-20 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-500 flex items-center justify-center hover:bg-pri-c-1 group transform transition duration-300 hover:scale-105 mt-6 md:mt-0">
                        <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-pri-a-1">
                            <img src="./src/assets/hero/moi.jpg" alt="Nacim Ould-Rabah" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Carte "Mes compétences" à droite */}
                    <div className="flex-1 max-w-xs bg-white bg-opacity-20 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-500 text-left hover:bg-pri-c-1 group transform transition duration-300 hover:scale-105 mt-6 md:mt-0">
                        <h4 className="text-lg sm:text-xl font-semibold text-pri-c-1 mb-2 group-hover:text-white">Mes compétences</h4>
                        <ul className="text-white text-sm sm:text-base list-disc list-inside space-y-1 group-hover:text-white leading-relaxed">
                            <li>Développement Web (React, NodeJS, Symfony) pour des applications performantes et réactives</li>
                            <li>Responsive Design et UX/UI</li>
                            <li>Optimisation des performances pour une meilleure expérience utilisateur</li>
                            <li>Gestion de projet et communication</li>
                        </ul>
                    </div>
                </div>

                {/* Bouton de contact en dessous */}
                <div className="mt-6">
                    <Button
                        href="https://forms.gle/SQePZgWNcg5ucBB97"
                        target="_blank"
                        theme="primary"
                        className="hover:scale-105"
                    >
                        Prendre contact
                    </Button>
                </div>
            </Container>
        </section>
    );
};
