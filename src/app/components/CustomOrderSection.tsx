import { Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function CustomOrderSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section 
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#FFCBCB' }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4" style={{ color: '#102C57' }} />
              <span className="text-sm" style={{ color: '#102C57' }}>Made Just For You</span>
            </div>
            
            <h2 className="text-5xl mb-6" style={{ color: '#102C57' }}>
              Dream It,<br />We'll Crochet It
            </h2>
            
            <p className="text-lg mb-6" style={{ color: '#102C57', opacity: 0.8 }}>
              Have a special vision in mind? Our artisans love bringing your ideas to life. From custom colors to unique designs, we create one-of-a-kind pieces that tell your story.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFB1B1' }}>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 style={{ color: '#102C57' }}>Personalized Design</h4>
                  <p className="text-sm" style={{ color: '#102C57', opacity: 0.7 }}>
                    Choose your colors, size, and style
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFB1B1' }}>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 style={{ color: '#102C57' }}>Expert Craftsmanship</h4>
                  <p className="text-sm" style={{ color: '#102C57', opacity: 0.7 }}>
                    Skilled artisans with years of experience
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFB1B1' }}>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 style={{ color: '#102C57' }}>Premium Materials</h4>
                  <p className="text-sm" style={{ color: '#102C57', opacity: 0.7 }}>
                    Only the finest yarns and materials
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div 
            className="rounded-3xl p-8 lg:p-10 bg-white"
            style={{ boxShadow: '0 20px 60px rgba(16, 44, 87, 0.15)' }}
          >
            <h3 className="text-2xl mb-6" style={{ color: '#102C57' }}>
              Start Your Custom Order
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2 text-sm"
                  style={{ color: '#102C57' }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl border-2 transition-all focus:outline-none"
                  style={{ 
                    borderColor: '#FFCBCB',
                    backgroundColor: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1679AB'}
                  onBlur={(e) => e.target.style.borderColor = '#FFCBCB'}
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2 text-sm"
                  style={{ color: '#102C57' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl border-2 transition-all focus:outline-none"
                  style={{ 
                    borderColor: '#FFCBCB',
                    backgroundColor: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1679AB'}
                  onBlur={(e) => e.target.style.borderColor = '#FFCBCB'}
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="details" 
                  className="block mb-2 text-sm"
                  style={{ color: '#102C57' }}
                >
                  Tell Us About Your Vision
                </label>
                <textarea
                  id="details"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  rows={5}
                  className="w-full px-5 py-3 rounded-xl border-2 transition-all focus:outline-none resize-none"
                  style={{ 
                    borderColor: '#FFCBCB',
                    backgroundColor: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1679AB'}
                  onBlur={(e) => e.target.style.borderColor = '#FFCBCB'}
                  placeholder="Describe your dream crochet creation..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
                style={{ 
                  backgroundColor: '#1679AB',
                  color: 'white',
                  boxShadow: '0 8px 20px rgba(22, 121, 171, 0.3)'
                }}
              >
                <Send className="w-5 h-5" />
                <span>Submit Custom Request</span>
              </button>
            </form>

            <p className="mt-6 text-sm text-center" style={{ color: '#102C57', opacity: 0.6 }}>
              We'll get back to you within 24 hours with a quote
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
    </section>
  );
}
