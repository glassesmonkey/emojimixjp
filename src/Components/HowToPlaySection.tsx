import { Box, Container, Grid, Paper, Typography, useTheme } from "@mui/material";

const steps = [
  {
    emoji: "👆",
    title: "絵文字を選ぼう",
    description: "左側のリストから好きな絵文字を選んでください。これがベースとなる絵文字です。",
    subText: "たとえば「🐱」を選んでみましょう"
  },
  {
    emoji: "✌️",
    title: "もう1つ選ぼう",
    description: "右側から組み合わせたい絵文字を選びます。どんな組み合わせになるかはお楽しみ！",
    subText: "「🌈」を選んでみると..."
  },
  {
    emoji: "✨",
    title: "新しい絵文字の完成！",
    description: "2つの絵文字が組み合わさって、オリジナルの絵文字が出来上がります。",
    subText: "虹色に輝く猫の絵文字の出来上がり！"
  },
  {
    emoji: "💾",
    title: "保存してシェア",
    description: "作った絵文字はワンクリックでコピーできます。LINEやメッセージですぐに使えます！",
    subText: "友だちとシェアして楽しもう"
  }
];

const HowToPlaySection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background: `linear-gradient(180deg, ${theme.palette.primary.light}15, #fff)`,
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
            mb: 2,
            color: theme.palette.primary.main,
          }}
        >
          絵文字ミックスの使い方
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
          誰でも簡単に楽しめる！たった4ステップで可愛い絵文字の出来上がり
        </Typography>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: theme.palette.divider,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 0 0 1px ${theme.palette.primary.main}25`,
                  },
                }}
              >
                {/* ステップ番号 */}
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    fontSize: '0.875rem',
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  }}
                >
                  STEP {index + 1}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                  {/* 絵文字アイコン */}
                  <Typography
                    sx={{
                      fontSize: '2.5rem',
                      lineHeight: 1,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                  >
                    {step.emoji}
                  </Typography>

                  <Box>
                    {/* タイトル */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        mb: 1,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {step.title}
                    </Typography>

                    {/* 説明文 */}
                    <Typography
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        mb: 2,
                      }}
                    >
                      {step.description}
                    </Typography>

                    {/* サブテキスト */}
                    <Typography
                      sx={{
                        fontSize: '0.875rem',
                        color: theme.palette.primary.main,
                        fontStyle: 'italic',
                      }}
                    >
                      {step.subText}
                    </Typography>
                  </Box>
                </Box>
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
          絵文字ミックスなら、誰でも簡単にオリジナルの絵文字を作ることができます。
          さあ、あなたも素敵な絵文字を作ってみましょう！
        </Typography>
      </Container>
    </Box>
  );
};

export default HowToPlaySection; 