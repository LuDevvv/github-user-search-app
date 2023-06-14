import { SkeletonTheme } from 'react-loading-skeleton';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SkeletonTheme baseColor="#1f2a48" highlightColor="#ffffff">
    <App />
  </SkeletonTheme>
);
