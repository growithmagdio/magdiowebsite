import { build } from 'vite-react-ssg/node';

async function run() {
  console.log('>>> Starting SSG build execution...');
  try {
    await build();
    console.log('>>> SSG Build SUCCESSFUL!');
  } catch (err) {
    console.error('>>> SSG Build FAILED with error:', err);
  }
}

run();
