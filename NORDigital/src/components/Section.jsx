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
    {
        title: "Prix",
        description: "Consultez nos offres et tarifs pour nos prestations.",
        details: (
            <>
                Nous proposons des tarifs compétitifs adaptés à chaque besoin. Pour plus de détails, consultez notre
                <a
                    href="/tarif"
                    className="text-pri-a-1 underline hover:text-pri-c-2 ml-1"
                    aria-label="Page des tarifs"
                >
                    page des tarifs
                </a>.
            </>
        ),
        image: "./src/assets/ico/tarifs.jpeg",
    },
];

export const SectionsGrid = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="py-20" aria-labelledby="sections-heading">
            <div className="container mx-auto px-6 text-center">
                <h2 id="sections-heading" className="text-3xl text-pri-c-2 font-bold mb-10">Découvrez moi</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
                        >
                            <div className="flex flex-col items-center space-y-4">
                                {/* Image ou icône */}
                                <img
                                    src={card.image}
                                    alt={`${card.title} image`}
                                    className="h-40 w-full object-cover rounded-lg"
                                    loading="lazy"
                                />

                                {/* Titre */}
                                <h3 className="text-xl text-pri-a-1 font-semibold">{card.title}</h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm">{card.description}</p>

                                {/* Contenu déplié */}
                                {expandedIndex === index && (
                                    <div className="mt-4 text-gray-700 text-sm" aria-live="polite">
                                        {card.details}
                                    </div>
                                )}

                                {/* Bouton "En savoir plus" */}
                                <button
                                    onClick={() => toggleExpand(index)}
                                    aria-expanded={expandedIndex === index}
                                    aria-controls={`section-content-${index}`}
                                    className="mt-4 px-4 py-2 rounded-lg bg-pri-a-2 text-pri-a-1 font-bold hover:bg-pri-a-1 hover:text-pri-a-2 transition"
                                >
                                    {expandedIndex === index ? "Voir moins" : "En savoir plus"}
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Composants supplémentaires */}
                    <ServicesCard />
                    <PortfolioCard />
                </div>
            </div>
        </section>
    );
};

export default SectionsGrid;
