import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ScrollToHashElement from './components/ScrollToHashElement';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HashRouter basename='/'>
        <ScrollToHashElement />
            <App />
        </HashRouter>
    </React.StrictMode>
);
