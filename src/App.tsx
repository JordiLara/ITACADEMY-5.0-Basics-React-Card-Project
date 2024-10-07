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

    // nextStep y prevStep, ahora se detienen al final de cada visionado.

  const nextStep = () => {
    setCurrentStep((firstStep) => Math.min(firstStep + 1, tutorialData.length - 1)); 
  };

  const prevStep = () => {
    setCurrentStep((lastStep) => Math.max(lastStep - 1, 0)); 
  };

  return (

    <div className = "carousel w-full  flex justify-center items-center App">
        <Card title = {tutorialData[currentStep].title}
            description = {tutorialData[currentStep].description}
            image = {tutorialData[currentStep].image}
            alt = {tutorialData[currentStep].alt}
            bgColor = {tutorialData[currentStep].bgColor}
            nextStep = {nextStep}
            prevStep = {prevStep}

            // lógica para que desaparezcan los botones. No hace falta addeventlistener o display:none, qué me estás contando! Lo hace React wtf

            firstStep = {currentStep === 0} // Si el currentstep cumple esta condición será el último step.
            lastStep = {currentStep === tutorialData.length - 1} // si el last step cumple la condición, será el primero.

            // Pasamos el total de pasos que tiene el array al Indicator

            totalSteps = {tutorialData.length} 

            // Pasamos el paso actual de la array al Indicator

            currentStep = {currentStep}
        />
    </div>
  );
};

export default App;
