// cambiar a json

interface TutorialDataItem {
    title: string,
    description: string;
    alt: string;
    image: string;
    bgColor: string;

};

const tutorialData: TutorialDataItem[] = [

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

export {tutorialData};