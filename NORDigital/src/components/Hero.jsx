import React from 'react';
import { Container } from './Container';
import { Button } from './Button';

export const Hero = () => {
    return (
        <section className="relative bg-hero-pattern bg-cover bg-center py-20 text-white">
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Filtre sombre */}
            <Container className="relative z-10 flex flex-col items-center text-center space-y-8 animate-fadeIn">

                {/* Titre principal */}
                <h2 className="text-4xl md:text-5xl font-bold leading-tight hover:scale-105 animate">
                    Nacim Ould-Rabah
                </h2>
                <h1 className="text-2xl md:text-3xl font-semibold italic text-gray-300 hover:text-white hover:animate">
                    Ne perdez pas le cap du numérique !
                </h1>

                {/* Section description avec bordure */}
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
                    <div className="border-2 border-gray-400 p-4 rounded-lg hover:border-pri-a-1 transition duration-300 w-full md:w-1/3 text-left">
                        <h4 className="text-xl font-semibold text-pri-f-2 mb-2">Qui suis-je ?</h4>
                        <p className="text-gray-300 text-sm">
                            Développeur freelance passionné par son métier. Je mets mes compétences
                            à votre service pour tous vos projets.
                        </p>
                    </div>

                    {/* Bouton "Prendre contact" avec effets supplémentaires */}
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
                        <h4 className="text-lg font-semibold text-white mb-2">Prennez contact avec moi !</h4>
                        <Button
                            href="https://forms.gle/SQePZgWNcg5ucBB97"
                            target="_blank"
                            theme="primary"
                        >
                            Contact
                        </Button>
                    </div>
                    <Button
                        href="./src/assets/cv.pdf"
                        download
                        theme="secondary"
                        target="_blank"
                    >
                        <div className="flex flex-row items-center space-x-2">
                            <p>Télécharger mon cv </p>
                            <img src="https://www.svgrepo.com/show/10480/download-symbol.svg" className="w-6 h-6" alt="télécharger" />
                        </div>
                    </Button>
                </div>

                {/* Icônes sociales */}
                {/* <div className="flex  items-center">
                    <a href="https://linkedin.com/in/nacim-ould-rabah" target="_blank" rel="noopener noreferrer" title="mon linkedin">
                        <img src="https://img.icons8.com/ios11/512/linkedin.png" alt="LinkedIn" className="h-14 w-14  hover:opacity-80  " />
                    </a>
                    <a href="https://github.com/Nacim-OR" target="_blank" rel="noopener noreferrer" title="mon github">
                        <img src="https://www.svgrepo.com/show/360450/github.svg" alt="GitHub" className="h-12 w-12 hover:opacity-80" />
                    </a>
                </div> */}
            </Container>
        </section>
    );
};
