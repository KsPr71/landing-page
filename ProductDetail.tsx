import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Code2 } from 'lucide-react';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center flex-col gap-6 text-center px-6">
        <h1 className="text-4xl font-heading font-bold text-white">Producto no encontrado</h1>
        <p className="text-gray-400">El producto que buscas no existe o ha sido movido.</p>
        <button 
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
        >
          Volver a Productos
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <article className="max-w-5xl mx-auto px-6 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a todos los productos
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-accent mb-4">
                {product.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                {product.tagline}
              </p>
            </div>
            <button className="px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(56,189,248,0.2)] whitespace-nowrap">
              Solicitar Demo
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="aspect-[16/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden border border-white/10 mb-16"
        >
          <img 
            src={product.imageUrl} 
            alt={`Interfaz de ${product.title}`}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">Visión General</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {product.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-white mb-6">Características Principales</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-32">
              <h3 className="text-lg font-heading font-semibold text-white mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-accent" />
                Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-background rounded-lg border border-white/10 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <hr className="my-8 border-white/10" />
              
              <div className="space-y-4 text-sm text-gray-400">
                <p><strong>Estado:</strong> Producción Activa</p>
                <p><strong>Actualización:</strong> Semanal</p>
                <p><strong>Soporte:</strong> 24/7 Nivel Empresarial</p>
              </div>
            </div>
          </motion.div>
        </div>

      </article>
    </div>
  );
}