/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import CartDrawer from './components/CartDrawer';
import About from './components/About';
import Reviews from './components/Reviews';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileCartBar from './components/MobileCartBar';
import { CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.id === newItem.id);
      
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...newItem, quantity: 1 }];
      }
    });
    // Open cart for better UX, or just let the badge update. Let's just open the cart
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + delta };
        }
        return item;
      }).filter((item) => item.quantity > 0);
    });
  };

  const clearCart = () => setCart([]);

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-200 font-sans selection:bg-orange-500/30 selection:text-orange-200 pb-24 md:pb-0">
      <Navbar 
        cartItemCount={cartItemCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        <Menu onAddToCart={handleAddToCart} />
        <About />
        <Reviews />
        <LocationHours />
      </main>

      <Footer />

      <FloatingWhatsApp />

      <MobileCartBar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
    </div>
  );
}
