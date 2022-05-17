import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="page1.ui" element={<Page1 />} />
      <Route path="page2.ui" element={<Page2 />} />
    </Routes>
  </BrowserRouter>
);
