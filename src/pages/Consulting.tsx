import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export function Consulting() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <div className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-5xl mb-6 text-black">Consulting</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
