import ReactDOM from 'react-dom/client';
import { Layout } from '@components/Layout';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<Layout render={props => <App {...props} />} />);
