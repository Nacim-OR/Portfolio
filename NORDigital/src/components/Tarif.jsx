import React, { useState } from 'react';
import { Container } from './Container';
import { FaCheckCircle, FaChevronDown, FaChevronUp, FaKey } from 'react-icons/fa';
import { Button } from './Button';

export const Tarif = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const tarifs = [
        {
            title: "Site vitrine",
            description: "Création de pages simples, idéales pour des sites statiques ou des portfolios.",
            basePrice: "300€",
            options: [
                { type: "Basique", features: ["Design de base", "Optimisation SEO", "1 page statique"] },
                { type: "Populaire", features: ["Design personnalisé", "Optimisation SEO", "Maintenance"], recommended: true },
                { type: "Premium", features: ["Design premium", "SEO avancée", "Support prioritaire"] }
            ]
        },
        {
            title: "Landing Pages",
            description: "Pages d'accueil captivantes, conçues pour convertir les visiteurs en clients.",
            basePrice: "600€",
            options: [
                { type: "Basique", features: ["Design de base", "SEO standard", "1 page"] },
                { type: "Populaire", features: ["Design attractif", "SEO avancé", "Intégration d'analyses"], recommended: true },
                { type: "Premium", features: ["Design sur mesure", "SEO premium", "Suivi personnalisé"] }
            ]
        },
        {
            title: "E-commerce",
            description: "Solutions complètes, innovantes et adaptées pour les entreprises en ligne.",
            basePrice: "1500€",
            options: [{ type: "Pack complet", features: ["Interface utilisateur", "Paiement sécurisé", "Gestion des produits"] }]
        },
        {
            title: "TJM",
            description: "Tarif journalier pour des besoins spécifiques ou des projets personnalisés.",
            basePrice: "250€",
            options: [{ type: "Sur mesure", features: ["Analyse approfondie", "Solutions avancées"] }]
        }
    ];

    return (
        <section className="py-8 bg-hero-pattern" aria-labelledby="tarif-heading">
            <Container>
                <div className="flex justify-center items-center mb-8">
                    <FaKey className="text-yellow-500 text-4xl ml-2" aria-hidden="true" />
                    <h2 id="tarif-heading" className="text-4xl font-bold text-center text-gray-800 mx-4">Forfait clé en main</h2>
                    <FaKey className="text-yellow-500 text-4xl ml-2" aria-hidden="true" />
                </div>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {tarifs.map((tarif, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition duration-300 transform hover:scale-105"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{tarif.title}</h3>
                            <p className="text-sm text-gray-500">À partir de</p>
                            <p className="text-3xl font-extrabold text-gray-800 mb-6">{tarif.basePrice}</p>
                            <p className="text-gray-600 mb-4">{tarif.description}</p>

                            <div className="mt-6">
                                <Button
                                    href="https://forms.gle/SQePZgWNcg5ucBB97"
                                    target="_blank"
                                    aria-label={`Prendre contact pour ${tarif.title}`}
                                    theme="secondary"
                                    className="hover:scale-105"
                                >
                                    Prendre contact
                                </Button>
                            </div>

                            {tarif.options.map((option, idx) => (
                                <div key={idx} className="mb-4">
                                    <button
                                        onClick={() => toggleExpand(index + '-' + idx)}
                                        aria-expanded={expandedIndex === index + '-' + idx}
                                        aria-controls={`option-details-${index}-${idx}`}
                                        className={`w-full text-left p-4 rounded-lg ${option.recommended ? "bg-yellow-100" : "bg-gray-100"} border ${expandedIndex === index + '-' + idx ? "border-gray-300" : "border-transparent"} font-semibold text-gray-800 flex justify-between items-center transition duration-300`}
                                    >
                                        {option.type}
                                        {option.recommended && (
                                            <span className="text-xs ml-2 text-yellow-700 font-semibold">Populaire</span>
                                        )}
                                        {expandedIndex === index + '-' + idx ? (
                                            <FaChevronUp className="text-gray-500" aria-hidden="true" />
                                        ) : (
                                            <FaChevronDown className="text-gray-500" aria-hidden="true" />
                                        )}
                                    </button>

                                    {expandedIndex === index + '-' + idx && (
                                        <ul id={`option-details-${index}-${idx}`} className="mt-2 ml-4 space-y-1 text-sm text-gray-700">
                                            {option.features.map((feature, i) => (
                                                <li key={i} className="flex items-center">
                                                    <FaCheckCircle className="text-green-500 mr-2" aria-hidden="true" /> {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Tarif;
