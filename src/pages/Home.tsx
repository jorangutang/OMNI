import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Activity,
  Cloud,
  Brain,
  Zap,
  AlertTriangle,
  BarChart3,
  Layers,
  TrendingUp,
  Shield,
  Target,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { GlassCard } from '@/components/GlassCard';
import { PointCloudBackground } from '@/components/PointCloudBackground';
import { TopoPattern } from '@/components/TopoPattern';

export function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Hero Section - Split Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50">
        <TopoPattern />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
            {/* Left: Value Proposition */}
            <motion.div {...fadeInUp} className="lg:mt-16">
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 sm:mb-6 leading-tight text-black">
                Operational
                <br />
                Intelligence
                <br />
                That Takes Action
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 max-w-xl">
                Most organisations sit on more data than they can use. We help you close that gap: connecting systems, surfacing what matters, and building tailored solutions that let your team act on it. Every engagement leaves you with a product, not a report.
              </p>

              <nav className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8" aria-label="Jump to section">
                {[
                  { id: 'problems', label: 'Problems' },
                  { id: 'why-us', label: 'Why us' },
                  { id: 'how-we-build', label: 'How we build' },
                  { id: 'approach', label: 'Our approach' },
                  { id: 'cta', label: 'Contact' },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </nav>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 group"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition-all text-black"
                >
                  See What We Solve
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 pt-8 sm:mt-12 sm:pt-12 border-t border-gray-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-black">10+</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">Years in Data-Heavy Systems</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-black">3</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">Continents Worked Across</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-black">90</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">Days to Working Product</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contour + animated data visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex flex-col gap-2 lg:pt-16 w-full max-w-lg"
            >
              <div className="relative h-[420px] w-full">
                <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: 'url(/images/Contours.png)' }}
                  />
                  <PointCloudBackground />
                </div>
              </div>
              <p className="text-xs text-gray-500">
                TL;DR — We turn your data into action: tailored systems and working products you keep, not reports or slide decks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem + Where We Focus (consolidated) */}
      <section id="problems" className="py-12 sm:py-16 md:py-24 relative bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-6 tracking-tight text-black">
              Your Data Isn't Working Hard Enough
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-0">
              We work with organisations that have data they're not fully using. Mining is one area we care about; these three challenges show up everywhere.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            <GlassCard scan>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <AlertTriangle className="text-emerald-700" size={20} />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-black">Reactive, Not Proactive</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">
                You're analysing what went wrong yesterday instead of preventing tomorrow's problems. Value is lost before you see it.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                We focus on systems that anticipate what's coming and give you time to act.
              </p>
            </GlassCard>

            <GlassCard scan>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <BarChart3 className="text-emerald-700" size={20} />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-black">Insights Without Action</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">
                More dashboards don't fix problems. Intelligence that can't drive real change is just expensive reporting.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                We focus on systems that reason across data and take action within guardrails, with human oversight.
              </p>
            </GlassCard>

            <GlassCard scan>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Layers className="text-emerald-700" size={20} />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-black">Siloed Systems</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">
                Data trapped across multiple platforms. No unified picture, just disconnected point solutions.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                We focus on integration and enabling your team to act on a single view instead of firefighting.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="pt-8 pb-12 sm:pt-12 sm:pb-16 md:pb-24 relative bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-6 tracking-tight text-black">
              Why Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The structural difference in how we work
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard className="border-l-4 border-l-emerald-500">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Target className="text-emerald-700" size={28} />
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-black">
                    Deterministic Solutions for Complex Data
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Generative AI is a Swiss Army knife: useful, but rarely the right tool when the job needs a scalpel. We focus on applied machine learning: domain-specific models, predictive analytics, and algorithmic optimisation tailored to your infrastructure. You get automated expertise, not just automated conversation.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Our Approach: 4-Layer Architecture */}
      <section id="how-we-build" className="py-12 sm:py-16 md:py-24 relative bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-6 tracking-tight text-black">
              We Build Systems That Act, Not Just Report
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Four layers: ingest, store, analyse, act. Each step is designed so the next one can run reliably.
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {/* Layer 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <GlassCard className="scan-container border-l-4 border-l-emerald-500">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <Activity size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs sm:text-sm text-black font-semibold">Layer 1</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-2xl mb-2 sm:mb-3 text-black">Data Integration</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                      Unified data ingestion from any source. We connect to your existing systems without rip-and-replace, handling multi-vendor, multi-platform environments seamlessly.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">Real-time streaming</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">Historical batch</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">Multi-vendor support</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Layer 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard className="scan-container border-l-4 border-l-emerald-500">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <Cloud size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs sm:text-sm text-gray-700 font-semibold">Layer 2</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-2xl mb-2 sm:mb-3 text-black">Cloud Infrastructure</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                      Centralised, real-time data infrastructure built on AWS. Streaming and batch processing, low-cost long-term storage, scalable and secure by default.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">AWS native</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">Auto-scaling</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">SOC 2 compliant</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Layer 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard className="scan-container border-l-4 border-l-emerald-500">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <Brain size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs sm:text-sm text-black font-semibold">Layer 3</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-2xl mb-2 sm:mb-3 text-black">Decision Intelligence</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                      KPIs, ML models, and risk scoring that answer the hard operational questions so you can act instead of dig.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">Predictive models</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">Root cause analysis</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">Anomaly detection</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Layer 4 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <GlassCard className="scan-container border-2 border-black border-l-4 border-l-orange-500">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                      <Zap size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs sm:text-sm text-gray-700 font-semibold">Layer 4</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-2xl mb-2 sm:mb-3 text-black">Agentic Orchestration</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                      The layer that connects intelligence to action. Automated recommendations, intervention scheduling, and integration with your existing business systems. Human-in-the-loop by default.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-mono">Automated actions</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">Human approval</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">System integration</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section id="approach" className="py-12 sm:py-16 md:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-mono text-emerald-800">Our Approach</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-6 tracking-tight text-black">
              Consulting That Leaves You With a Product
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              We don't hand over slide decks; you get a working solution built for your situation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <GlassCard hover={false} className="flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 inline-flex">
                  <TrendingUp className="text-emerald-700" size={28} />
                </div>
                <div className="text-lg sm:text-xl font-display font-bold mb-1.5 sm:mb-2 text-black">Tailored, Not Generic</div>
                <div className="text-gray-600 text-xs sm:text-sm">Every solution is built around your data, your stack, and your team. No off-the-shelf templates.</div>
              </div>
              <div className="h-1 bg-black rounded-full mt-4 flex-shrink-0"></div>
            </GlassCard>

            <GlassCard hover={false} className="flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 inline-flex">
                  <BarChart3 className="text-emerald-700" size={28} />
                </div>
                <div className="text-lg sm:text-xl font-display font-bold mb-1.5 sm:mb-2 text-black">Product, Not Report</div>
                <div className="text-gray-600 text-xs sm:text-sm">You walk away with something your team can use.</div>
              </div>
              <div className="h-1 bg-black rounded-full mt-4 flex-shrink-0"></div>
            </GlassCard>

            <GlassCard hover={false} className="flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 inline-flex">
                  <Shield className="text-emerald-700" size={28} />
                </div>
                <div className="text-lg sm:text-xl font-display font-bold mb-1.5 sm:mb-2 text-black">AI With Guardrails</div>
                <div className="text-gray-600 text-xs sm:text-sm">We use AI to build faster and smarter, with strong guardrails so nothing ships without confidence.</div>
              </div>
              <div className="h-1 bg-black rounded-full mt-4 flex-shrink-0"></div>
            </GlassCard>

            <GlassCard hover={false} className="flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 inline-flex">
                  <Zap className="text-emerald-700" size={28} />
                </div>
                <div className="text-lg sm:text-xl font-display font-bold mb-1.5 sm:mb-2 text-black">Fast to Value</div>
                <div className="text-gray-600 text-xs sm:text-sm">Working product in 90 days or less. We size up the problem, pick the right tech, and ship.</div>
              </div>
              <div className="h-1 bg-black rounded-full mt-4 flex-shrink-0"></div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-12 sm:py-16 md:py-24 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden"
          >
            <TopoPattern />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight text-black">
                Ready to Turn Data Into Action?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                60-minute conversation. No obligation. No sales pitch. Just a chance to understand your challenges and see if we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 group"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition-all text-black"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
