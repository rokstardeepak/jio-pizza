import { ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartItemCount, onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-zinc-800 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <img src="/logo.png" alt="Jio Pizza Logo" className="w-full h-full object-cover scale-110" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">Jio Pizza</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors">Menu</a>
          <a href="#about" className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors">About Us</a>
          <a href="#reviews" className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors">Reviews</a>
          <a href="#location" className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors">Location</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 mr-1">
            <a
              href="https://www.zomato.com/ncr/jio-pizza-sector-71-noida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#E23744] hover:bg-[#c92d39] text-white font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              Zomato
            </a>
            <a
              href="https://www.swiggy.com/restaurants/noida-1/sector-71/jio-pizza-687552/dineout"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#FC8019] hover:bg-[#e06d12] text-white font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              Swiggy
            </a>
          </div>

          <button
            onClick={onOpenCart}
            className="relative p-2 text-zinc-300 hover:text-orange-500 transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-orange-600 text-white text-xs font-bold rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
