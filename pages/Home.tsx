import { motion } from 'framer-motion';
import { ArrowRight, Layers, Terminal, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo.tsx';
import ProductCard from '../components/ProductCard.tsx';
import { TeamCarousel } from "../components/lightswind/team-carousel.tsx";
import type { Product } from '../data/products.ts';
import teamMembers from './data.tsx';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => {
        console.error('Error fetching products', error);
      });
  }, []);

  const featuredProducts = products.slice(0, 2);


  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32 flex flex-col items-center text-center">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />
        <Logo width={180} height={180} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse">

         
          </span>
          Software Engineering Studio
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight mb-8 max-w-4xl leading-[1.1]"
        >
          Transformamos Ideas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Software Excepcional</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
        >
          Construimos productos digitales escalables, de alto rendimiento y con un diseño inmaculado para startups y empresas que exigen excelencia.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link 
            to="/products"
            className="px-8 py-4 rounded-full bg-white text-background font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            Explorar Productos
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a 
            href="mailto:hello@novadev.com"
            className="px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            Hablemos de tu proyecto
          </a>
        </motion.div>
      </section>

      {/* Value Props Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Terminal className="w-8 h-8 text-accent" />,
                title: "Arquitectura Robusta",
                desc: "Diseñamos sistemas preparados para escalar desde el día uno, utilizando patrones modernos y tecnologías probadas."
              },
              {
                icon: <Layers className="w-8 h-8 text-accent" />,
                title: "Desarrollo Full-Stack",
                desc: "Dominamos todo el espectro, desde interfaces de usuario ultrarrápidas hasta infraestructuras backend complejas."
              },
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: "Rendimiento Óptimo",
                desc: "Cada línea de código se optimiza para garantizar tiempos de carga mínimos y una experiencia de usuario fluida."
              }
            ].map((prop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-2">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-white">{prop.title}</h3>
                <p className="text-gray-400 leading-relaxed">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Nuestros Productos Destacados
            </h2>
            <p className="text-gray-400 text-lg">
              Soluciones construidas por nosotros, utilizadas por miles. Una muestra de nuestra capacidad técnica y visión de producto.
            </p>
          </div>
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 text-white hover:text-accent font-medium transition-colors whitespace-nowrap"
          >
            Ver todo el portafolio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-2xl md:text-2xl font-heading font-bold text-white mb-4">
              Equipo de
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-blue-600 mb-4">
              NOVADEV
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Conoce al equipo que diseña y construye nuestros productos.
            </p>
          </motion.div>

          <TeamCarousel
            members={teamMembers}
            title=""
            embedded
            autoPlay={3000}
            onMemberChange={(member) => {
              console.log('Active member:', member.name);
            }}
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-blue-900/20 border border-white/10 p-12 md:p-20 text-center"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] opacity-5 mix-blend-overlay bg-cover bg-center" />
            
            <h2 className="relative z-10 text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              ¿Listo para dar vida a tu próxima gran idea?
            </h2>
            <p className="relative z-10 text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Ya sea que necesites un MVP robusto o escalar un sistema existente, nuestro equipo está listo para el desafío.
            </p>
            <a 
              href="mailto:hello@novadev.com"
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(56,189,248,0.3)]"
            >
              Iniciar Conversación
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
