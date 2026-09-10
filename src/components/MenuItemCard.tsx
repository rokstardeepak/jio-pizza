import { useState } from 'react';
import { Size, PizzaItem, RegularItem, CartItem } from '../types';
import { Plus } from 'lucide-react';

const FALLBACK_PIZZA = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80';
const FALLBACK_FOOD = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';

interface PizzaCardProps {
  key?: string;
  item: PizzaItem;
  onAdd: (item: Omit<CartItem, 'quantity'>) => void;
}

export function PizzaCard({ item, onAdd }: PizzaCardProps) {
  const [selectedSize, setSelectedSize] = useState<Size>('M');
  const [imgSrc, setImgSrc] = useState(item.image);
  const sizeDetails = item.sizes[selectedSize];

  const handleAdd = () => {
    onAdd({
      id: `${item.id}-${selectedSize}`,
      name: item.name,
      size: selectedSize,
      price: sizeDetails.price,
    });
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col h-full transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] group overflow-hidden">
      <div className="h-48 w-full overflow-hidden relative bg-zinc-800">
        <img 
          src={imgSrc} 
          alt={item.name} 
          onError={() => setImgSrc(FALLBACK_PIZZA)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-lg font-bold text-zinc-100 group-hover:text-orange-400 transition-colors leading-tight">
            {item.name}
          </h3>
        </div>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2 min-h-[40px]">{item.description}</p>
        
        <div className="bg-zinc-950 rounded-lg p-1 flex gap-1 mb-6">
          {(['S', 'M', 'L'] as Size[]).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                selectedSize === size
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
              }`}
            >
              {size === 'S' ? 'Small' : size === 'M' ? 'Medium' : 'Large'}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white">₹{sizeDetails.price}</span>
            {sizeDetails.mrp && (
              <span className="text-xs text-zinc-500 line-through">₹{sizeDetails.mrp}</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="w-10 h-10 rounded-full bg-orange-600/10 text-orange-500 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface RegularCardProps {
  key?: string;
  item: RegularItem;
  onAdd: (item: Omit<CartItem, 'quantity'>) => void;
}

export function RegularCard({ item, onAdd }: RegularCardProps) {
  const [imgSrc, setImgSrc] = useState(item.image);

  const handleAdd = () => {
    onAdd({
      id: item.id,
      name: item.name,
      price: item.price,
    });
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col h-full transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] group overflow-hidden">
      <div className="h-48 w-full overflow-hidden relative bg-zinc-800">
        <img 
          src={imgSrc} 
          alt={item.name} 
          onError={() => setImgSrc(FALLBACK_FOOD)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-zinc-100 group-hover:text-orange-400 transition-colors leading-tight mb-2">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-zinc-400 text-sm mb-4 line-clamp-2 min-h-[40px]">{item.description}</p>
        )}
        {item.note && (
          <p className="text-zinc-500 text-xs italic mb-4">{item.note}</p>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white">₹{item.price}</span>
            {item.mrp && (
              <span className="text-xs text-zinc-500 line-through">₹{item.mrp}</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="w-10 h-10 rounded-full bg-orange-600/10 text-orange-500 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
