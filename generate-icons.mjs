import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [192, 512];

const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="100" fill="#5BCEC6"/>
  <text x="256" y="340" font-family="system-ui, sans-serif" font-size="280" font-weight="bold" fill="white" text-anchor="middle">H</text>
</svg>
`;

async function generateIcons() {
  const iconsDir = join(__dirname, 'public', 'icons');
  
  try {
    await mkdir(iconsDir, { recursive: true });
  } catch (e) {
    // Directory exists
  }

  for (const size of sizes) {
    await sharp(Buffer.from(svgIcon))
      .resize(size, size)
      .png()
      .toFile(join(iconsDir, `icon-${size}.png`));
    
    console.log(`✓ Generated icon-${size}.png`);
  }

  // Also create favicon
  await sharp(Buffer.from(svgIcon))
    .resize(32, 32)
    .png()
    .toFile(join(__dirname, 'public', 'favicon.ico'));
  
  console.log('✓ Generated favicon.ico');
  console.log('\nDone! Icons generated in public/icons/');
}

generateIcons();
