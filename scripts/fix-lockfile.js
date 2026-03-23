import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

try {
  console.log('[v0] Starting to fix pnpm lockfile...');
  
  // Change to project directory
  const projectDir = '/vercel/share/v0-project';
  process.chdir(projectDir);
  
  // Run pnpm install to regenerate lockfile
  console.log('[v0] Running pnpm install to regenerate lockfile...');
  execSync('pnpm install', { stdio: 'inherit' });
  
  console.log('[v0] Lockfile successfully regenerated!');
} catch (error) {
  console.error('[v0] Error fixing lockfile:', error.message);
  process.exit(1);
}
