import { ThemeProvider, createTheme, Box } from "@mui/material";
import {
  amber,
  blue,
  cyan,
  deepOrange,
  deepPurple,
  green,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  teal,
} from "@mui/material/colors";
import Footer from "./Components/Footer";
import Kitchen from "./Components/kitchen";
import Introduction from "./Components/Introduction";
import FeaturesSection from "./Components/FeaturesSection";
import HowToPlaySection from "./Components/HowToPlaySection";
import GameTips from "./Components/GameTips";
import Testimonials from "./Components/Testimonials";
import FAQSection from "./Components/FAQSection";
import GameGuide from "./Components/GameGuide";

// 🌈
const colors = [
  amber,
  blue,
  cyan,
  deepOrange,
  deepPurple,
  green,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  teal,
];

const theme = createTheme({
  palette: {
    primary: colors[Math.floor(Math.random() * colors.length)],
  },
});

function App() {
  if (window.self === window.top) {
    return (
      <div
        style={{
          height: "100dvh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <ThemeProvider theme={theme}>
          {/* Kitchen组件固定在第一屏，保持内部滚动 */}
          <div style={{
            height: "100dvh",
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
          }}>
            <Kitchen />
          </div>
          
          {/* SEO内容区域 */}
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
           
            <Footer />
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
