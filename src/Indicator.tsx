import React from 'react';

interface IndicatorProps {

  totalSteps: number;
  currentStep: number;
}

const Indicator: React.FunctionComponent<IndicatorProps> = ({ totalSteps, currentStep }) => {
  return (

    <div className = "flex justify-center mt-4">

      {/* Generamos los círculos con .map y length para que sepa cuantos circulos hay o eso he entendido */}

      {Array.from({ length: totalSteps }).map((_ ,index) => ( // utilizar _ en la función le dice a React que ahí no hay un dato que procesar
        <div
          key = {index} 
          className = {`w-3 h-3 mx-1 rounded-full ${ // dependiendo del paso, blanqueará unas bolas u oscurecerá las otras con esta condición
            index === currentStep ? 'bg-black' : 'bg-gray-300'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Indicator;