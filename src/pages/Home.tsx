import { useEffect, useState } from "react";
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 当滚动超过一个屏幕高度时显示按钮
      const shouldShow = window.scrollY > window.innerHeight;
      setShowScrollTop(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // 添加自定义滚动行为
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
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

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: '#1976d2',
            color: '#fff',
            width: '3.5rem',
            height: '3.5rem',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            fontSize: '1.8rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = '#1565c0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#1976d2';
          }}
        >
          <span style={{
            display: 'block',
            width: '24px',
            height: '24px',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          }}></span>
        </button>
      )}
    </>
  );
} 