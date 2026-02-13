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

      {/* Hero Section - Full Width Impact */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50">
        <TopoPattern />
        
        <div className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left: Value Proposition */}
              <motion.div {...fadeInUp}>
                <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter mb-6 sm:mb-8 leading-[0.95] text-black">
                  Operational
                  <br />
                  Intelligence
                  <br />
                  That Takes Action
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
                  Most organisations sit on more data than they can use. We help you close that gap: connecting systems, surfacing what matters, and building tailored solutions that let your team act on it.
                </p>

                <nav className="flex flex-wrap gap-2 mb-10 sm:mb-12" aria-label="Jump to section">
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
                      className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white/60 rounded-full transition-all border border-transparent hover:border-gray-200"
                    >
                      {label}
                    </button>
                  ))}
                </nav>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 bg-black text-white font-semibold rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 group text-lg shadow-lg shadow-black/10"
                  >
                    Start a Conversation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
                  </Link>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 hover:border-black transition-all text-black text-lg"
                  >
                    See What We Solve
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 border-t-2 border-gray-200">
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-black mb-2">10+</div>
                    <div className="text-sm sm:text-base text-gray-600">Years in Data-Heavy Systems</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-black mb-2">3</div>
                    <div className="text-sm sm:text-base text-gray-600">Continents Worked Across</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-black mb-2">90</div>
                    <div className="text-sm sm:text-base text-gray-600">Days to Working Product</div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Contour + animated data visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:flex flex-col gap-4 w-full"
              >
                <div className="relative h-[500px] w-full">
                  <div className="absolute inset-0 bg-white border-2 border-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-60"
                      style={{ backgroundImage: 'url(/images/Contours.png)' }}
                    />
                    <PointCloudBackground />
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic">
                  We turn your data into action: tailored systems and working products you keep, not reports or slide decks.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem + Where We Focus (consolidated) */}
      <section id="problems" className="py-20 sm:py-24 md:py-32 relative bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 tracking-tight text-black leading-[1.1]">
              Your Data Isn't
              <br />
              Working Hard Enough
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We work with organisations that have data they're not fully using. Mining is one area we care about; these three challenges show up everywhere.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <GlassCard scan>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                <AlertTriangle className="text-emerald-700" size={28} />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-black">Reactive, Not Proactive</h3>
              <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
                You're analysing what went wrong yesterday instead of preventing tomorrow's problems. Value is lost before you see it.
              </p>
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                We focus on systems that anticipate what's coming and give you time to act.
              </p>
            </GlassCard>

            <GlassCard scan>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                <BarChart3 className="text-emerald-700" size={28} />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-black">Insights Without Action</h3>
              <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
                More dashboards don't fix problems. Intelligence that can't drive real change is just expensive reporting.
              </p>
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                We focus on systems that reason across data and take action within guardrails, with human oversight.
              </p>
            </GlassCard>

            <GlassCard scan>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                <Layers className="text-emerald-700" size={28} />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-black">Siloed Systems</h3>
              <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
                Data trapped across multiple platforms. No unified picture, just disconnected point solutions.
              </p>
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                We focus on integration and enabling your team to act on a single view instead of firefighting.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 sm:py-24 md:py-32 relative bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 tracking-tight text-black">
              Why Us
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
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
      <section id="how-we-build" className="py-20 sm:py-24 md:py-32 relative bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 tracking-tight text-black leading-[1.1]">
              We Build Systems That Act,
              <br />
              Not Just Report
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                    <h3 className="font-display font-bold text-lg sm:text-2xl mb-2 sm:mb-3 text-black">AI + Decision Intelligence</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                      KPIs, ML models, and risk scoring that answer the hard operational questions so you can act instead of dig.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">AI</span>
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
                    <h3 className="font-display font-bold text-lg sm:text-2xl mb-2 sm:mb-3 text-black">GenAI + Agentic Orchestration</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                      The layer that connects intelligence to action. Automated recommendations, intervention scheduling, and integration with your existing business systems. Human-in-the-loop by default.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-mono">GenAI</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-700">Automated actions</span>
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
      <section id="approach" className="py-20 sm:py-24 md:py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 bg-emerald-50 border border-emerald-200 rounded-full mb-6 sm:mb-8">
              <span className="text-sm sm:text-base font-mono text-emerald-800 font-semibold">Our Approach</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 tracking-tight text-black leading-[1.1]">
              Consulting That Leaves You
              <br />
              With a Product
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
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
      <section id="cta" className="py-20 sm:py-24 md:py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-xl"
          >
            <TopoPattern />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 tracking-tight text-black leading-[1.1]">
                Ready to Turn Data
                <br />
                Into Action?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                60-minute conversation. No obligation. No sales pitch. Just a chance to understand your challenges and see if we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-black text-white font-semibold rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 group text-lg shadow-lg shadow-black/10"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 hover:border-black transition-all text-black text-lg"
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
