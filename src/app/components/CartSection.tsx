import { Link } from 'react-router-dom';

export default function CartSection() {
  // Placeholder cart items using the same visual language as products
  const items = [
    { id: 1, name: 'Pastel Amigurumi Bunny', price: 32, qty: 1 },
    { id: 2, name: 'Cozy Blanket - Pink Blush', price: 68, qty: 1 },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section
      id="cart"
      className="py-24 px-6 bg-gingham-blue"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-3" style={{ color: '#102C57' }}>
            My Cart
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#1679AB' }}>
            Your cozy creations, gathered together before they head home.
          </p>
        </div>

        {/* Cart card */}
        <div
          className="rounded-[2rem] bg-white/95 p-8 lg:p-10"
          style={{ boxShadow: '0 24px 70px rgba(16, 44, 87, 0.16)' }}
        >
          {/* Items */}
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 border-b border-dashed border-[#FFB1B1]/70 last:border-none last:pb-0"
              >
                <div>
                  <h3 className="text-lg" style={{ color: '#102C57' }}>
                    {item.name}
                  </h3>
                  <p className="text-sm" style={{ color: '#1679AB' }}>
                    Qty {item.qty}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl" style={{ color: '#102C57' }}>
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-8 pt-6 border-t border-dashed border-[#FFB1B1]/70 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm" style={{ color: '#1679AB' }}>
                Subtotal
              </p>
              <p className="text-2xl" style={{ color: '#102C57' }}>
                ${subtotal.toFixed(2)}
              </p>
            </div>
            <Link
              to="/checkout"
              className="px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center"
              style={{
                backgroundColor: '#102C57',
                color: 'white',
                boxShadow: '0 10px 26px rgba(16, 44, 87, 0.32)',
              }}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

