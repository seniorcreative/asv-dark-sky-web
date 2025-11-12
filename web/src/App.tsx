import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItworks";
import "./App.css";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}
