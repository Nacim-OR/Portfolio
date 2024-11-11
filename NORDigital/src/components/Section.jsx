import React, { useState } from 'react';
import ServicesCard from './ServicesCard';
import PortfolioCard from './PortfolioCard';

const cardsData = [
    {
        title: "À propos",
        description: "Apprenez-en plus sur notre parcours et nos compétences.",
        details: "Nous sommes une équipe de développeurs passionnés, prêts à vous aider à atteindre vos objectifs numériques grâce à notre expertise en développement web.",
        image: "./src/assets/ico/about.png",
    },
    // {
    //     title: "Services",
    //     description: "Découvrez les services que nous proposons pour répondre à vos besoins.",
    //     details: "Nous offrons une large gamme de services, incluant la création de sites web, le développement de solutions sur mesure, et bien plus encore.",
    //     image: "/./src/assets/ico/services.jpg",
    // },
    // {
    //     title: "Portfolio",
    //     description: "Explorez nos projets passés et notre portfolio.",
    //     details: "Nous avons réalisé de nombreux projets. Consultez notre portfolio pour voir nos réalisations.",
    //     image: "./src/assets/ico/portfolio.jpg",
    // },
    {
        title: "Prix",
        description: "Consultez nos offres et tarifs pour nos prestations.",
        details: "Nous proposons des tarifs compétitifs adaptés à chaque besoin. Contactez-nous pour une offre personnalisée.",
        image: "./src/assets/ico/tarifs.jpeg",
    },
];

export const SectionsGrid = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="py-20 ">
            <div className="container mx-auto px-6 text-center ">
                <h2 className="text-3xl text-pri-c-2 font-bold mb-10 justify-center">Découvrez moi</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
                        >
                            <div className="flex flex-col items-center space-y-4">
                                {/* Image ou icône */}
                                <img src={card.image} alt={card.title} className=" h-40 w-full object-cover " />
                                
                                {/* Titre */}
                                <h3 className="text-xl text-pri-a-1 font-semibold">{card.title}</h3>
                                
                                {/* Description */}
                                <p className="text-gray-600 text-sm">{card.description}</p>

                                {/* Contenu déplié */}
                                {expandedIndex === index && (
                                    <div className="mt-4 text-gray-700 text-sm">
                                        {card.details}
                                    </div>
                                )}

                                {/* Bouton "En savoir plus" */}
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className="mt-4 px-4 py-2 rounded-lg bg-pri-a-2 text-pri-a-1 font-bold hover:bg-pri-a-1 hover:text-pri-a-2 animate"
                                >
                                    {expandedIndex === index ? "Voir moins" : "En savoir plus"}
                                </button>
                            </div>
                        </div>
                    ))}
                    <ServicesCard/>
                    <PortfolioCard/>
                </div>
            </div>
        </section>
    );
};
