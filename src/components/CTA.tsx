import { ChevronRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-16 bg-[#F5F4F0]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Ready to Embrace the Corporate Life?</h2>
        <p className="text-[#333333] mb-8 max-w-2xl mx-auto">
          Join our ever-growing family of professionally managed individuals. Warning: May cause sudden urges to create PowerPoint presentations.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-none font-semibold hover:bg-black/90 transition-colors inline-flex items-center gap-2">
          Submit Your Soul
          <ChevronRight className="h-5 w-5" />
        </button>
        <p className="text-xs text-[#333333] mt-4">*Terms and conditions apply. Soul retrieval process subject to HR approval.</p>
      </div>
    </section>
  );
}