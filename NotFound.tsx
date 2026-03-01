import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center justify-center flex-col gap-6 text-center px-6">
      <div className="text-accent text-9xl font-heading font-bold mb-4 opacity-50">404</div>
      <h1 className="text-4xl font-heading font-bold text-white">Página no encontrada</h1>
      <p className="text-gray-400 max-w-md mx-auto">Lo sentimos, no pudimos encontrar la página que estás buscando. Puede que haya sido eliminada o que la dirección sea incorrecta.</p>
      <Link 
        to="/"
        className="mt-4 px-8 py-4 bg-white text-background font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver al inicio
      </Link>
    </div>
  );
}