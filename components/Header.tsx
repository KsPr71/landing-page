import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/products' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:border-accent/50 transition-colors">
            <Code2 className="w-6 h-6 text-accent" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            Nova Dev<span className="text-accent"></span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.path ? 'text-white' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:novadev2026@gmail.com"
            className="px-5 py-2.5 rounded-full bg-white text-background font-medium text-sm hover:bg-gray-200 transition-colors"
          >
            Contactar
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium p-2 rounded-lg ${
                    location.pathname === link.path ? 'bg-white/5 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:novadev2026@gmail.com"
                className="mt-4 px-6 py-3 rounded-lg bg-accent text-white font-medium text-center hover:bg-accent/90 transition-colors"
              >
                Contactar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;