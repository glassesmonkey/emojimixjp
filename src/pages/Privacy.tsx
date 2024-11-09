import { Box, Container, Typography, useTheme } from "@mui/material";

const Privacy = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
        プライバシーポリシー
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>
          1. 個人情報の収集について
        </Typography>
        <Typography sx={{ mb: 4 }}>
          当サービスは、ユーザーの個人情報を一切収集いたしません。すべての操作は、ユーザーのブラウザ上（ローカル環境）で実行されます。
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>
          2. データの取り扱いについて
        </Typography>
        <Typography sx={{ mb: 2 }}>
          • 当サービスはサーバーにデータを保存しません
        </Typography>
        <Typography sx={{ mb: 2 }}>
          • すべての処理はユーザーのブラウザ内で完結します
        </Typography>
        <Typography sx={{ mb: 4 }}>
          • 第三者へのデータ提供は一切ありません
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>
          3. Cookieの使用について
        </Typography>
        <Typography sx={{ mb: 2 }}>
          当サービスでは、必要最小限のCookieのみを使用し、これらはユーザーの設定を保存するためだけに使用されます。
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>
          4. お問い合わせ
        </Typography>
        <Typography sx={{ mb: 2 }}>
          プライバシーポリシーに関するご質問やご意見がございましたら、お気軽にお問い合わせください。
        </Typography>
      </Box>
    </Container>
  );
};

export default Privacy; 