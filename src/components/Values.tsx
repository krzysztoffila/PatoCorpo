import { Target, Lightbulb, Trophy, PieChart } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To transform simple tasks into complex procedures through innovative bureaucracy"
    },
    {
      icon: Lightbulb,
      title: "Vision",
      description: "A world where no decision is made without at least three committees"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Achieving mediocrity through excessive documentation"
    },
    {
      icon: PieChart,
      title: "Innovation",
      description: "Creating new ways to make old processes more complicated"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Corporate Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-[#F5F5F5] hover:bg-[#F8F8F8] transition-colors">
              <value.icon className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-2 text-black">{value.title}</h3>
              <p className="text-[#333333]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}