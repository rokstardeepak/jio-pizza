import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
}

export default function CartDrawer({ isOpen, onClose, cart, updateQuantity, clearCart }: CartDrawerProps) {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = "Hi Jio Pizza! I'd like to order:\n\n";
    cart.forEach((item, index) => {
      const sizeStr = item.size ? ` (${item.size})` : '';
      message += `${index + 1}. ${item.name}${sizeStr} x${item.quantity} - ₹${item.price * item.quantity}\n`;
    });
    message += `\nTotal: ₹${subtotal}\n\nPlease confirm availability and delivery time.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919953675338?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-zinc-800 z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-orange-500" />
                Your Cart
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-zinc-500 space-y-4">
                  <ShoppingBag className="w-16 h-16 text-zinc-800 mb-2" />
                  <p className="text-lg font-medium text-zinc-400">Your cart is empty</p>
                  <p className="text-sm">Looks like you haven't added anything yet.</p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2 rounded-full bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors"
                  >
                    Browse Menu
                  </button>

                  <div className="pt-6 border-t border-zinc-900 w-full">
                    <p className="text-xs text-zinc-500 mb-3">Or order directly via your favorite delivery app:</p>
                    <div className="flex gap-2 justify-center">
                      <a
                        href="https://www.zomato.com/ncr/jio-pizza-sector-71-noida"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-[#E23744] hover:bg-[#c92d39] text-white font-bold text-xs shadow transition-all hover:scale-105"
                      >
                        Zomato
                      </a>
                      <a
                        href="https://www.swiggy.com/restaurants/noida-1/sector-71/jio-pizza-687552/dineout"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-[#FC8019] hover:bg-[#e06d12] text-white font-bold text-xs shadow transition-all hover:scale-105"
                      >
                        Swiggy
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 items-start">
                      <div className="flex-1">
                        <h4 className="text-zinc-100 font-semibold line-clamp-1">
                          {item.name} {item.size && <span className="text-zinc-500 font-normal">({item.size})</span>}
                        </h4>
                        <div className="text-orange-500 font-medium mt-1">₹{item.price}</div>
                      </div>
                      <div className="flex items-center gap-3 bg-zinc-900 rounded-full border border-zinc-800 px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-zinc-200 font-medium text-sm min-w-[1ch] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
                <div className="flex justify-between items-center mb-6 text-zinc-300">
                  <span className="font-medium">Subtotal</span>
                  <span className="text-2xl font-bold text-white">₹{subtotal}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-lg transition-colors flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.5)]"
                  >
                    Checkout via WhatsApp
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <div className="flex gap-3">
                    <button
                      onClick={onClose}
                      className="flex-1 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium transition-colors border border-zinc-800"
                    >
                      Continue Shopping
                    </button>
                    <button
                      onClick={clearCart}
                      className="py-3 px-6 rounded-xl bg-red-950/30 text-red-500 hover:bg-red-900/50 hover:text-red-400 font-medium transition-colors border border-red-900/30"
                    >
                      Clear
                    </button>
                  </div>

                  <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400">
                    <span>Or order online via:</span>
                    <div className="flex gap-2">
                      <a
                        href="https://www.zomato.com/ncr/jio-pizza-sector-71-noida"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full bg-[#E23744] hover:bg-[#c92d39] text-white font-bold transition-all hover:scale-105"
                      >
                        Zomato
                      </a>
                      <a
                        href="https://www.swiggy.com/restaurants/noida-1/sector-71/jio-pizza-687552/dineout"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full bg-[#FC8019] hover:bg-[#e06d12] text-white font-bold transition-all hover:scale-105"
                      >
                        Swiggy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
