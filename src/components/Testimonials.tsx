import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Thanks to PatoCorpo™'s synergy-first approach, I now spend 80% of my day in meetings about meetings!",
      author: "John D.",
      role: "Senior Meeting Attendee"
    },
    {
      quote: "I haven't seen my family in weeks, but my PowerPoint skills are incredible now!",
      author: "Sarah M.",
      role: "Chief Slide Designer"
    },
    {
      quote: "I used to make decisions in minutes. Now I can stretch them out for months!",
      author: "Mike R.",
      role: "Decision Postponement Specialist"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Success Stories*</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F5F5F5] p-6 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-black fill-current" />
                ))}
              </div>
              <p className="text-[#333333] mb-4 italic">&quot;{testimonial.quote}&quot;</p>
              <div>
                <p className="font-semibold text-black">{testimonial.author}</p>
                <p className="text-sm text-[#333333]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-center mt-4 text-[#333333]">*All testimonials have been approved by our Happiness Enhancement Department</p>
      </div>
    </section>
  );
}