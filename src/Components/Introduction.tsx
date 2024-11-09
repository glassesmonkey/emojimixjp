import { Box, Container, Paper, Typography, useTheme } from "@mui/material";

const Introduction = () => {
  const theme = useTheme();
  
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper 
        elevation={0}
        sx={{ 
          background: `linear-gradient(145deg, ${theme.palette.primary.light}15, ${theme.palette.primary.light}05)`,
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* 装饰性背景元素 */}
        <Box
          sx={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: '150px',
            height: '150px',
            background: `linear-gradient(145deg, ${theme.palette.primary.light}20, transparent)`,
            borderRadius: '50%',
            filter: 'blur(25px)',
          }}
        />
        
        <Box sx={{ 
          padding: { xs: 3, md: 5 },
          position: 'relative',
          textAlign: 'center'
        }}>
          {/* 主标题 */}
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 3,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
              lineHeight: 1.3
            }}
          >
            Google 絵文字ミックス
            <Typography 
              component="span" 
              sx={{ 
                display: 'block',
                fontSize: { xs: '1rem', md: '1.25rem' },
                fontWeight: 400,
                opacity: 0.8,
                mt: 1
              }}
            >
              Googleが提供する楽しい絵文字の組み合わせツール
            </Typography>
          </Typography>

          {/* 说明文本 */}
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              color: (theme) => theme.palette.text.secondary
            }}
          >
            Google絵文字ミックスで、オリジナルの絵文字を作ってチャットをもっと楽しく！
            Google提供の絵文字キッチンを使って、2つの絵文字を組み合わせて、世界に一つだけの絵文字を作ることができます。
          </Typography>

          {/* 使用步骤 */}
          <Paper 
            elevation={0}
            sx={{ 
              p: 3,
              background: (theme) => theme.palette.background.paper,
              borderRadius: 2,
              maxWidth: '500px',
              margin: '0 auto',
              border: '1px solid',
              borderColor: (theme) => theme.palette.divider
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                color: (theme) => theme.palette.text.primary
              }}
            >
              <span role="img" aria-label="palette">🎨</span> 簡単な使い方
            </Typography>
            
            <Box sx={{ textAlign: 'left' }}>
              {[
                '左側から1つ目の絵文字を選ぶ',
                '右側から2つ目の絵文字を選ぶ',
                '新しい絵文字の出来上がり！'
              ].map((step, index) => (
                <Typography 
                  key={index}
                  sx={{ 
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: (theme) => theme.palette.text.secondary
                  }}
                >
                  <Box 
                    sx={{ 
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: (theme) => theme.palette.primary.main,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      flexShrink: 0
                    }}
                  >
                    {index + 1}
                  </Box>
                  {step}
                </Typography>
              ))}
            </Box>
          </Paper>

          {/* 底部文字 */}
          <Typography 
            variant="body2" 
            sx={{ 
              mt: 4,
              color: (theme) => theme.palette.text.secondary,
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}
          >
            <span role="img" aria-label="sparkles">✨</span>
            絵文字ミックスは、Googleの技術を活用した無料のツールです。何千もの組み合わせを楽しもう！
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Introduction;