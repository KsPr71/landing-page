import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../data/products.ts';
import ProductCard from '../components/ProductCard.tsx';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => {
        console.error('Error fetching products', error);
      });
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
            Nuestros <span className="text-accent">Productos</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Explora nuestra suite de soluciones de software. Desarrollados internamente para resolver problemas complejos con una experiencia de usuario excepcional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}