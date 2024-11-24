import { TrendingUp, Users, Coffee, FileSpreadsheet } from 'lucide-react';

export function Metrics() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "487%",
      label: "Increase in Unnecessary Meetings"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Souls Successfully Corporatized"
    },
    {
      icon: Coffee,
      value: "∞",
      label: "Coffee Cups Consumed Daily"
    },
    {
      icon: FileSpreadsheet,
      value: "1M+",
      label: "Excel Sheets Generated"
    }
  ];

  return (
    <section className="py-16 bg-[#F5F4F0]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Impact By The Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <metric.icon className="h-12 w-12 mx-auto mb-4 text-black" />
              <p className="text-4xl font-bold mb-2 text-black">{metric.value}</p>
              <p className="text-[#333333]">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}