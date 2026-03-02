import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../data/products.ts';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-colors"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-xs font-medium text-gray-300">{product.category}</span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-heading font-semibold text-white mb-2 group-hover:text-accent transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-400 line-clamp-2 mb-6">
          {product.tagline}
        </p>
        
        <Link 
          to={`/products/${product.id}`}
          className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
        >
          Ver detalles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;