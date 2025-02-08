import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Packages, Blog, Explore, Login, Signup, UserProfile } from './pages/allPages.ts';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';


createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userProfile" element={<UserProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>,
);
