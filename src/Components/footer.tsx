import { Box, Container, Grid, Link, Typography, useTheme } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const navigationLinks = [
  { name: "メディア掲載", href: "/media" },
  { name: "利用規約", href: "/terms" },
  { name: "プライバシー", href: "/privacy" },
];

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: { xs: 8, md: 10 },
          px: { xs: 2.5, md: 5 },
        }}
      >
        {/* Upper Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            mb: 8,
          }}
        >
          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.875rem', md: '3rem' },
              fontWeight: 700,
              maxWidth: '36rem',
              lineHeight: 1.2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            絵文字ミックスで
            <br />
            楽しいチャットを
          </Typography>

          {/* Contact Info */}
          <Box sx={{ mt: { xs: 4, md: 0 } }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: 2,
                maxWidth: '18rem',
              }}
            >
              <LocationOnIcon 
                sx={{ 
                  mr: 1.5, 
                  color: theme.palette.text.secondary,
                  fontSize: '1.25rem',
                }} 
              />
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                東京都渋谷区
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: 2,
                maxWidth: '18rem',
              }}
            >
              <EmailIcon 
                sx={{ 
                  mr: 1.5, 
                  color: theme.palette.text.secondary,
                  fontSize: '1.25rem',
                }} 
              />
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                alexfeapple@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            width: '100%',
            height: '1px',
            backgroundColor: theme.palette.divider,
            mb: 7,
          }}
        />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { sm: 'center' },
          }}
        >
          {/* Navigation Links */}
          <Box
            sx={{
              mb: { xs: 2, sm: 0 },
              py: 0.5,
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                sx={{
                  display: 'inline-block',
                  color: theme.palette.text.secondary,
                  textDecoration: 'none',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  pr: { sm: 3, lg: 6 },
                  py: { xs: 0.75, sm: 1 },
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {link.name}
              </Link>
            ))}
          </Box>

          {/* Copyright */}
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: '0.875rem', sm: '1rem' },
            }}
          >
            © {currentYear} 絵文字ミックス. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 