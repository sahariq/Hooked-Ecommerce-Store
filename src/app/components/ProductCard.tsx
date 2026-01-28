import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative rounded-[1.75rem] overflow-hidden bg-white/95 transition-all duration-300 hover:-translate-y-2"
      style={{ 
        boxShadow: isHovered 
          ? '0 22px 45px rgba(16, 44, 87, 0.16)' 
          : '0 10px 28px rgba(16, 44, 87, 0.10)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#FFCBCB]/30">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Wishlist Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-3 rounded-full bg-white/95 backdrop-blur-sm transition-all hover:scale-110 active:scale-95 border border-[#FFB1B1]/60"
          style={{
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Heart 
            className="w-5 h-5 transition-colors" 
            style={{ color: isLiked ? '#FFB1B1' : '#102C57' }}
            fill={isLiked ? '#FFB1B1' : 'none'}
          />
        </button>
        
        {/* Quick Add Button - Shows on hover */}
        <div 
          className="absolute bottom-4 left-4 right-4 transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
          }}
        >
          <button 
            className="w-full py-3 px-6 rounded-full bg-[#FFCBCB]/80 backdrop-blur-sm flex items-center justify-center gap-2 transition-all hover:bg-[#FFCBCB]"
            style={{ 
              color: '#102C57',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="mb-2" style={{ color: '#102C57' }}>
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl" style={{ color: '#1679AB' }}>
            ${product.price.toFixed(2)}
          </span>
          <span 
            className="px-3 py-1 rounded-full text-sm"
            style={{ 
              backgroundColor: '#FFCBCB',
              color: '#102C57'
            }}
          >
            Handmade
          </span>
        </div>
      </div>
    </div>
  );
}
