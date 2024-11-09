import { Box, Container, Grid, Paper, Typography, useTheme, Avatar } from "@mui/material";

const testimonials = [
  {
    name: "さくら",
    avatar: "🌸",
    comment: "友だちとの会話が楽しくなりました！組み合わせを考えるのも面白いです。",
    role: "学生"
  },
  {
    name: "たろう",
    avatar: "🌟",
    comment: "毎日新しい発見があって楽しい！特に動物の組み合わせが可愛くて気に入ってます。",
    role: "会社員"
  },
  {
    name: "まりこ",
    avatar: "🎨",
    comment: "SNSでの投稿が個性的になりました。みんなから「かわいい！」って言われます。",
    role: "デザイナー"
  },
  {
    name: "けんじ",
    avatar: "✨",
    comment: "シンプルで使いやすい！直感的に操作できるのが良いですね。",
    role: "エンジニア"
  }
];

const Testimonials = () => {
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
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            mb: 2,
            color: theme.palette.primary.main,
          }}
        >
          みんなの声
        </Typography>

        <Typography
          align="center"
          sx={{
            mb: 6,
            color: theme.palette.text.secondary,
            fontSize: { xs: '0.9rem', md: '1rem' },
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          絵文字ミックスを使っている方々の感想をご紹介
        </Typography>

        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease-in-out',
                  border: '1px solid',
                  borderColor: theme.palette.divider,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 4px 20px ${theme.palette.primary.main}15`,
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      lineHeight: 1,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                  >
                    {testimonial.avatar}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    mb: 2,
                    minHeight: '80px',
                  }}
                >
                  "{testimonial.comment}"
                </Typography>

                <Box sx={{ mt: 'auto' }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {testimonial.role}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* SEOテキスト */}
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
          絵文字ミックスは、多くのユーザーに愛されています。
          あなたも新しい絵文字の世界を楽しんでみませんか？
        </Typography>
      </Container>
    </Box>
  );
};

export default Testimonials; 