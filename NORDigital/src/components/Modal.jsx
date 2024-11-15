import React, { useState } from 'react';

// Composant Modal personnalisé
const Modal = ({ onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
                <p className="text-gray-700 mb-6">Voulez-vous vraiment télécharger ce fichier ?</p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Oui
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Non
                    </button>
                </div>
            </div>
        </div>
    );
};


const DownloadButton = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDownloadClick = (e) => {
        e.preventDefault();
        setShowConfirmation(true);
    };

    const confirmDownload = () => {
        const link = document.createElement("a");
        link.href = "./src/assets/cv.pdf";
        link.download = "cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowConfirmation(false);
    };

    return (
        <div className="relative">
            <a
                href="#"
                onClick={handleDownloadClick}
                title="Télécharger mon CV"
                aria-label="Télécharger le CV"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-pri-a-1 hover:bg-pri-f-3 hover:scale-110 transition-transform duration-300"
            >
                <img src="https://www.svgrepo.com/show/10480/download-symbol.svg" alt="Download CV icon" className="w-4 h-4" loading="lazy" />
            </a>

            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto text-center z-60">
                        <p className="text-lg font-semibold mb-4">Voulez-vous vraiment télécharger ce fichier ?</p>
                        <div className="flex justify-center space-x-4">
                            <button onClick={confirmDownload} className="bg-pri-a-1 text-white rounded px-4 py-2">Oui</button>
                            <button onClick={() => setShowConfirmation(false)} className="text-pri-a-1 border border-pri-a-1 rounded px-4 py-2">Non</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DownloadButton;
