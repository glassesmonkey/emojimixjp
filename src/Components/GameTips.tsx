import { Box, Container, Grid, Paper, Typography, useTheme } from "@mui/material";

const tips = [
  {
    emoji: "🎯",
    title: "絵文字ゲームの組み合わせコツ",
    tips: [
      "似ている絵文字を組み合わせると、面白い結果に！",
      "反対の意味の絵文字で意外な発見も",
      "絵文字ミックスゲームで季節感を表現"
    ]
  },
  {
    emoji: "💡",
    title: "創造的な使い方",
    tips: [
      "感情を表す絵文字同士で新しい感情を表現",
      "動物と食べ物で可愛いキャラクターに",
      "絵文字ゲームで様々な表情を作れます"
    ]
  },
  {
    emoji: "🎮",
    title: "楽しい遊び方",
    tips: [
      "ランダム機能でサプライズ絵文字を発見",
      "友だちと一緒に面白い組み合わせを探そう",
      "お気に入りの組み合わせをコレクション"
    ]
  },
  {
    emoji: "🌟",
    title: "おすすめの組み合わせ",
    tips: [
      "「😊 + ❤️」で愛情たっぷりの笑顔に",
      "「🐱 + 👑」で気品のある猫さまの出来上がり",
      "「🌈 + 🦄」でファンタジックな演出"
    ]
  }
];

const GameTips = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background: `linear-gradient(180deg, #fff, ${theme.palette.primary.light}10)`,
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
          絵文字ミックスゲームを楽しむコツ
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
          もっと楽しく！もっと便利に！絵文字ゲームの新しい遊び方
        </Typography>

        <Grid container spacing={3}>
          {tips.map((section, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.primary.light}05)`,
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* 装飾的な背景要素 */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: '100px',
                    height: '100px',
                    background: `linear-gradient(145deg, ${theme.palette.primary.light}15, transparent)`,
                    borderRadius: '50%',
                    filter: 'blur(20px)',
                  }}
                />

                <Box sx={{ p: 4, position: 'relative' }}>
                  {/* セクションヘッダー */}
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2,
                      mb: 3 
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '2rem',
                        lineHeight: 1,
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                      }}
                    >
                      {section.emoji}
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>

                  {/* ヒントリスト */}
                  <Box component="ul" sx={{ 
                    listStyle: 'none', 
                    p: 0, 
                    m: 0 
                  }}>
                    {section.tips.map((tip, tipIndex) => (
                      <Box
                        component="li"
                        key={tipIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 2,
                          mb: tipIndex !== section.tips.length - 1 ? 2 : 0,
                        }}
                      >
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            backgroundColor: `${theme.palette.primary.main}20`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            mt: 0.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              backgroundColor: theme.palette.primary.main,
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            color: theme.palette.text.secondary,
                            lineHeight: 1.6,
                          }}
                        >
                          {tip}
                        </Typography>
                      </Box>
                    ))}
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
          絵文字ミックスゲームの可能性は無限大！
          あなただけの素敵な組み合わせを見つけて、新しい絵文字ゲームの世界を楽しみましょう。
        </Typography>
      </Container>
    </Box>
  );
};

export default GameTips; 