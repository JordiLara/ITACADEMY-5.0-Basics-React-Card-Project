interface CardProps {
  //TypeScript
  title: string;
  description: string;
  image: string;
  alt: string;
  nextStep: () => void; // onClick
}

const Card: React.FunctionComponent<CardProps> = ({
  title,
  description,
  image,
  alt,
  nextStep,
}) => {
  return (
    <div className="card">
      <img src={image} alt={alt} />
      <h2> {title} </h2>
      <p>{description}</p>
      <button onClick={nextStep}> ➔ </button>
    </div>
  );
};

export default Card;
