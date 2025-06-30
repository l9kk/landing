import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="sect hero">
      <div className="container hero-inner">
        <h1 className="hero-big">Your pocket-sized<br />skincare guru.</h1>
        <p className="lead">Take a photo and receive instant, personalized skincare recommendations.</p>
        <p className="lead">Say goodbye to confusion and costly mistakes.</p>
        <p className="lead strong">Discover your path to radiant, healthy skin.</p>
      </div>
    </section>
  );
};

export default HeroSection;
