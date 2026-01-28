import { Link } from 'react-router-dom';

export default function CheckoutSection() {
  return (
    <section className="py-24 px-6 bg-gingham-blue">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl mb-3" style={{ color: '#102C57' }}>
            Checkout
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#1679AB' }}>
            A few final stitches before your cozy creations are on their way.
          </p>
        </div>

        {/* Checkout card */}
        <div
          className="rounded-[2rem] bg-white/95 p-8 lg:p-10 space-y-8"
          style={{ boxShadow: '0 24px 70px rgba(16, 44, 87, 0.16)' }}
        >
          {/* Shipping info */}
          <div>
            <h2 className="text-xl mb-4" style={{ color: '#102C57' }}>
              Shipping Details
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm" style={{ color: '#102C57' }}>
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none"
                  style={{ borderColor: '#FFCBCB', backgroundColor: 'white' }}
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm" style={{ color: '#102C57' }}>
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none"
                  style={{ borderColor: '#FFCBCB', backgroundColor: 'white' }}
                  placeholder="jane@example.com"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm" style={{ color: '#102C57' }}>
                  Address
                </label>
                <input
                  className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none"
                  style={{ borderColor: '#FFCBCB', backgroundColor: 'white' }}
                  placeholder="Street, city, country"
                />
              </div>
            </div>
          </div>

          {/* Payment method (static placeholder) */}
          <div>
            <h2 className="text-xl mb-4" style={{ color: '#102C57' }}>
              Payment
            </h2>
            <p className="text-sm mb-3" style={{ color: '#1679AB' }}>
              Online payments coming soon. For now, we&apos;ll confirm your order and share payment details personally.
            </p>
          </div>

          {/* Place order */}
          <div className="pt-4 border-t border-dashed border-[#FFB1B1]/70 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm" style={{ color: '#1679AB' }}>
              By placing your order, you agree to our handcrafted processing times.
            </p>
            <Link
              to="/order-success"
              className="px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center"
              style={{
                backgroundColor: '#102C57',
                color: 'white',
                boxShadow: '0 10px 26px rgba(16, 44, 87, 0.32)',
              }}
            >
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

