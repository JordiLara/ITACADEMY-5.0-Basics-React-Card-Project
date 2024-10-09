import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Card from './Card';

// Hook useState

const App: React.FunctionComponent = () => {

  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState <"next" | "prev"> ("next");

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
    // add more options here if needed.
  ];

    // nextStep and prevStep, now ends at the end of each ending (left and right). 
    // added logic for the animation.

  const nextStep = () => {
    setDirection("next");
    setCurrentStep((firstStep) => Math.min(firstStep + 1, tutorialData.length - 1)); 
  };

  const prevStep = () => {
    setDirection("prev");
    setCurrentStep((lastStep) => Math.max(lastStep - 1, 0)); 
  };

    /* Already we have the setCurrentStep data, so we pass it to goToStep to pass it afterwards to the Indicator */

  const goToStep = (step: number) => {
    setDirection(step > currentStep ? "next" : "prev"); 
    setCurrentStep(step);
  };

  return (

    <div className="carousel w-full flex justify-center items-center">
      
      <AnimatePresence mode = "wait">
        <Card
          key = {currentStep} 
          title = {tutorialData[currentStep].title}
          description = {tutorialData[currentStep].description}
          image = {tutorialData[currentStep].image}
          alt = {tutorialData[currentStep].alt}
          bgColor = {tutorialData[currentStep].bgColor}
          nextStep = {nextStep}
          prevStep = {prevStep}

          // logic to make the buttons, diseapear. 

          firstStep = {currentStep === 0} 

          lastStep = {currentStep === tutorialData.length - 1} 

          // We pass the total paths on the array to the Indicator

          totalSteps = {tutorialData.length} 
          
          // Give the actual path of the array to the Indicator

          currentStep = {currentStep}

          goToStep = {goToStep}

          direction = {direction}
        />
      </AnimatePresence>
    </div>
  );
};

export default App;
