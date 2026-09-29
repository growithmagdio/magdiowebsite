import { spawn } from 'node:child_process';

console.log('Spawning chrome...');
const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless',
  '--remote-debugging-port=9222',
  '--no-sandbox'
]);

chrome.stdout.on('data', (d) => console.log('STDOUT:', d.toString()));
chrome.stderr.on('data', (d) => console.log('STDERR:', d.toString()));

chrome.on('error', (err) => console.error('SPAWN ERROR:', err));
chrome.on('exit', (code) => console.log('EXIT CODE:', code));

setTimeout(() => {
  console.log('Killing chrome...');
  chrome.kill();
  process.exit(0);
}, 3000);
