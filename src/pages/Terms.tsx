import { Box, Container, Typography, useTheme } from "@mui/material";

const Terms = () => {
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
        利用規約
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>
          1. サービスの概要
        </Typography>
        <Typography sx={{ mb: 2 }}>
          当サービスは、革新的な技術を活用して、絵文字の組み合わせを作成できるWebアプリケーションです。
        </Typography>
        <Typography sx={{ mb: 4 }}>
          すべての処理はユーザーのブラウザ上で実行され、個人情報の収集は一切行いません。
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>
          2. 利用条件
        </Typography>
        <Typography sx={{ mb: 2 }}>
          • 本サービスは無料でご利用いただけます
        </Typography>
        <Typography sx={{ mb: 4 }}>
          • インターネット接続環境が必要です
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>
          3. 禁止事項
        </Typography>
        <Typography sx={{ mb: 2 }}>
          • サービスの不正利用
        </Typography>
        <Typography sx={{ mb: 2 }}>
          • 他のユーザーへの迷惑行為
        </Typography>
        <Typography sx={{ mb: 4 }}>
          • システムに過度な負荷をかける行為
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>
          4. 免責事項
        </Typography>
        <Typography sx={{ mb: 2 }}>
          • 当サービスの利用により生じたいかなる損害についても、運営者は責任を負いません
        </Typography>
        <Typography sx={{ mb: 2 }}>
          • サービスの内容は予告なく変更または終了する場合があります
        </Typography>
        <Typography sx={{ mb: 2 }}>
          • 絵文字ミックスの機能は外部技術により提供されており、その仕様変更や提供終了の可能性があります
        </Typography>
      </Box>
    </Container>
  );
};

export default Terms; 