import Kitchen from "../Components/kitchen";
import Introduction from "../Components/Introduction";
import FeaturesSection from "../Components/FeaturesSection";
import HowToPlaySection from "../Components/HowToPlaySection";
import GameGuide from "../Components/GameGuide";
import GameTips from "../Components/GameTips";
import Testimonials from "../Components/Testimonials";
import FAQSection from "../Components/FAQSection";

export default function Home() {
  console.log("🏠 Home - Rendering Home component");
  
  return (
    <>
      <div style={{
        height: "100dvh",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}>
        <Kitchen />
      </div>
      
      <div style={{
        minHeight: "100dvh",
        background: "#fff",
      }}>
        <Introduction />
        <FeaturesSection />
        <HowToPlaySection />
        <GameGuide />
        <GameTips />
        <Testimonials />
        <FAQSection />
      </div>
    </>
  );
} 