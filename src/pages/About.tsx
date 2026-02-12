import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-black">About Us</h1>

          <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              We're a group of technology leaders who've spent our careers building and running large-scale data systems. Between us we've worked inside US tech giants, European consultancies, the German automotive industry, and startups that grew fast. That breadth taught us one thing clearly: every organisation's problems are different, and the best solutions are the ones shaped around the specifics.
            </p>
            <p>
              Our focus is turning data into action. Most businesses we meet have more data than they know what to do with. The gap isn't collection, it's the step between having information and being able to act on it. That's where we come in.
            </p>

            <h2 className="font-display font-bold text-xl sm:text-2xl mt-8 sm:mt-12 mb-3 sm:mb-4 text-black border-l-4 border-emerald-500 pl-3 sm:pl-4">How we work</h2>
            <p>
              We consult, but not in the traditional sense. We come in, listen, size up your team and constraints, and then build. Every engagement leaves you with a working product tailored to your situation, not a slide deck or a set of recommendations. With AI, every solution can be purpose-built for the problem at hand, and we use that to move quickly without cutting corners.
            </p>

            <h2 className="font-display font-bold text-xl sm:text-2xl mt-8 sm:mt-12 mb-3 sm:mb-4 text-black border-l-4 border-emerald-500 pl-3 sm:pl-4">How we build</h2>
            <p>
              We've put strong guardrails in place so we can bring AI into our development safely. We ramp up on domain knowledge quickly, pick the right technology for the problem, and ship with confidence. These are patterns we've implemented the long way for years; now we use AI to build them more effectively, and pass that speed on to you.
            </p>

            <h2 className="font-display font-bold text-xl sm:text-2xl mt-8 sm:mt-12 mb-3 sm:mb-4 text-black border-l-4 border-emerald-500 pl-3 sm:pl-4">Where we're looking</h2>
            <p>
              We're particularly interested in mining and heavy industry, where operational data is abundant but often underused. That said, the problems we solve (siloed systems, reactive operations, insights that never reach the people who need them) show up in every industry that runs on data. If that sounds like your world, we'd like to hear from you.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 group"
            >
              Start a Conversation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
