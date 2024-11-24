import { Bird } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#F5F5F5] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Bird className="h-8 w-8 text-black" />
          <span className="text-2xl font-bold text-black">PatoCorpo™</span>
        </div>
        <div className="text-center">
          <p className="text-[#333333]">© {new Date().getFullYear()} PatoCorpo™. All rights reserved, especially during lunch breaks.</p>
          <p className="mt-2 text-[#333333]">Optimizing human capital through strategic synergy since 1970</p>
        </div>
      </div>
    </footer>
  );
}