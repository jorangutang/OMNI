import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  AlertTriangle,
  TrendingUp,
  Settings,
  Brain,
  Clock,
  Zap,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { GlassCard } from '@/components/GlassCard';
import { TopoPattern } from '@/components/TopoPattern';

export function Solutions() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16 relative bg-gray-50">
        <TopoPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-mono text-emerald-800">What We Solve</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 sm:mb-6 text-black">
              Problems Worth Solving
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6">
              We focus on high-leverage problems where data already exists but isn't driving decisions. Start focused, prove value, then scale.
            </p>
            <nav className="flex flex-wrap gap-2 justify-center" aria-label="Jump to section">
              {[
                { id: 'questions', label: 'Questions' },
                { id: 'featured', label: 'Featured use case' },
                { id: 'use-cases', label: 'Use cases' },
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
          </motion.div>
        </div>
      </section>

      {/* The Questions Section */}
      <section id="questions" className="py-12 sm:py-16 md:py-24 bg-white relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-6 tracking-tight text-black">
              Can You Answer These Questions?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-3 sm:mb-4">
              If you're struggling to answer these, or you know the answer but don't know what to do about it, we should talk.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              "Why did performance drop, and what specifically caused it?",
              "Where is the real bottleneck in your operation right now?",
              "How much time was lost to avoidable delays, and what triggered them?",
              "Which issues are operational vs mechanical vs human?",
              "What changed compared to the previous period that explains the difference?",
              "Which patterns or behaviours are driving higher costs?",
              "Are you intervening too early or too late on maintenance?",
              "Where are you losing throughput across your process chain?",
              "What single change would have the biggest impact tomorrow?",
            ].map((question, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-2 sm:gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-gray-400 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm sm:text-base">{question}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8 sm:mt-12"
          >
            <p className="text-base sm:text-lg text-gray-900 max-w-2xl mx-auto">
              These aren't rhetorical questions. They're the difference between <span className="font-semibold">reactive firefighting</span> and <span className="font-semibold">proactive control</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Case 1: Predictive Downtime Prevention (Featured) */}
      <section id="featured" className="py-12 sm:py-16 md:py-24 relative bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border-2 border-black rounded-2xl p-5 sm:p-8 md:p-12 relative overflow-hidden">
              <TopoPattern />
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="px-3 py-1 sm:px-4 sm:py-1.5 bg-emerald-600 text-white rounded-full">
                    <span className="text-xs sm:text-sm font-mono">Featured Use Case</span>
                  </div>
                  <div className="h-px flex-1 bg-gray-300"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                      <AlertTriangle size={28} className="text-white" />
                    </div>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-6 tracking-tight text-black">
                      Predictive Downtime Prevention
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-5 sm:mb-8">
                      Unplanned downtime is the number one value destroyer in any operation that depends on continuous processes
                    </p>

                    <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-emerald-700">✓</span>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base">Reduces throughput and destabilises recovery rates</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-emerald-700">✓</span>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base">Causes cascading issues across connected systems</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-emerald-700">✓</span>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base">Costs significant value per event in lost production</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl mb-2 sm:mb-4 text-black">What We Build</h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                        Real-time risk scoring for critical assets across your operation, tailored to your specific environment and equipment.
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 border-l-4 border-l-emerald-500">
                      <h4 className="font-semibold mb-2 sm:mb-4 text-emerald-800 text-sm sm:text-base">What You Get:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Clock className="text-emerald-700" size={20} />
                          </div>
                          <div>
                            <div className="font-semibold text-sm mb-1 text-black">Advance warning</div>
                            <div className="text-gray-600 text-xs">Predict issues before they become emergencies</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Brain className="text-emerald-700" size={20} />
                          </div>
                          <div>
                            <div className="font-semibold text-sm mb-1 text-black">Root cause classification</div>
                            <div className="text-gray-600 text-xs">Understand the driver, not just the symptom</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Zap className="text-emerald-700" size={20} />
                          </div>
                          <div>
                            <div className="font-semibold text-sm mb-1 text-black">Decision-ready action plans</div>
                            <div className="text-gray-600 text-xs">What to check, what to stage, when to schedule</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Use Cases */}
      <section id="use-cases" className="py-12 sm:py-16 md:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <GlassCard scan className="border-l-4 border-l-emerald-500">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-emerald-700" size={24} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-black">Throughput Optimisation</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Identify bottlenecks across your process chain. Optimise for current conditions. Reduce waste, fuel, and equipment wear.
              </p>
              <div className="space-y-2">
                <div className="text-xs text-gray-600">Key Metrics:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-700">Process efficiency</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-700">Cost per unit</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-700">Utilisation patterns</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard scan className="border-l-4 border-l-emerald-500">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="text-emerald-700" size={24} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-black">Maintenance Scheduling</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Stop assets at the right time, not too early, not too late. Predict component failures before they cascade. Coordinate cross-functional schedules.
              </p>
              <div className="space-y-2">
                <div className="text-xs text-gray-600">Key Metrics:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-700">Remaining useful life</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-700">Parts staging</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-700">Schedule alignment</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard scan className="border-l-4 border-l-emerald-500">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-emerald-700" size={24} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-black">Operational Intelligence</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Real-time performance analysis. Classify delays by type. Surface root causes in minutes instead of days.
              </p>
              <div className="space-y-2">
                <div className="text-xs text-gray-600">Key Metrics:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-700">Shift analytics</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-700">Root cause ID</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-700">Performance delta</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-12 sm:py-16 md:py-24 bg-gray-50 scroll-mt-24">
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
                Start With a Focused Engagement
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Pick your highest-leverage problem. We'll scope a focused engagement, prove value, and scale from there.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 group"
              >
                Start a Conversation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
