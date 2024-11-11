import React from 'react';
import ReactDOM from 'react-dom';

const Popup = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            {/* Arrière-plan semi-transparent */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
                onClick={onClose}
            />

            {/* Fenêtre pop-up responsive */}
            <div
                className="fixed z-50 bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-full w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 h-3/4 overflow-y-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                onClick={(e) => e.stopPropagation()} // Empêcher la fermeture en cliquant dans le pop-up
            >
                {/* Bouton de fermeture en haut à droite */}
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="text-white bg-red-600 rounded-full p-2 hover:bg-red-700 focus:outline-none"
                    >
                        ✖
                    </button>
                </div>

                {/* Contenu du pop-up */}
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-pri-a-2 mb-4">{title}</h2>
                    <div className="text-gray-700">
                        {children}
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal-root')
    );
};

export default Popup;
