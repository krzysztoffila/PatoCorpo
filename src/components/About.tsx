import { Bird, CheckCircle2 } from 'lucide-react';

export function About() {
  const benefits = [
    "Meetings about planning meetings",
    "State-of-the-art office politics",
    "Premium desk decoration policies"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F5F5F5] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-black">Why PatoCorpo™?</h2>
              <p className="text-[#333333] mb-6">
                Since 1970, we've been perfecting the art of turning simple tasks into complex procedures. Our mission? Making sure no decision goes without at least five levels of approval.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-black" />
                    <span className="text-[#333333]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Modern office space"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}