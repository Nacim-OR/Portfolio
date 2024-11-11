import React, { useState } from 'react';
import Popup from './Popup';

const ServicesCard = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 animate">
            <div className="flex flex-col items-center space-y-4 ">
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
                    <Popup isOpen={isPopupOpen} onClose={closePopup} title="Services">
                        <p>Nous offrons une large gamme de services, incluant la création de sites web, le développement de solutions sur mesure, et bien plus encore.</p>
                    </Popup>
                )}
            </div>
        </div>
    );
};

export default ServicesCard;
