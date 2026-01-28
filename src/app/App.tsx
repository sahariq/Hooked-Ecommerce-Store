import { ShoppingCart, Instagram, Facebook, Twitter, Heart, Sparkles } from 'lucide-react';
import ProductCard from '@/app/components/ProductCard';
import CustomOrderSection from '@/app/components/CustomOrderSection';

export default function App() {
  const products = [
    {
      id: 1,
      name: 'Pastel Amigurumi Bunny',
      price: 32.00,
      image: 'https://images.unsplash.com/photo-1629019317873-3f603b269723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYW1pZ3VydW1pJTIwY3V0ZSUyMHRveXxlbnwxfHx8fDE3Njk2MDgzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      name: 'Cozy Blanket - Pink Blush',
      price: 68.00,
      image: 'https://images.unsplash.com/photo-1705872534499-5f7ba5b1bfd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmxhbmtldCUyMHNvZnQlMjBwYXN0ZWx8ZW58MXx8fHwxNzY5NjA4MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      name: 'Handmade Crochet Bag',
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1759544632264-a31a9ff1e60b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmFnJTIwaGFuZG1hZGUlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY5NjA4MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      name: 'Delicate Flower Bouquet',
      price: 28.00,
      image: 'https://images.unsplash.com/photo-1700170928599-d7fc2d4ec97f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwZmxvd2VycyUyMGRlbGljYXRlJTIwaGFuZG1hZGV8ZW58MXx8fHwxNzY5NjA4MzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      name: 'Premium Yarn Set',
      price: 52.00,
      image: 'https://images.unsplash.com/photo-1690908435623-415f8e8b0759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwcGFzdGVsJTIwY29sb3JzJTIwc29mdHxlbnwxfHx8fDE3Njk2MDgzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      name: 'Handmade Pink Creation',
      price: 38.00,
      image: 'https://images.unsplash.com/photo-1682953982710-1113d5c383c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwaGFuZG1hZGUlMjBwaW5rJTIwcGFzdGVsfGVufDF8fHx8MTc2OTYwODM0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Heart className="w-7 h-7" style={{ color: '#FFB1B1' }} fill="#FFB1B1" />
              <span className="text-2xl" style={{ color: '#102C57' }}>Hooked</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="transition-colors hover:opacity-70" style={{ color: '#102C57' }}>Home</a>
              <a href="#" className="transition-colors hover:opacity-70" style={{ color: '#102C57' }}>Shop</a>
              <a href="#" className="transition-colors hover:opacity-70" style={{ color: '#102C57' }}>Custom Orders</a>
              <a href="#" className="transition-colors hover:opacity-70" style={{ color: '#102C57' }}>Contact</a>
            </div>

            {/* Cart Icon */}
            <button className="p-2 rounded-full transition-all hover:bg-opacity-10 hover:bg-black">
              <ShoppingCart className="w-6 h-6" style={{ color: '#102C57' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative py-32 px-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #FFCBCB 0%, #FFB1B1 25%, #1679AB 75%, #102C57 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white">Handcrafted with Love</span>
            </div>
            <h1 className="text-6xl mb-6 text-white" style={{ lineHeight: '1.1' }}>
              Cozy Creations,<br />Stitched with Care
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Discover our collection of handmade crochet treasures. Each piece is lovingly crafted to bring warmth and joy to your home.
            </p>
            <div className="flex gap-4">
              <button 
                className="px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
                style={{ 
                  backgroundColor: '#102C57',
                  color: 'white'
                }}
              >
                Shop Collection
              </button>
              <button 
                className="px-8 py-4 rounded-full bg-white/20 backdrop-blur-sm text-white transition-all hover:bg-white/30 border-2 border-white/40"
              >
                Custom Order
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4" style={{ color: '#102C57' }}>Featured Collection</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#1679AB' }}>
              Handpicked favorites from our artisan collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Section */}
      <CustomOrderSection />

      {/* Footer */}
      <footer className="py-12 px-6" style={{ backgroundColor: '#102C57' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6" style={{ color: '#FFB1B1' }} fill="#FFB1B1" />
                <span className="text-xl text-white">Hooked</span>
              </div>
              <p className="text-white/70">
                Handcrafted crochet creations made with love and care. Every stitch tells a story.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Shop</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Custom Orders</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Care Instructions</a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="p-3 rounded-full transition-all hover:scale-110"
                  style={{ backgroundColor: '#FFB1B1' }}
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full transition-all hover:scale-110"
                  style={{ backgroundColor: '#FFB1B1' }}
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full transition-all hover:scale-110"
                  style={{ backgroundColor: '#FFB1B1' }}
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/20 text-center">
            <p className="text-white/60">© 2026 Hooked. All rights reserved. Made with love, one stitch at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
