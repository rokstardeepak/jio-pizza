import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <img src="/logo.png" alt="Jio Pizza Logo" className="w-full h-full object-cover scale-110" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Jio Pizza</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs text-center md:text-left">
              Premium pizzas, burgers, and beverages in Noida. Craving satisfaction, delivered.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-orange-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-orange-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-orange-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.zomato.com/ncr/jio-pizza-sector-71-noida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-4 py-2 rounded-full bg-zinc-900 hover:bg-[#E23744] text-zinc-400 hover:text-white font-bold text-xs transition-all duration-300"
              >
                Order on Zomato
              </a>
              <a
                href="https://www.swiggy.com/restaurants/noida-1/sector-71/jio-pizza-687552/dineout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-4 py-2 rounded-full bg-zinc-900 hover:bg-[#FC8019] text-zinc-400 hover:text-white font-bold text-xs transition-all duration-300"
              >
                Order on Swiggy
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Jio Pizza. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
