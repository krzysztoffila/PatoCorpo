import { Bird } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-[#F8F8F8] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bird className="h-8 w-8 text-black" />
            <span className="text-2xl font-bold text-black">PatoCorp</span>
          </div>
          
          <div className="w-1/2 px-12">
            <div className="flex justify-between items-center bg-[#F5F5F5] rounded-[50px] py-2 px-12">
              <a href="#about" className="text-[#333333] hover:text-black transition-colors text-sm font-medium">About</a>
              <a href="#services" className="text-[#333333] hover:text-black transition-colors text-sm font-medium">Services</a>
              <a href="#contact" className="text-[#333333] hover:text-black transition-colors text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}