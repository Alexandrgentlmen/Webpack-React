import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/app/App';
import './assets/main.css';

const container = document.getElementById('root');

if (container) {
	const root = createRoot(container);
	root.render(
		<Provider store={store}>
			<App />
		</Provider>
	);
}
