import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const required = [
  'src/app/page.tsx', 'src/app/about/page.tsx', 'src/app/exhibitions/page.tsx',
  'src/app/exhibitions/[slug]/page.tsx', 'src/app/industries/page.tsx',
  'src/app/industries/[slug]/page.tsx', 'src/app/services/page.tsx',
  'src/app/services/[slug]/page.tsx', 'src/app/global-presence/page.tsx',
  'src/app/participants/page.tsx', 'src/app/gallery/page.tsx',
  'src/app/conferences/page.tsx', 'src/app/webinars/page.tsx', 'src/app/contact/page.tsx',
  'src/app/api/contact/route.ts', 'src/app/api/enquiry/route.ts',
  'src/app/api/exhibitor-enquiry/route.ts', 'src/app/api/visitor-enquiry/route.ts',
  'src/app/api/sponsor-enquiry/route.ts', '.env.example', '.gitignore'
];

const missing = required.filter((file) => !existsSync(file));
if (missing.length) {
  console.error('Missing required files:', missing.join(', '));
  process.exit(1);
}

const sourceFiles = [];
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path);
    else if (/\.(ts|tsx|js|mjs)$/.test(path)) sourceFiles.push(path);
  }
}
walk('src');

const prohibited = [
  /NEXT_PUBLIC_(?:MONGODB|GOOGLE|SMTP|EMAIL|PASSWORD|PRIVATE|SECRET)/,
  /mongodb\+srv:\/\//,
  /-----BEGIN PRIVATE KEY-----/
];
for (const file of sourceFiles) {
  const contents = readFileSync(file, 'utf8');
  for (const pattern of prohibited) {
    if (pattern.test(contents)) {
      console.error(`Potential exposed secret pattern in ${file}: ${pattern}`);
      process.exit(1);
    }
  }
}

console.log(`Structure verification passed: ${required.length} required files and ${sourceFiles.length} source files checked.`);
