#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read parent .env file
const parentEnvPath = path.resolve(__dirname, '../../.env');
const frontendEnvPath = path.resolve(__dirname, '../.env.local');

if (fs.existsSync(parentEnvPath)) {
  const envContent = fs.readFileSync(parentEnvPath, 'utf8');
  
  // Convert to REACT_APP_ format for frontend
  const lines = envContent.split('\n');
  const reactEnv = lines
    .filter(line => line.trim() && !line.startsWith('#'))
    .map(line => {
      const [key, ...valueParts] = line.split('=');
      const value = valueParts.join('=').trim();
      return `REACT_APP_${key}=${value}`;
    })
    .join('\n');
  
  fs.writeFileSync(frontendEnvPath, reactEnv);
  console.log('✓ Loaded environment variables from parent .env');
  console.log('✓ Created .env.local at:', frontendEnvPath);
} else {
  console.warn('⚠ Parent .env file not found at:', parentEnvPath);
}
