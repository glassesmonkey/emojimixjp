import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 确保目录存在
const dir = path.join(__dirname, 'src', 'Components');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const file = fs.createWriteStream(path.join(dir, 'metadata.json'));

https.get('https://raw.githubusercontent.com/xsalazar/emoji-kitchen-backend/main/app/metadata.json', function(response) {
    response.pipe(file);
    
    file.on('finish', () => {
        file.close();
        console.log('metadata.json 下载完成');
    });
}).on('error', function(err) {
    fs.unlink(path.join(dir, 'metadata.json'), () => {});
    console.error('下载失败:', err.message);
});
