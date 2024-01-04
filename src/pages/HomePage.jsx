import AuthorSection from "../components/AuthorSection/AuthorSection";
import CtaSection from "../components/CtaSection/CtaSection";
import FooterSection from "../components/FooterSection/FooterSection";
import HeroSection from "../components/HeroSection/HeroSection";

const HomePage = () => {
  return (
    <>
      <main>
        <HeroSection />
        <CtaSection />
        <AuthorSection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
};

export default HomePage;
