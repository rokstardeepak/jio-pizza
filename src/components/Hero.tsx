import { Clock, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      // Store is open from 12:00 PM (12) to 11:00 PM (23)
      setIsOpen(currentHour >= 12 && currentHour < 23);
    };
    
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop"
          alt="Delicious pizza with cheese pull"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            {isOpen ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Open Now
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Closed Now
              </span>
            )}
            <span className="text-zinc-400 text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" />
              12 PM - 11 PM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            The best pizza in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 block mt-2 sm:inline sm:mt-0">
              Noida Sector 73.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-300 mb-10 max-w-xl leading-relaxed"
          >
            Premium pizzas, burgers, and beverages crafted with the finest ingredients. 
            Enjoy happy hours, live music, and a cozy fireplace ambiance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a
              href="#menu"
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] hover:-translate-y-0.5"
            >
              Order Now
            </a>
            <a
              href="#location"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-lg transition-all duration-300 border border-zinc-700"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2 sm:gap-3 flex-wrap max-w-full"
          >
            <span className="text-zinc-400 text-xs sm:text-sm font-medium whitespace-nowrap">
              Or order online via:
            </span>
            <a
              href="https://www.zomato.com/ncr/jio-pizza-sector-71-noida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-[#E23744] hover:bg-[#c92d39] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
            >
              Zomato
            </a>
            <a
              href="https://www.swiggy.com/restaurants/noida-1/sector-71/jio-pizza-687552/dineout"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-[#FC8019] hover:bg-[#e06d12] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
            >
              Swiggy
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
