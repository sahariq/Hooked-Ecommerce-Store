import { Link } from 'react-router-dom';

export default function OrderSuccessSection() {
  return (
    <section className="py-24 px-6 bg-gingham-blue">
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
          style={{ backgroundColor: '#FFB1B1' }}
        >
          <span className="text-3xl" aria-hidden="true">
            ✓
          </span>
        </div>

        <h1 className="text-4xl mb-4" style={{ color: '#102C57' }}>
          Order Placed
        </h1>
        <p className="text-lg mb-8" style={{ color: '#1679AB' }}>
          Thank you for supporting handmade. We&apos;ll review your order and follow up
          with payment and shipping details shortly.
        </p>

        <div
          className="rounded-[2rem] bg-white/95 p-8 space-y-4 mx-auto"
          style={{ boxShadow: '0 20px 60px rgba(16, 44, 87, 0.16)' }}
        >
          <p className="text-sm" style={{ color: '#102C57' }}>
            You&apos;ll also receive an email confirmation with your order summary.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <Link
              to="/"
              className="px-8 py-3 rounded-full inline-flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: '#102C57',
                color: 'white',
                boxShadow: '0 8px 20px rgba(16, 44, 87, 0.3)',
              }}
            >
              Back to Home
            </Link>
            <Link
              to="/cart"
              className="px-8 py-3 rounded-full inline-flex items-center justify-center border-2 transition-all hover:bg-white"
              style={{ borderColor: '#102C57', color: '#102C57' }}
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

