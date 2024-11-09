import { Outlet, useNavigate, Link as RouterLink } from 'react-router-dom';
import { ThemeProvider, createTheme, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Footer from '../Components/footer';
import { amber } from '@mui/material/colors';
import { useEffect } from 'react';
import Navigation from '../Components/Navigation';

// 临时theme配置，确保主题正常工作
const tempTheme = createTheme({
  palette: {
    primary: amber,
  },
});

export default function RootLayout() {
  console.log("🌈 RootLayout - Rendering");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("🌈 RootLayout - Component mounted");
  }, []);

  return (
    <ThemeProvider theme={tempTheme}>
      <div style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Navigation />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
} 