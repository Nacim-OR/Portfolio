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
    <section className="py-8">
      <Container className="bg-gradient-to-r from-[#F4C3B4] to-[#C39C90] p-8 rounded-xl shadow-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={tool.image}
                alt={tool.nom}
                className="h-16 w-16 object-contain transition-transform duration-300 hover:scale-110"
              />
              <p className="text-sm sm:text-base font-semibold text-gray-800 hover:font-bold">
                {tool.nom}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Tools;
