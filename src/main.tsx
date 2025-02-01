import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Packages, Blog, Explore } from './pages/allPages.ts';

createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="packages" element={<Packages />} />
          <Route path="blog" element={<Blog />} />
          <Route path="explore" element={<Explore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>,
);
