import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "絵文字ミックスとは何ですか？",
    answer: "絵文字ミックスは、2つの絵文字を組み合わせて新しい絵文字を作れるツールです。Google が開発した Emoji Kitchen の技術を使用しており、何千もの組み合わせを楽しむことができます。"
  },
  {
    question: "作った絵文字はどうやって保存できますか？",
    answer: "作成した絵文字は簡単にコピーできます。コピーした絵文字は、LINEやメッセージアプリ、SNSなどで直接使用できます。また、画像としてダウンロードすることも可能です。"
  },
  {
    question: "対応している絵文字の種類は？",
    answer: "基本的な表情絵文字、動物、食べ物、自然、活動など、幅広い種類の絵文字に対応しています。新しい組み合わせは定期的に追加されています。"
  },
  {
    question: "スマートフォンでも使えますか？",
    answer: "はい、スマートフォンでも快適に使用できます。レスポンシブデザインにより、画面サイズに合わせて最適化された表示になります。"
  },
  {
    question: "無料で使えますか？",
    answer: "はい、完全無料でご利用いただけます。アカウント登録も必要ありません。"
  },
  {
    question: "組み合わせに制限はありますか？",
    answer: "技術的な制限により、全ての絵文字の組み合わせが可能というわけではありませんが、何千もの組み合わせパターンをお楽しみいただけます。"
  }
];

const FAQSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background: `linear-gradient(180deg, ${theme.palette.primary.light}10, #fff)`,
      }}
    >
      <Container maxWidth="md">
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
          よくある質問
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
          絵文字ミックスについての疑問にお答えします
        </Typography>

        <Box sx={{ mb: 4 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                mb: 1,
                border: '1px solid',
                borderColor: 'divider',
                '&:before': { display: 'none' },
                borderRadius: '8px !important',
                overflow: 'hidden',
                '&:not(:last-child)': { mb: 2 },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    my: 2,
                  },
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.main}08`,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  backgroundColor: `${theme.palette.primary.main}05`,
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* SEOテキスト */}
        <Typography
          align="center"
          sx={{
            color: theme.palette.text.secondary,
            fontSize: '0.9rem',
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          絵文字ミックスについて、さらに詳しい情報が必要な場合は、お気軽にお問い合わせください。
        </Typography>
      </Container>
    </Box>
  );
};

export default FAQSection; 