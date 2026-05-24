import ChooseUs from "../components/ChooseUs/ChooseUs";
import DocumentsSection from "../components/DocumentsSection/DocumentsSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import PartnersSection from "../components/PartnersSection/PartnersSection";
import ProfessionSection from "../components/Professions/Professions";

export default function Home() {
  return (
    <>
      <Header />

      <div className="h-[106px]" />

      <section id="home">
        <Hero />
      </section>

      <section id="advantages">
        <ChooseUs />
      </section>

      <section id="professions">
        <ProfessionSection />
      </section>

      <section id="documents">
        <DocumentsSection />
      </section>

      <PartnersSection />

      <section id="contacts">
        <Footer />
      </section>
    </>
  );
}