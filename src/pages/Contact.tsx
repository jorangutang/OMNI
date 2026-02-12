import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { GlassCard } from '@/components/GlassCard';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <div className="pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24 md:pb-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 text-black leading-[1.1]">
            Let's Start the
            <br />
            Conversation
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 sm:mb-16 leading-relaxed">
            We'll respond within 24 hours to schedule a 60-minute discovery call. No obligation. No sales pitch.
          </p>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
            <div>
              <GlassCard className="border-l-4 border-l-emerald-500">
                <form className="space-y-5 sm:space-y-6">
                  <div>
                    <label className="block text-base font-semibold mb-2 text-black">Name *</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors text-black text-base"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-semibold mb-2 text-black">Company *</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors text-black text-base"
                      placeholder="Company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-semibold mb-2 text-black">Email *</label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors text-black text-base"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-semibold mb-2 text-black">Industry</label>
                    <select className="w-full px-5 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors text-black text-base">
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
                    <label className="block text-base font-semibold mb-2 text-black">Tell us about your situation</label>
                    <textarea
                      rows={5}
                      className="w-full px-5 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors resize-none text-black text-base"
                      placeholder="What brings you here? What challenges are you facing?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-10 py-5 bg-black text-white font-semibold rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg shadow-lg shadow-black/10"
                  >
                    Send Message
                  </button>
                </form>
              </GlassCard>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <GlassCard className="border-l-4 border-l-emerald-500">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-emerald-700" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2 text-black">Email</h3>
                    <a href="mailto:contact@omni.com" className="text-gray-600 hover:text-black transition-colors text-base">
                      contact@omni.com
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="border-l-4 border-l-emerald-500">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-emerald-700" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2 text-black">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-black transition-colors text-base">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="border-l-4 border-l-emerald-500">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-emerald-700" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2 text-black">Location</h3>
                    <p className="text-gray-600 text-base">
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
