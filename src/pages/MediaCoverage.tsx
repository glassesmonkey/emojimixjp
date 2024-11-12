import { Box, Container, Typography, Grid, Card, CardContent, Link, useTheme } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const coverageLinks = [
 
  { 
    title: "Ludoking での紹介", 
    url: "https://forum.ludoking.com/index.php?board=7.0" 
  },
  { 
    title: "Plarium での紹介", 
    url: "https://forum.plarium.com/en/throne-kingdom-at-war/598_general-questions/122557_assailant-studies/?anchorId=1775338" 
  },
  { 
    title: "The Lazy での紹介", 
    url: "https://sfx.thelazy.net/forum/troubleshooting/9497/" 
  },
  { 
    title: "BIS での紹介", 
    url: "https://feedback.bistudio.com/T185279" 
  },
  { 
    title: "Ngames での紹介", 
    url: "https://forums.ngames.com/forum/league-of-angels/community-ab/general-discussion-ab/37839-the-best-emoji-mix-game-recommend" 
  },
  { 
    title: "Pokemon Pets での紹介", 
    url: "https://forum.pokemonpets.com/Thread-A-emoji-game-recommend" 
  },
  { 
    title: "Pcmdaily での紹介", 
    url: "https://www.pcmdaily.com/news.php?readmore=1124&c_start=0" 
  },
  { 
    title: "Wowgilden での紹介", 
    url: "https://espritgames.com/forum/topic/777score-2/#post-236144" 
  },
  { 
    title: "Github での紹介", 
    url: "https://github.com/glassesmonkey/emojimixjp/tree/main" 
  },
  { 
    title: "Nasomi での紹介", 
    url: "https://na.nasomi.com/forum/viewtopic.php?f=42&t=4805&sid=d6eeaba2dd029a66b96768ff1a5f3183" 
  },
  { 
    title: "V2EX での紹介", 
    url: "https://www.v2ex.com/t/1088743" 
  },
  { 
    title: "Castbox での紹介", 
    url: "https://castbox.fm/episode/4%3A-The-Superstar-id6335315-id749152422?country=us" 
  }
];

const MediaCoverage = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            mb: 4,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          メディア掲載
        </Typography>
        
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            color: theme.palette.text.secondary,
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
          }}
        >
          絵文字ミックスに関する記事やメディアでの紹介をご覧いただけます
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {coverageLinks.map((link, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {link.title}
                </Typography>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  記事を読む
                  <OpenInNewIcon sx={{ ml: 0.5, fontSize: '1rem' }} />
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MediaCoverage; 