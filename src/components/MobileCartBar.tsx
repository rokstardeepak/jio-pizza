import { ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface MobileCartBarProps {
  cart: CartItem[];
  onOpenCart: () => void;
}

export default function MobileCartBar({ cart, onOpenCart }: MobileCartBarProps) {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <aside
      aria-label="Mobile Shopping Cart"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800/90 shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <button
        onClick={onOpenCart}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer active:scale-[0.98] ${
          totalItems > 0
            ? 'bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white shadow-lg shadow-orange-600/30'
            : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-700'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center relative ${
              totalItems > 0
                ? 'bg-white/20 text-white'
                : 'bg-zinc-800 text-zinc-400'
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[1.25rem] h-5 px-1 bg-white text-orange-600 text-[11px] font-black rounded-full flex items-center justify-center shadow-sm">
                {totalItems}
              </span>
            )}
          </div>

          <div className="text-left">
            {totalItems > 0 ? (
              <>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-orange-100 uppercase tracking-wider">
                    {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
                  </span>
                  <span className="text-white/60">•</span>
                  <span className="text-base font-black text-white">
                    ₹{totalPrice}
                  </span>
                </div>
                <p className="text-[11px] text-white/80 line-clamp-1">
                  Tap to view order & checkout
                </p>
              </>
            ) : (
              <>
                <div className="text-sm font-bold text-white">
                  Your Cart (0)
                </div>
                <p className="text-[11px] text-zinc-400">
                  Tap to view cart & offers
                </p>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm pl-2">
          <span>{totalItems > 0 ? 'View Cart' : 'Open Cart'}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </button>
    </aside>
  );
}
