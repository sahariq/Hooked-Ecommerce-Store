import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Instagram, Facebook, Heart, Sparkles } from 'lucide-react';
import ProductCard from '@/app/components/ProductCard';
import CustomOrderSection from '@/app/components/CustomOrderSection';
import CartSection from '@/app/components/CartSection';
import CheckoutSection from '@/app/components/CheckoutSection';
import OrderSuccessSection from '@/app/components/OrderSuccessSection';

function useActivePath() {
  const location = useLocation();
  return location.pathname;
}

function AppShell({ children }: { children: React.ReactNode }) {
  const activePath = useActivePath();
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
            <div className="flex items-center gap-3">
              <motion.img
                src="/logo.png"
                alt="Hooked logo"
                className="h-10 w-10 rounded-full object-cover"
                whileHover={{ scale: 1.05, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
              <span className="text-3xl font-pacifico" style={{ color: '#102C57' }}>Hooked</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`transition-colors hover:opacity-70 ${
                  activePath === '/' ? 'font-semibold' : ''
                }`}
                style={{ color: '#102C57' }}
              >
                Home
              </Link>
              <a
                href="/#shop"
                className="transition-colors hover:opacity-70"
                style={{ color: '#102C57' }}
              >
                Shop
              </a>
              <a
                href="/#custom-orders"
                className="transition-colors hover:opacity-70"
                style={{ color: '#102C57' }}
              >
                Custom Orders
              </a>
              <a
                href="/#contact"
                className="transition-colors hover:opacity-70"
                style={{ color: '#102C57' }}
              >
                Contact
              </a>
            </div>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="p-2 rounded-full transition-all hover:bg-[#FFB1B1]/20"
            >
              <ShoppingCart className="w-6 h-6" style={{ color: '#102C57' }} />
            </Link>
          </div>
        </div>
      </nav>

      {children}

      {/* Footer */}
      <footer id="contact" className="py-12 px-6" style={{ backgroundColor: '#102C57' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.png"
                  alt="Hooked logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-2xl font-pacifico text-white">Hooked</span>
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

function HomePage() {
  const products = [
    {
      id: 1,
      name: 'Pastel Amigurumi Bunny',
      price: 32.0,
      image:
        'https://images.unsplash.com/photo-1629019317873-3f603b269723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYW1pZ3VydW1pJTIwY3V0ZSUyMHRveXxlbnwxfHx8fDE3Njk2MDgzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      name: 'Cozy Blanket - Pink Blush',
      price: 68.0,
      image:
        'https://images.unsplash.com/photo-1705872534499-5f7ba5b1bfd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmxhbmtldCUyMHNvZnQlMjBwYXN0ZWx8ZW58MXx8fHwxNzY5NjA4MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      name: 'Handmade Crochet Bag',
      price: 45.0,
      image:
        'https://images.unsplash.com/photo-1759544632264-a31a9ff1e60b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmFnJTIwaGFuZG1hZGUlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY5NjA4MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      name: 'Delicate Flower Bouquet',
      price: 28.0,
      image:
        'https://images.unsplash.com/photo-1700170928599-d7fc2d4ec97f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwZmxvd2VycyUyMGRlbGljYXRlJTIwaGFuZG1hZGV8ZW58MXx8fHwxNzY5NjA4MzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 5,
      name: 'Premium Yarn Set',
      price: 52.0,
      image:
        'https://images.unsplash.com/photo-1690908435623-415f8e8b0759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwcGFzdGVsJTIwY29sb3JzJTIwc29mdHxlbnwxfHx8fDE3Njk2MDgzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 6,
      name: 'Handmade Pink Creation',
      price: 38.0,
      image:
        'https://images.unsplash.com/photo-1682953982710-1113d5c383c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwaGFuZG1hZGUlMjBwaW5rJTIwcGFzdGVsfGVufDF8fHx8MTc2OTYwODM0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        id="home"
        className="relative py-32 px-6 overflow-hidden bg-gingham-blue"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <Sparkles className="w-4 h-4" style={{ color: '#102C57' }} />
              <span className="text-sm" style={{ color: '#102C57' }}>Handcrafted with Love</span>
            </motion.div>
            <motion.h1
              className="text-6xl mb-6"
              style={{ lineHeight: '1.1', color: '#102C57' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              Cozy Creations,<br />Stitched with Care
            </motion.h1>
            <motion.p
              className="text-xl mb-8 max-w-2xl"
              style={{ color: '#102C57' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              Discover our collection of handmade crochet treasures. Each piece is lovingly crafted to bring warmth and joy to your home.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
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
                className="px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm transition-all hover:bg-white border-2"
                style={{ color: '#102C57', borderColor: '#102C57' }}
              >
                Custom Order
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative circles */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        />
      </motion.section>

      {/* Featured Products / Shop */}
      <section
        id="shop"
        className="py-24 px-6"
        style={{ backgroundColor: '#FFF4F4' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4" style={{ color: '#102C57' }}>
              Featured Collection
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#1679AB' }}>
              Handpicked favorites laid out like a cozy craft table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="transition-transform"
                style={{
                  transform:
                    index % 2 === 0 ? 'rotate(0.3deg)' : 'rotate(-0.3deg)',
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Section */}
      <section id="custom-orders">
        <CustomOrderSection />
      </section>
    </>
  );
}

function CartPage() {
  return (
    <main>
      <CartSection />
    </main>
  );
}

export default function App() {
  const activePath = useActivePath();
  const isCart = activePath === '/cart';
  const isCheckout = activePath === '/checkout';
  const isOrderSuccess = activePath === '/order-success';

  return (
    <AppShell>
      {isOrderSuccess ? (
        <OrderSuccessSection />
      ) : isCheckout ? (
        <CheckoutSection />
      ) : isCart ? (
        <CartPage />
      ) : (
        <HomePage />
      )}
    </AppShell>
  );
}
