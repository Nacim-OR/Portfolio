import React from 'react';
import { Container } from './Container';

// Importation des images pour chaque outil
import {
  logoSymfony,
  logoNodejs,
  logoExpress,
  logoReact,
  logoTypescript,
  logoMongodb,
  logoMysql,
  logoFirebase,
} from '../assets/index';

const toolsData = [
  { image: logoSymfony, nom: "Symfony" },
  { image: logoNodejs, nom: "NodeJS" },
  { image: logoExpress, nom: "Express" },
  { image: logoReact, nom: "React" },
  { image: logoTypescript, nom: "Typescript" },
  { image: logoMongodb, nom: "MongoDB" },
  { image: logoMysql, nom: "MySQL" },
  { image: logoFirebase, nom: "Firebase" },
];

export const Tools = () => {
  return (
    <section aria-labelledby="tools-heading" className="py-8">
      <Container className="bg-gradient-to-r from-[#F4C3B4] to-[#C39C90] p-8 rounded-xl shadow-lg">
        <h2 id="tools-heading" className="sr-only">Technologies et Outils Utilisés</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {toolsData.map((tool, index) => (
            <figure
              key={index}
              className="flex flex-col items-center text-center space-y-2 transform transition-transform duration-300 hover:scale-105"
              role="group"
              aria-labelledby={`tool-${index}`}
            >
              <img
                src={tool.image}
                alt={tool.nom}
                loading="lazy"
                className="h-16 w-16 object-contain transition-transform duration-300 hover:scale-110"
              />
              <figcaption
                id={`tool-${index}`}
                className="text-sm sm:text-base font-semibold text-gray-800 hover:font-bold"
              >
                {tool.nom}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Tools;
