import { Box, Container, Grid, Paper, Typography, useTheme } from "@mui/material";

const features = [
  {
    emoji: "🎨",
    title: "絵文字ミックスで創作",
    description: "2つの絵文字を組み合わせて、オリジナルの絵文字スタンプを作ろう！"
  },
  {
    emoji: "✨",
    title: "無限の組み合わせ",
    description: "何千もの組み合わせパターンから、あなただけの絵文字を見つけよう！"
  },
  {
    emoji: "💫",
    title: "簡単操作",
    description: "クリック2回で新しい絵文字の出来上がり！誰でも簡単に使えます。"
  },
  {
    emoji: "📱",
    title: "すぐに使える",
    description: "作った絵文字はすぐにコピーしてLINEやメッセージで使えます！"
  },
  {
    emoji: "🎮",
    title: "楽しく探索",
    description: "ランダム機能で思わぬ発見も！毎日新しい絵文字との出会いを楽しもう。"
  },
  {
    emoji: "🌈",
    title: "表現の幅が広がる",
    description: "従来の絵文字では伝えられない気持ちも、ミックスで表現できます！"
  }
];

const FeaturesSection = () => {
  const theme = useTheme();

  return (
    <Box 
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background: `linear-gradient(180deg, #fff, ${theme.palette.primary.light}15)`,
      }}
    >
      <Container maxWidth="lg">
        {/* SEO対策のための見出し */}
        <Typography 
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            mb: 6,
            color: theme.palette.primary.main,
          }}
        >
          絵文字ミックスの特徴
        </Typography>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 2,
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[4],
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: '#fff',
                }}
              >
                <Typography 
                  sx={{ 
                    fontSize: '2.5rem',
                    mb: 2,
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                  }}
                >
                  {feature.emoji}
                </Typography>
                
                <Typography 
                  variant="h3"
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    mb: 1,
                    color: theme.palette.text.primary,
                  }}
                >
                  {feature.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* 追加のSEOテキスト */}
        <Typography 
          align="center"
          sx={{ 
            mt: 6,
            color: theme.palette.text.secondary,
            fontSize: '0.9rem',
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          絵文字ミックスを使えば、コミュニケーションがもっと楽しく、もっと表現豊かになります。
          新しい絵文字で、あなたの気持ちを伝えてみませんか？
        </Typography>
      </Container>
    </Box>
  );
};

export default FeaturesSection; 