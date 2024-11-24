import { ChevronRight, Bird } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0"></div>

      {/* Right side background image */}
      <div className="absolute right-0 top-0 h-full w-1/2 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
          alt="Corporate office"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-black/80">
          <div className="absolute inset-0 opacity-75">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 h-full relative z-10">
        <div className="flex items-center h-[80vh]">
          <div className="max-w-xl">
            <div className="mb-6 animate-bounce">
              <Bird className="h-16 w-16 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              PatoCorpo™ <br />
              <span className="text-white text-4xl md:text-5xl font-light italic">Where Micromanaging Meets Macro Effects</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8">
              Transforming ordinary people into corporate cogs since 1970. We're not just disrupting industries - we're disrupting work-life balance!
            </p>
            
            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-none font-semibold hover:bg-black/90 transition-colors flex items-center gap-2 group">
                Join the Matrix
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-none font-semibold hover:bg-white/10 transition-colors">
                View Benefits*
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">*Benefits subject to endless meetings and quarterly reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}