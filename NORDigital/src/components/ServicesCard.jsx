import React, { useState } from 'react';
import Popup from './Popup';
import { FaCogs, FaMobileAlt, FaDatabase, FaShoppingCart, FaTools, FaNetworkWired } from 'react-icons/fa';

const cardsData = [
    {
        title: "Intégration Web",
        description: "Développement et déploiement d'application web selon les besoins spécifiques des clients.",
        icon: <FaCogs className="text-pri-a-1 text-lg" />,
    },
    {
        title: "App Mobile",
        description: "Développement d’applications pour iOS et Android via React Native, offrant des solutions intégrées.",
        icon: <FaMobileAlt className="text-pri-a-1 text-lg" />,
    },
    {
        title: "REST API",
        description: "Conception et développement d’API pour permettre l’interaction entre différentes applications.",
        icon: <FaNetworkWired className="text-pri-a-1 text-lg" />,
    },
    {
        title: "Maintenance",
        description: "Maintenance et mise à niveau des systèmes pour garantir leur performance.",
        icon: <FaTools className="text-pri-a-1 text-lg" />,
    },
    {
        title: "Solution E-commerce",
        description: "Développement de plateformes de commerce électronique avec paniers d'achat et systèmes de paiement sécurisés.",
        icon: <FaShoppingCart className="text-pri-a-1 text-lg" />,
    },
    {
        title: "Gestion de base de données",
        description: "Déploiement et gestion de bases de données pour assurer la performance des applications.",
        icon: <FaDatabase className="text-pri-a-1 text-lg" />,
    },
];

const ServicesCard = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 animate">
            <div className="flex flex-col items-center space-y-4">
                <img src="./src/assets/ico/services.jpg" alt="Services" className="h-40 w-full object-cover" />
                <h3 className="text-xl text-pri-a-1 font-semibold">Services</h3>
                <p className="text-gray-600 text-sm">Découvrez les services que nous proposons pour répondre à vos besoins.</p>

                <button
                    onClick={openPopup}
                    className="mt-4 px-4 py-2 rounded-lg bg-pri-a-2 text-pri-a-1 font-bold hover:bg-pri-a-1 hover:text-pri-a-2 animate"
                >
                    En savoir plus
                </button>

                {/* Popup pour les services */}
                {isPopupOpen && (
                    <Popup isOpen={isPopupOpen} onClose={closePopup} title="Nos Services">
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                            {cardsData.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-pri-f-3  p-4 rounded-lg shadow-md flex flex-col items-center space-y-2 transition duration-300 hover:scale-105 transform"
                                >
                                    {/* Icône + Titre */}
                                    <div className="flex items-center space-x-2">
                                        {card.icon} {/* Icône spécifique de chaque carte */}
                                        <h3 className="text-lg font-black text-pri-a-4">{card.title}</h3>
                                    </div>
                                    
                                    {/* Description */}
                                    <p className="text-pri-a-2 text-center text-sm">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </Popup>
                )}
            </div>
        </div>
    );
};

export default ServicesCard;
