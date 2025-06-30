import './StatSection.css';

interface StatSectionProps {
  title: string;
  description: string;
  cta: string;
}

const StatSection = ({ title, description, cta }: StatSectionProps) => {
  return (
    <section className="sect stat">
      <div className="container stat-inner">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="strong">{cta}</p>
      </div>
    </section>
  );
};

export default StatSection;
