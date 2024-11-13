import React, { useState } from 'react';
import Popup from './Popup';

const projects = [
    {
        title: "RealWeb Studio",
        image: "./src/assets/bullet-points/projet1.png",
        languages: "React, Tailwind CSS, Firebase",
        url: "https://belotflorent.fr/",
    },
    {
        title: "CleanThis",
        image: "./src/assets/bullet-points/projet2.png",
        languages: "PHP, Symfony, MySQL, React, MongoDB, NodeJS, Express",
        url: null,
    },
    {
        title: "Imagin'hair by Isabelle",
        image: "./src/assets/bullet-points/projet3.png",
        languages: "React, Tailwind CSS, Shadcn",
        url: "https://imaginhairbyisabelle.ovh/",
    },
    {
        title: "Compte rendu d'activité",
        image: "./src/assets/bullet-points/projet4.png",
        languages: "React, Tailwind CSS, Shadcn, NodeJS, Express, MySQL",
        url: null,
    },
];

const PortfolioCard = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState({});

    const openPopup = (project) => {
        setPopupContent(project);
        setIsPopupOpen(true);
    };

    const closePopup = () => setIsPopupOpen(false);

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="flex flex-col items-center space-y-4">
                <img src="./src/assets/ico/portfolio.jpg" alt="Portfolio" className="h-40 w-full object-cover" />
                <h3 className="text-xl text-pri-a-1 font-semibold">Portfolio</h3>
                <p className="text-gray-600 text-sm">Explorez nos projets passés et notre portfolio.</p>
                
                <button
                    onClick={() => setIsPopupOpen(true)}
                    className="mt-4 px-4 py-2 rounded-lg bg-pri-a-2 text-pri-a-1 font-bold hover:bg-pri-a-1 hover:text-pri-a-2 transition"
                    aria-label="Afficher le portfolio en détails"
                >
                    En savoir plus
                </button>

                {isPopupOpen && (
                    <Popup isOpen={isPopupOpen} onClose={closePopup} title="Portfolio">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-pri-a-1 rounded-lg">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white bg-opacity-50 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                                    onClick={() => project.url ? window.open(project.url, "_blank", "noopener noreferrer") : openPopup(project)}
                                    aria-label={`Voir les détails de ${project.title}`}
                                >
                                    <img
                                        src={project.image}
                                        alt={`Aperçu du projet ${project.title}`}
                                        className="h-32 w-full object-cover rounded-lg"
                                        loading="lazy"
                                    />
                                    
                                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-center text-white font-bold p-4">
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                                            <p className="text-sm">{project.languages}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Popup>
                )}
            </div>
        </div>
    );
};

export default PortfolioCard;
