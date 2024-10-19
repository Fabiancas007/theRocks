import { Benefits } from "./publicHome/Benefits";
import { Contact } from "./userHome/support/Contact";
import { Features } from "./publicHome/Features";
import { Hero } from "./publicHome/Hero";
import { HowItsWork } from "./publicHome/HowItsWork";

export const PublicHome = () => {
  return (
    // Contenedor de Home
    <main>
      <Hero />
      <Features />
      <HowItsWork />
      <Benefits />
      <Contact />
    </main>
  );
};
