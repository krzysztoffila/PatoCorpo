import { Building2, Users, Rocket, Coffee, Clock } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Coffee,
      title: "Infinite Coffee Breaks",
      description: "Because nothing says productivity like your 7th espresso"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Making 5PM feel like an eternity away"
    },
    {
      icon: Clock,
      title: "KPI Excellence",
      description: "We measure everything, even your bathroom breaks"
    }
  ];

  return (
    <section className="py-16 bg-[#F5F4F0]">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 bg-white group hover:bg-[#F8F8F8] transition-colors">
            <feature.icon className="h-12 w-12 text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
            <p className="text-[#333333]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}