import React from 'react';
import { Helmet } from 'react-helmet';  // Utilisation de react-helmet pour les balises meta et le SEO
import { Container } from './Container';

const encodeInfo = (info) => {
    return info.split('').map((char) => `&#${char.charCodeAt(0)};`).join('');
};

const MentionsLegales = () => {
    const email = encodeInfo("nacim.ouldrabah@gmail.com");
    const phone = encodeInfo("06.67.34.77.85");
    const address = encodeInfo("42 rue du Maréchal Joffre 62220 CARVIN");

    return (
        <main className="py-20 bg-pri-f-3 text-pri-c-2 font-sora">
            {/* SEO Optimization with react-helmet */}
            <Helmet>
                <title>Mentions Légales | NOR'Digital</title>
                <meta name="description" content="Consultez les mentions légales de NOR'Digital, entreprise individuelle spécialisée dans la création et développement web." />
                <link rel="canonical" href="https://nordigital.com/mentionslegales" />
                <meta name="robots" content="index, follow" />

                {/* Structured Data for Organization */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "Organization",
                        "name": "NOR'Digital",
                        "url": "https://nordigital.com",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "42 rue du Maréchal Joffre",
                            "addressLocality": "CARVIN",
                            "postalCode": "62220",
                            "addressCountry": "FR"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+33-6-67-34-77-85",
                            "contactType": "Customer Service"
                        }
                    })}
                </script>
            </Helmet>

            <Container className="mx-auto max-w-4xl px-6">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-pri-c-2">Mentions Légales</h1>
                </header>

                <section className="space-y-8">
                    <article>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">1. Informations Générales</h2>
                        <p>
                            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, nous vous informons que le présent site est édité par :
                        </p>
                        <ul className="mt-2 space-y-1">
                            <li><strong>Nom du site :</strong> NOR'Digital</li>
                            <li><strong>Responsable de publication :</strong> Nacim Ould-Rabah</li>
                            <li>
                                <strong>Adresse :</strong>
                                <a href={`https://www.google.com/maps/search/?api=1&query=42+rue+du+Maréchal+Joffre+62220+CARVIN`} className="text-pri-c-1 hover:underline" target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: address }}></a>
                            </li>
                            <li>
                                <strong>Téléphone :</strong>
                                <a href={`tel:${phone}`} className="text-pri-c-1 hover:underline" dangerouslySetInnerHTML={{ __html: phone }}></a>
                            </li>
                            <li>
                                <strong>Email :</strong>
                                <a href={`mailto:${email}`} className="text-pri-c-1 hover:underline" dangerouslySetInnerHTML={{ __html: email }}></a>
                            </li>
                            <li><strong>Numéro SIRET :</strong> Votre numéro SIRET</li>
                            <li><strong>Statut :</strong> Entreprise Individuelle (BNC)</li>
                        </ul>
                    </article>

                    <article>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">2. Hébergeur</h2>
                        <p>Le site est hébergé par :</p>
                        <ul className="mt-2 space-y-1">
                            <li><strong>Nom de l'hébergeur :</strong> OVH</li>
                            <li><strong>Adresse :</strong> 2 rue Kellermann - 59100 Roubaix - France</li>
                            <li><strong>Téléphone :</strong> 1007</li>
                            <li><strong>Site web :</strong> <a href="https://www.ovh.com" className="text-pri-c-1 hover:underline" target="_blank" rel="noopener noreferrer">www.ovh.com</a></li>
                        </ul>
                    </article>

                    <article>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">3. Propriété Intellectuelle</h2>
                        <p>
                            Tous les éléments du site NOR'Digital (textes, images, logos, graphiques, etc.) sont protégés par les droits de propriété intellectuelle et ne peuvent être reproduits, utilisés ou diffusés sans l'autorisation écrite de l'éditeur.
                        </p>
                    </article>

                    <article>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">4. Données Personnelles</h2>
                        <p>
                            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 et au RGPD (Règlement Général sur la Protection des Données), l'utilisateur dispose d'un droit d'accès, de rectification et de suppression des données le concernant.
                        </p>
                        <p>
                            Pour toute demande relative à vos données personnelles, vous pouvez nous contacter par email à l'adresse suivante : <a href={`mailto:${email}`} className="text-pri-c-1 hover:underline" dangerouslySetInnerHTML={{ __html: email }}></a>.
                        </p>
                    </article>

                    <article>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">5. Limitation de Responsabilité</h2>
                        <p>
                            NOR'Digital s'efforce de fournir des informations précises et à jour sur le site. Cependant, nous ne garantissons pas l'exactitude, l'exhaustivité ou la pertinence des informations fournies. L'utilisateur est seul responsable de l'utilisation des informations fournies sur le site.
                        </p>
                    </article>

                    <article>
                        <h2 className="text-2xl font-semibold text-pri-c-2 mb-4">6. Droit Applicable</h2>
                        <p>
                            Les présentes mentions légales sont soumises au droit français. En cas de litige, et après une tentative de recherche de solution amiable, les tribunaux français seront seuls compétents.
                        </p>
                    </article>
                </section>
            </Container>
        </main>
    );
};

export default MentionsLegales;
