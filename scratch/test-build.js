import { build } from 'vite-react-ssg/node';

try {
  console.log('Starting SSG build test...');
  await build();
  console.log('SSG build test complete!');
} catch (err) {
  console.error('SSG Build Error:', err);
}
