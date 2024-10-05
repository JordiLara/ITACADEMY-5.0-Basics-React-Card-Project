import React, { useState } from 'react';
import Card from './Card';
import './App.css';

// Hook useState

const App: React.FunctionComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);


// To-DO, añadir el background color para cada carta

  const tutorialData = [
    {
      title: 'Dedica moltes hores',
      description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicarl-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      alt: 'Una noia mira un rellotge de sorra',
      image: '/images/time_managment.svg',
    },
    {
      title: 'Programa projectes propis',
      description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en un projecte ajudarà a accelerar el teu aprenentatge.',
      alt: 'Un noi treballa a l´ordinador',
      image: '/images/programming.svg',
    },
    {
      title: 'Procura descansar',
      description: 'Descansar bé i desconectar són vitals. D´aquesta manera reduiràs l´estres i l´ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge',
      alt: 'Una noia fa meditació',
      image: '/images/meditation.svg',
    },
    // Agregar aquí más opciones si fuera necesario.
  ];

  const nextStep = () => {
    setCurrentStep (prevStep => prevStep + 1);
  };

  return (

    <div className = "flex-auto App">
        <Card title = {tutorialData[currentStep].title}
            description = {tutorialData[currentStep].description}
            image = {tutorialData[currentStep].image}
            alt = {tutorialData[currentStep].alt}
            nextStep = {nextStep} />
      </div>
  );
};

export default App;
