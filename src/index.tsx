import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './global.scss';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Error: no root');
}

createRoot(root).render(<App />);
