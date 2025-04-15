import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Section from "@/components/section/section";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Section title="Olá!">
        <button>Oieeee</button>
      </Section>
      <Footer />
    </>
  );
}
