import { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';

const createElement = document.querySelector("#root")
const root = createRoot(createElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)