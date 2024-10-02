import React, { useState } from 'react';
import Card from './Card';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialData = [
    {
      title: 'Dedica molestes hores',
      description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicarl-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
    },
    {
      title: 'Programa projectes propis',
      description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en un projecte ajudarà a accelerar el teu aprenentatge.',
    },
    {
      title: 'Procura descansar',
      description: 'Descansar bé i desconectar són vitals. D´aquesta manera reduiràs l´estres i l´ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge',
    },
    // Agregar aquí más opciones si fuera necesario.
  ];

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  return (
    <div className="App">
      <Card title={tutorialData[currentStep].title}
            description={tutorialData[currentStep].description}
            nextStep={nextStep} />
    </div>
  );
};

export default App;
