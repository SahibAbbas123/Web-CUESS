import Section from "../Section";
import Hero from "../Hero";

export default function HomeSection() {
  return (
    // no horizontal padding on the section to let the gradient touch both edges
    <Section id="home" className="pt-0 px-0">
      <Hero />
    </Section>
  );
}