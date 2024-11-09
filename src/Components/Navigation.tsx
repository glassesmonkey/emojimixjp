import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // 如果是主页，不显示导航栏
  if (isHomePage) return null;

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <RouterLink 
            to="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  opacity: 0.8
                }
              }}
            >
              <HomeIcon /> 絵文字ミックス
            </Typography>
          </RouterLink>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={RouterLink}
              to="/media"
              color="inherit"
              sx={{ 
                fontWeight: location.pathname === '/media' ? 700 : 400,
                '&:hover': { color: 'primary.main' }
              }}
            >
              メディア
            </Button>
            <Button
              component={RouterLink}
              to="/terms"
              color="inherit"
              sx={{ 
                fontWeight: location.pathname === '/terms' ? 700 : 400,
                '&:hover': { color: 'primary.main' }
              }}
            >
              利用規約
            </Button>
            <Button
              component={RouterLink}
              to="/privacy"
              color="inherit"
              sx={{ 
                fontWeight: location.pathname === '/privacy' ? 700 : 400,
                '&:hover': { color: 'primary.main' }
              }}
            >
              プライバシー
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation; 