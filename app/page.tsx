import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/Contact";
import ProjectSection from "./components/Projects";
export default function Home() {
  return (
    <main className="scroll-smooth pt-20">
      <HomeSection />
      <div className="flex justify-center">
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
      </div>
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}