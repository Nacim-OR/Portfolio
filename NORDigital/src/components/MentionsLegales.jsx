import React from 'react';
import { Container } from './Container';

const MentionsLegales = () => {
    return (
        <section className="py-20 bg-pri-f-3  text-pri-c-2 font-sora">
            <Container className="mx-auto max-w-4xl px-6">
                <h1 className="text-4xl font-bold mb-10 text-center text-pri-c-2">Mentions Légales</h1>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">1. Informations Générales</h2>
                        <p>
                            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, nous vous informons que le présent site est édité par :
                        </p>
                        <ul className="mt-2 space-y-1">
                            <li><strong>Nom du site :</strong> NOR'Digital</li>
                            <li><strong>Responsable de publication :</strong> Nacim Ould-Rabah</li>
                            <li><strong>Adresse :</strong> Votre adresse professionnelle</li>
                            <li><strong>Téléphone :</strong> Votre numéro de téléphone</li>
                            <li><strong>Email :</strong> Votre adresse email</li>
                            <li><strong>Numéro SIRET :</strong> Votre numéro SIRET</li>
                            <li><strong>Statut :</strong> Entreprise Individuel</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">2. Hébergeur</h2>
                        <p>
                            Le site est hébergé par :
                        </p>
                        <ul className="mt-2 space-y-1">
                            <li><strong>Nom de l'hébergeur :</strong> OVH</li>
                            <li><strong>Adresse :</strong> 2 rue Kellermann - 59100 Roubaix - France</li>
                            <li><strong>Téléphone :</strong> 1007</li>
                            <li><strong>Site web :</strong> <a href="https://www.ovh.com" className="text-pri-c-1 hover:underline" target="_blank" rel="noopener noreferrer">www.ovh.com</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">3. Propriété Intellectuelle</h2>
                        <p>
                            Tous les éléments du site NOR'Digital (textes, images, logos, graphiques, etc.) sont protégés par les droits de propriété intellectuelle et ne peuvent être reproduits, utilisés ou diffusés sans l'autorisation écrite de l'éditeur.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">4. Données Personnelles</h2>
                        <p>
                            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 et au RGPD (Règlement Général sur la Protection des Données), l'utilisateur dispose d'un droit d'accès, de rectification et de suppression des données le concernant.
                        </p>
                        <p>
                            Pour toute demande relative à vos données personnelles, vous pouvez nous contacter par email à l'adresse suivante : <strong>votreadresse@email.com</strong>.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">5. Limitation de Responsabilité</h2>
                        <p>
                            NOR'Digital s'efforce de fournir des informations précises et à jour sur le site. Cependant, nous ne garantissons pas l'exactitude, l'exhaustivité ou la pertinence des informations fournies. L'utilisateur est seul responsable de l'utilisation des informations fournies sur le site.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">6. Cookies</h2>
                        <p>
                            Le site NOR'Digital utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">7. Droit Applicable</h2>
                        <p>
                            Les présentes mentions légales sont soumises au droit français. En cas de litige, et après une tentative de recherche de solution amiable, les tribunaux français seront seuls compétents.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MentionsLegales;
