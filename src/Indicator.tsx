import React from "react";

interface IndicatorProps {

  totalSteps: number;
  currentStep: number;
};

const Indicator: React.FunctionComponent<IndicatorProps> = ({
  totalSteps,
  currentStep,
}) => {
  return (
    <div className = "flex justify-left mt-6 mb-6">
      {/* Generamos los círculos con .map y length para que sepa cuantos circulos hay o eso he entendido */}

      {Array.from({ length: totalSteps }).map(
        (_,stepNum // utilizar _ en la función le dice a React que ahí no hay un dato que procesar
        ) => (
          <div
            key = {stepNum}
            className = {`w-3 h-3 ml-3 transition-all rounded-full ${
              // dependiendo del paso, blanqueará unas bolas u oscurecerá las otras con esta condición
              stepNum === currentStep ? "bg-black w-6 " : "bg-gray-300 "
            }`}
          ></div>
        )
      )}
    </div>
  );
};

export default Indicator;
