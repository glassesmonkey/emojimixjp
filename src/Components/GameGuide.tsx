import { Box, Container, Grid, Paper, Typography, useTheme } from "@mui/material";

const guides = [
  {
    category: "初心者向けガイド",
    icon: "🌱",
    items: [
      {
        title: "基本の組み合わせ方",
        description: "まずは感情系の絵文字同士を組み合わせてみましょう。例えば「😊 + 😴」で眠そうな笑顔に！",
        tips: ["似た表情の組み合わせから始める", "動物と食べ物の組み合わせも人気", "季節の絵文字で旬な表現を"]
      },
      {
        title: "おすすめの使い方",
        description: "LINEやTwitterでの会話に使うと、より表現豊かなコミュニケーションが楽しめます。",
        tips: ["挨拶や返信に使ってみる", "誕生日メッセージを飾る", "季節の挨拶に合わせる"]
      }
    ]
  },
  {
    category: "上級者向けテクニック",
    icon: "🎓",
    items: [
      {
        title: "創造的な組み合わせ",
        description: "意外な組み合わせで独創的な表現を生み出しましょう。例えば「🌈 + 🐱」で虹色に輝く猫に！",
        tips: ["反対の意味の絵文字を試す", "自然と動物を組み合わせる", "感情と天気を掛け合わせる"]
      },
      {
        title: "シチュエーション別活用法",
        description: "様々な場面に合わせた絵文字の使い分けで、会話をより楽しく演出できます。",
        tips: ["お祝いメッセージを華やかに", "励ましの言葉に温かみを", "冗談っぽい会話を演出"]
      }
    ]
  },
  {
    category: "楽しみ方のヒント",
    icon: "💫",
    items: [
      {
        title: "コレクションの楽しみ方",
        description: "お気に入りの組み合わせを見つけて、自分だけのコレクションを作りましょう。",
        tips: ["定番の組み合わせをストック", "季節ごとに使い分ける", "友だちと共有して楽しむ"]
      },
      {
        title: "新しい発見の方法",
        description: "ランダム機能を使って、思いがけない可愛い組み合わせを見つけることができます。",
        tips: ["毎日違う組み合わせを試す", "友だちのおすすめを参考に", "トレンドを取り入れる"]
      }
    ]
  }
];

const GameGuide = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background: `linear-gradient(145deg, ${theme.palette.primary.light}10, #fff)`,
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
          絵文字ミックス完全ガイド
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
          初心者から上級者まで楽しめる！絵文字ミックスの使いこなしガイド
        </Typography>

        {guides.map((section, sectionIndex) => (
          <Box key={sectionIndex} sx={{ mb: sectionIndex !== guides.length - 1 ? 6 : 0 }}>
            {/* カテゴリーヘッダー */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: '2rem',
                  lineHeight: 1,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }}
              >
                {section.icon}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                {section.category}
              </Typography>
            </Box>

            {/* アイテムグリッド */}
            <Grid container spacing={3}>
              {section.items.map((item, itemIndex) => (
                <Grid item xs={12} md={6} key={itemIndex}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: theme.palette.divider,
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 4px 20px ${theme.palette.primary.main}15`,
                      },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        mb: 2,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: `${theme.palette.primary.main}08`,
                      }}
                    >
                      {item.tips.map((tip, tipIndex) => (
                        <Box
                          key={tipIndex}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: tipIndex !== item.tips.length - 1 ? 1.5 : 0,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              backgroundColor: theme.palette.primary.main,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: '0.9rem',
                              color: theme.palette.text.secondary,
                            }}
                          >
                            {tip}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

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
          絵文字ミックスの世界は無限大！
          このガイドを参考に、あなただけの素敵な組み合わせを見つけてください。
        </Typography>
      </Container>
    </Box>
  );
};

export default GameGuide; 