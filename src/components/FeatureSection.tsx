import './FeatureSection.css';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const FeatureSection = ({ 
  title, 
  description, 
  imageUrl, 
  imageAlt 
}: FeatureSectionProps) => {
  return (
    <section className="sect feature">
      <div className="container grid-two">
        <div className="copy">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <figure className="phone">
          <img src={imageUrl} alt={imageAlt} />
        </figure>
      </div>
    </section>
  );
};

export default FeatureSection;
