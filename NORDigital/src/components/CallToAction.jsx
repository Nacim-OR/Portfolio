import React from 'react';
import { Container } from './Container';
import { Button } from './Button';

export const CallToAction = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pb-12 px-4 ">
        <Container className="relative rounded-xl bg-gradient-to-r from-[#F4C3B4] to-[#C39C90] bg-opacity-90 p-8 md:p-12 max-w-2xl mx-auto shadow-lg transform hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Démarrez votre projet
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Si vous avez besoin d'un site vitrine plus élaboré ou d'un site e-commerce,
                    n'hésitez pas à me contacter pour une estimation via ce formulaire.
                </p>
                
                <div className="mt-6">
                    <Button
                        href="https://forms.gle/SQePZgWNcg5ucBB97"
                        target="_blank"
                        // theme="thirdary"
                        className="text-pri-a-1  bg-gradient-to-r from-pri-a-2 to-pri-c-1 px-6 py-3 text-lg font-semibold hover:scale-105"
                    >
                        Prendre contact
                    </Button>
                </div>
            </div>
        </Container>
    </section>
  );
};
