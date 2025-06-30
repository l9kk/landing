import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import StatSection from './components/StatSection';
import Footer from './components/Footer';
import MobileDownloadButton from './components/MobileDownloadButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MobileDownloadButton />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Take a skan */}
        <FeatureSection
          title="Take a skan"
          description="Reimagine your skincare experience by getting accurate analyses of your skin"
          imageUrl="https://www.skinai.co/static/media/appScreen1.586785607d94f59d9b57.png"
          imageAlt="Skan app screenshot showing acne analysis"
        />

        {/* Statistics 1 */}
        <StatSection
          title="9 in 10 people"
          description="experience frustration in finding skincare that works for them"
          cta="Make skincare easy for yourself."
        />

        {/* Personalized Recommendations */}
        <FeatureSection
          title="Personalized Recommendations"
          description="Get personalized recommendations catered to your skin"
          imageUrl="https://www.skinai.co/static/media/appScreen2.9e53dc60774611938b7f.png"
          imageAlt="Skan app screenshot showing personalized recommendations"
        />

        {/* Statistics 2 */}
        <StatSection
          title="2.8 months"
          description="the average time spent trying new skincare products for results"
          cta="Save your time."
        />

        {/* Track your progress - Final section with Footer */}
        <section className="sect feature">
          <div className="container">
            <div className="grid-two">
              <div className="copy">
                <h2>Track your progress</h2>
                <p>No more being unsure about how your products are working. Track your skincare journey and make real progress.</p>
              </div>
              <figure className="phone">
                <img 
                  src="https://www.skinai.co/static/media/appScreen3.48ed74b3ee0ae632f073.png" 
                  alt="Skan app screenshot showing progress tracking" 
                />
              </figure>
            </div>
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
