import { useState, useEffect } from 'react';
import { menuData } from '../data';
import { CartItem } from '../types';
import { PizzaCard, RegularCard } from './MenuItemCard';

interface MenuProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const CATEGORIES = [
  { id: 'pizzas', label: 'Pizzas', subtitle: 'Handcrafted pizzas with fresh mozzarella & savory toppings' },
  { id: 'mini_pizzas', label: 'Mini Pizzas', subtitle: 'Single-serving pizzas loaded with rich cheese and toppings' },
  { id: 'sides_starters', label: 'Sides & Starters', subtitle: 'Crispy fries, garlic bread, chicken wings & desserts' },
  { id: 'pasta', label: 'Pasta', subtitle: 'Tossed in rich, creamy, and flavorful gourmet sauces' },
  { id: 'wraps', label: 'Wraps', subtitle: 'Fresh rolled wraps packed with seasoned fillings' },
  { id: 'sandwiches', label: 'Sandwiches', subtitle: 'Toasted and grilled with mouth-watering fillings' },
  { id: 'burgers', label: 'Burgers', subtitle: 'Crispy & juicy burgers with fresh veggies and soft buns' },
  { id: 'beverages_shakes', label: 'Beverages', subtitle: 'Refreshing mojitos, thick milkshakes & cold coffee' },
];

export default function Menu({ onAddToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState('pizzas');

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(`category-${id}`);
    if (element) {
      const navOffset = 135;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = CATEGORIES.length - 1; i >= 0; i--) {
        const cat = CATEGORIES[i];
        const el = document.getElementById(`category-${cat.id}`);
        if (el && el.offsetTop <= scrollPos) {
          setActiveCategory(cat.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="menu" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full mb-6"></div>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-sm">
            <span>Prefer delivery apps?</span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.zomato.com/ncr/jio-pizza-sector-71-noida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#E23744] hover:bg-[#c92d39] text-white font-bold text-xs shadow-md transition-all hover:scale-105"
              >
                Order on Zomato
              </a>
              <a
                href="https://www.swiggy.com/restaurants/noida-1/sector-71/jio-pizza-687552/dineout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#FC8019] hover:bg-[#e06d12] text-white font-bold text-xs shadow-md transition-all hover:scale-105"
              >
                Order on Swiggy
              </a>
            </div>
          </div>
        </div>

        {/* Quick-jump Category Navigation (All 8 Categories Visible - No Horizontal Scrolling) */}
        <div className="sticky top-[64px] z-30 bg-zinc-950/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-y border-zinc-800/80 mb-12 shadow-xl">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`w-full py-2 px-2.5 sm:px-3 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-between gap-1 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-orange-600 text-white shadow-[0_0_15px_rgba(234,88,12,0.4)] ring-1 ring-orange-400'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800/60'
                }`}
              >
                <span className="truncate text-left">{cat.label}</span>
                <span className="text-[10px] opacity-80 bg-black/40 px-1.5 py-0.5 rounded-full font-mono flex-shrink-0">
                  {menuData[cat.id as keyof typeof menuData]?.length || 0}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Vertical List of All Menu Sections */}
        <div className="space-y-20">
          {CATEGORIES.map((cat) => {
            const items = menuData[cat.id as keyof typeof menuData] || [];
            return (
              <div
                key={cat.id}
                id={`category-${cat.id}`}
                className="scroll-mt-36"
              >
                {/* Category Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800 pb-4 mb-8 gap-2">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {cat.label}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-600/20 text-orange-400 border border-orange-500/30">
                        {items.length} {items.length === 1 ? 'item' : 'items'}
                      </span>
                    </div>
                    {cat.subtitle && (
                      <p className="text-sm text-zinc-400 mt-1">{cat.subtitle}</p>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      const menuEl = document.getElementById('menu');
                      if (menuEl) {
                        menuEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-xs text-zinc-500 hover:text-orange-400 transition-colors self-start sm:self-auto cursor-pointer"
                  >
                    Top of menu ↑
                  </button>
                </div>

                {/* Items Grid for this Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {cat.id === 'pizzas'
                    ? (items as typeof menuData.pizzas).map((item) => (
                        <PizzaCard key={item.id} item={item} onAdd={onAddToCart} />
                      ))
                    : (items as typeof menuData.mini_pizzas).map((item) => (
                        <RegularCard key={item.id} item={item} onAdd={onAddToCart} />
                      ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
