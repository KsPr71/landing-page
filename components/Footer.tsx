import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Code2 className="w-8 h-8 text-accent" />
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Nova Dev<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Transformamos ideas complejas en soluciones de software elegantes, escalables y orientadas al rendimiento.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white mb-6">Navegación</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-accent transition-colors">Inicio</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-accent transition-colors">Productos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Nova Dev. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            Diseñado con <span className="text-accent">♥</span> para la web moderna
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;