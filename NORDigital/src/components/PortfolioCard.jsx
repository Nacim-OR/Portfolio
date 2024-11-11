import React, { useState } from 'react';
import Popup from './Popup';

const PortfolioCard = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="flex flex-col items-center space-y-4">
                <img src="./src/assets/ico/portfolio.jpg" alt="Portfolio" className="h-40 w-full object-cover" />
                <h3 className="text-xl text-pri-a-1 font-semibold">Portfolio</h3>
                <p className="text-gray-600 text-sm">Explorez nos projets passés et notre portfolio.</p>
                
                <button
                    onClick={openPopup}
                    className="mt-4 px-4 py-2 rounded-lg bg-pri-a-2 text-pri-a-1 font-bold hover:bg-pri-a-1 hover:text-pri-a-2 animate"
                >
                    En savoir plus
                </button>

                {/* Popup pour le portfolio */}
                {isPopupOpen && (
                    <Popup isOpen={isPopupOpen} onClose={closePopup} title="Portfolio">
                        <p>Nous avons réalisé de nombreux projets. Consultez notre portfolio pour voir nos réalisations.</p>
                    </Popup>
                )}
            </div>
        </div>
    );
};

export default PortfolioCard;
