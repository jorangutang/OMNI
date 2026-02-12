import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { GlassCard } from '@/components/GlassCard';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-black">Let's Start the Conversation</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12">
            We'll respond within 24 hours to schedule a 60-minute discovery call. No obligation. No sales pitch.
          </p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <GlassCard className="border-l-4 border-l-emerald-500">
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-black"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Company *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-black"
                      placeholder="Company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-black"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Industry</label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-black">
                      <option value="">Select industry</option>
                      <option>Gold Processing</option>
                      <option>Copper Processing</option>
                      <option>Iron Ore</option>
                      <option>Other Mining</option>
                      <option>Industrial Process</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Tell us about your situation</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors resize-none text-black"
                      placeholder="What brings you here? What challenges are you facing?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-black text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </GlassCard>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <GlassCard className="border-l-4 border-l-emerald-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1 text-black">Email</h3>
                    <a href="mailto:contact@omni.com" className="text-gray-600 hover:text-black transition-colors">
                      contact@omni.com
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="border-l-4 border-l-emerald-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1 text-black">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-black transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="border-l-4 border-l-emerald-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1 text-black">Location</h3>
                    <p className="text-gray-600">
                      Available globally for remote consultations
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
