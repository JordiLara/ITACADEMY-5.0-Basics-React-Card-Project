import React, { useState } from 'react';
import Card from './Card';

// Hook useState

const App: React.FunctionComponent = () => {

  const [currentStep, setCurrentStep] = useState(0);

  const tutorialData = [
    {
      title: 'Dedica moltes hores',
      description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicarl-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      alt: 'Una noia mira un rellotge de sorra',
      image: '/images/time_managment.svg',
      bgColor: '#4da2a9',
    },
    {
      title: 'Programa projectes propis',
      description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en un projecte ajudarà a accelerar el teu aprenentatge.',
      alt: "Un noi treballa a l'ordinador",
      image: '/images/programming.svg',
      bgColor: '#d3d4d9',
    },
    {
      title: 'Procura descansar',
      description: "Descansar bé i desconectar són vitals. D'aquesta manera reduiràs l'estres i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge",
      alt: 'Una noia fa meditació',
      image: '/images/meditation.svg',
      bgColor: '#ffd167',
    },
    // Agregar aquí más opciones si fuera necesario.
  ];

    // To-DO cambiar esto a que solo vaya de adelante a atrás

  const nextStep = () => {
    setCurrentStep((actualStep) => (actualStep + 1) % tutorialData.length); // Reiniciar al llegar al final
  };

  const prevStep = () => {
    setCurrentStep((antStep) => (antStep - 1) % tutorialData.length); // Reiniciar al llegar al final
  };

  return (

    <div className = "carousel w-full  flex justify-center items-center App">
        <Card title = {tutorialData[currentStep].title}
            description = {tutorialData[currentStep].description}
            image = {tutorialData[currentStep].image}
            alt = {tutorialData[currentStep].alt}
            bgColor = {tutorialData[currentStep].bgColor}
            nextStep = {nextStep}
            prevStep = {prevStep} />
      </div>
  );
};

export default App;
