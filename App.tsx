import React, { Suspense } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

// Lazy loaded routes for better performance
const Home = React.lazy(() => import('./pages/Home.tsx'));
const Products = React.lazy(() => import('./pages/Products.tsx'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail.tsx'));
const NotFound = React.lazy(() => import('./pages/NotFound.tsx'));

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
  </div>
);

const App: React.FC = () => {
  return (
    <Theme appearance="dark" radius="large" scaling="100%">
      <Router>
        <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-accent/30 selection:text-white">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="dark"
          />
        </div>
      </Router>
    </Theme>
  );
}

export default App;