import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes.jsx';
import './index.css';

export const createApp = ViteReactSSG({
  routes,
});
