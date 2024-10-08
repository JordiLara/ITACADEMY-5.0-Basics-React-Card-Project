import React from "react";

interface IndicatorProps {

  totalSteps: number;
  currentStep: number;
  goToStep: (step: number) => void;
};

const Indicator: React.FunctionComponent<IndicatorProps> = ({
  totalSteps,
  currentStep,
  goToStep,
}) => {
  return (
    <div className = "flex justify-left mt-6 mb-6">
      {/* Generamos los círculos con .map y length para que sepa cuantos circulos hay o eso he entendido */}

      {Array.from({ length: totalSteps }).map(
        (_,stepNum // utilizar _ en la función le dice a React que ahí no hay un dato que procesar
        ) => (
          <div
            key = {stepNum}
            onClick = {() => goToStep(stepNum)} 
            className = {`w-3 h-3 ml-3 transition-all rounded-full ${
              stepNum === currentStep ? "bg-black w-6" : "bg-gray-300"}`}>    
          </div>   
        )
      )}
    </div>
  );
};

export default Indicator;
