import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {tutorialData} from './components/TutorialData';
import Card from './Card';

const App: React.FunctionComponent = () => {

  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState <"next" | "prev"> ("next");


  const nextStep = () => {
    setDirection("next");
    setCurrentStep((firstStep) => Math.min(firstStep + 1, tutorialData.length - 1)); 
  };

  const prevStep = () => {
    setDirection("prev");
    setCurrentStep((lastStep) => Math.max(lastStep - 1, 0)); 
  };

  const goToStep = (step: number) => {
    setDirection(step > currentStep ? "next" : "prev"); 
    setCurrentStep(step);
  };

  return (
    <div className="carousel w-full flex justify-center items-center mt-40">
      
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

          firstStep = {currentStep === 0} 

          lastStep = {currentStep === tutorialData.length - 1} 

          totalSteps = {tutorialData.length} 
    
          currentStep = {currentStep}

          goToStep = {goToStep}

          direction = {direction}
        />
      </AnimatePresence>
    </div>
  );
};

export default App;
