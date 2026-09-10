import { MenuData, PriceDetails } from './types';

const normalizePrice = (val: number | { price: number; mrp?: number }): PriceDetails => {
  if (typeof val === 'number') {
    return { price: val };
  }
  return val;
};

const rawData = {
  pizzas: [
    { name: "Paneer Makhani", description: "Makhani Paneer, Capsicum", sizes: { L: 499, M: 299, S: 199 } },
    { name: "Paneer Soya Supreme", description: "Paneer, Masala Soya Onion, Capsicum", sizes: { L: 399, M: 299, S: 199 } },
    { name: "Supreme", description: "Onion, Capsicum, Tomato, Golden Corn", sizes: { L: { price: 369, mrp: 399 }, M: { price: 249, mrp: 299 }, S: { price: 149, mrp: 169 } } },
    { name: "5 Pepper", description: "Red Paprika, Capsicum, Yellow Capsicum", sizes: { L: 399, M: 299, S: 199 } },
    { name: "Tandoori Paneer", description: "Onion, Capsicum, Paneer, Jalapeno", sizes: { L: { price: 349, mrp: 399 }, M: { price: 249, mrp: 299 }, S: { price: 169, mrp: 199 } } },
    { name: "Corn Corn", description: "Onion, Golden Corn", sizes: { L: { price: 279, mrp: 299 }, M: { price: 179, mrp: 199 }, S: { price: 99, mrp: 129 } } },
    { name: "Garden Green", description: "Paneer, Capsicum", sizes: { L: { price: 299, mrp: 349 }, M: { price: 179, mrp: 199 }, S: { price: 109, mrp: 129 } } },
    { name: "Classic Tomato", description: "Tomato, Mozzarella Cheese", sizes: { L: { price: 299, mrp: 329 }, M: { price: 149, mrp: 199 }, S: { price: 79, mrp: 99 } } },
    { name: "Hot Chicken", description: "Onion, Chicken, Red Paprika", sizes: { L: 350, M: 249, S: 149 } },
    { name: "Chicken Tandoori", description: "Tandoori Chicken, Onion, Jalapeno", sizes: { L: 400, M: 299, S: 199 } },
    { name: "Jio Pizza Special", description: "Onion, Capsicum, Tomato, Olives", sizes: { L: { price: 599, mrp: 649 }, M: { price: 299, mrp: 454 }, S: { price: 199, mrp: 249 } } },
    { name: "Chicken Peri Peri", description: "Red Paprika, Capsicum, Onion, Basil", sizes: { L: 380, M: 220, S: 159 } },
    { name: "Chicken Tikka", description: "Onion, Chicken Tikka, Red Paprika", sizes: { L: 449, M: 299, S: 199 } },
    { name: "Chicken Mexican", description: "Onion, Jalapeno, Capsicum, Red Paprika", sizes: { L: 499, M: 329, S: 229 } },
    { name: "All Topping", description: "Onion, Capsicum, Mozzarella Cheese, Mixed Toppings", sizes: { L: 599, M: 399, S: 299 } },
    { name: "Barbeque Chicken", description: "Capsicum, Chicken, Barbecue Sauce", sizes: { L: 399, M: 249, S: 149 } },
    { name: "50 Peppy Paneer", description: "Capsicum, Red Paprika, Crispy Paneer", sizes: { L: 590, M: 390, S: 210 } },
    { name: "Farmhouse", description: "Onion, Capsicum, Tomato", sizes: { L: { price: 449, mrp: 499 }, M: { price: 229, mrp: 299 }, S: { price: 139, mrp: 199 } } },
    { name: "Veg Deluxe", description: "Onion, Capsicum, Tomato, Mushroom", sizes: { L: 690, M: 450, S: 220 } },
    { name: "Extra Vagues", description: "Onion, Capsicum, Tomato, Mushroom, Olives", sizes: { L: 695, M: 450, S: 230 } },
    { name: "Mexican Green", description: "Onion, Capsicum, Tomato, Jalapeno", sizes: { L: 450, M: 300, S: 199 } },
    { name: "Double Cheese", description: "Mozzarella Cheese, Oregano", sizes: { L: { price: 299, mrp: 350 }, M: { price: 178, mrp: 219 }, S: { price: 99, mrp: 129 } } }
  ],
  mini_pizzas_single_size: [
    { name: "M. Tandoori Paneer Pizza", price: 199 },
    { name: "M. Tomato Pizza", price: 149 },
    { name: "M. Onion Pizza", price: 149 },
    { name: "M. Margarita Pizza", price: 99, mrp: 129 },
    { name: "M. Sweet Corn Pizza", price: 99, mrp: 149 },
    { name: "M. Veg Supreme Pizza", price: 209 }
  ],
  sides_starters: [
    { name: "French Fries", price: 49 },
    { name: "Loaded French Fries", price: 70 },
    { name: "Peri Peri Fries", price: 59 },
    { name: "Veg. Garlic Bread", price: 100 },
    { name: "Cheese Garlic Bread", price: 79 },
    { name: "Paneer Garlic Bread", price: 120 },
    { name: "Chicken Garlic Bread", price: 140 },
    { name: "Chicken Wings", price: 99 },
    { name: "Chicken Legs", price: 120 },
    { name: "Chicken Popcorn (10pc)", price: 80, note: "price also seen as ₹79 on another screen — verify" },
    { name: "Choco Lava Cake", price: 59, note: "price also seen as ₹79 on another screen — verify" }
  ],
  pasta: [
    { name: "Peri Peri Pasta", price: 106 },
    { name: "Tandoori Pasta", price: 100 },
    { name: "Mix Sauce Pasta", price: 129 },
    { name: "Red Sauce Pasta", price: 80 },
    { name: "White Sauce Pasta", price: 99 },
    { name: "White Sauce Pasta (Half)", price: 119, mrp: 149 }
  ],
  wraps: [
    { name: "Veg. Wrap", price: 60 },
    { name: "Paneer Wrap", price: 99 },
    { name: "Cheese Chicken Wrap", price: 109 },
    { name: "Chicken Kabab Wrap", price: 109 }
  ],
  sandwiches: [
    { name: "Tandoori Paneer Sandwich", price: 80 },
    { name: "Corn & Cheese Sandwich", price: 69 },
    { name: "Chicken Sandwich", price: 70 },
    { name: "Chicken Kabab Sandwich", price: 99 },
    { name: "Veg Sandwich", price: 89, mrp: 99 }
  ],
  burgers: [
    { name: "Veg Classic Burger", price: 59, mrp: 129 },
    { name: "Aloo Tikki Burger", price: 49 },
    { name: "King Burger SPL", price: 129 },
    { name: "SPL King Chicken Burger", price: 149 },
    { name: "Spicy Cheese Burger", price: 70 },
    { name: "Crispy Paneer Burger", price: 99 },
    { name: "Chicken Burger", price: 90 },
    { name: "Crunchy Chicken Burger", price: 129 },
    { name: "Spicy Chicken Burger", price: 109 },
    { name: "Chicken Zinger Burger", price: 99, mrp: 149 }
  ],
  beverages_shakes: [
    { name: "Red Current Mojito", price: 60 },
    { name: "Black Current Mojito", price: 79, mrp: 99 },
    { name: "Lemon Ice Tea", price: 50 },
    { name: "Virgin Mojito", price: 59 },
    { name: "Strawberry Shake", price: 79, mrp: 99 },
    { name: "Butterscotch Shake", price: 85 },
    { name: "Cold Coffee", price: 60 },
    { name: "Mango Shake", price: 99, mrp: 129 },
    { name: "Pineapple Shake", price: 60 },
    { name: "Oreo Shake", price: 79, mrp: 99 },
    { name: "Kit Kat Shake", price: 99, mrp: 129 },
    { name: "Chocolate Shake", price: 69, mrp: 85 }
  ]
};

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const assignImage = (category: string, name: string): string => {
  const n = name.toLowerCase();

  // 1. Pizzas & Mini Pizzas
  if (category === 'pizzas' || category === 'mini_pizzas') {
    if (n.includes('makhani') || n.includes('paneer')) {
      return 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('barbeque') || n.includes('bbq')) {
      return 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('chicken') || n.includes('tikka')) {
      return 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('pepper') || n.includes('paprika')) {
      return 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('corn')) {
      return 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('tomato') || n.includes('margarita')) {
      return 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('double cheese') || n.includes('cheese')) {
      return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80';
    }
    // Farmhouse, Supreme, Garden Green, Veg Deluxe, Extra Vagues, All Topping
    return 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80';
  }

  // 2. Sides & Starters
  if (category === 'sides_starters') {
    if (n.includes('cake') || n.includes('lava') || n.includes('choco')) {
      return 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('wings')) {
      return 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('leg')) {
      return 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('popcorn')) {
      return 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('paneer garlic bread')) {
      return '/images/paneer_garlic_bread.jpg';
    }
    if (n.includes('chicken garlic bread')) {
      return '/images/chicken_garlic_bread.jpg';
    }
    if (n.includes('cheese garlic bread')) {
      return '/images/cheese_garlic_bread.jpg';
    }
    if (n.includes('garlic bread')) {
      return '/images/veg_garlic_bread.jpg';
    }
    if (n.includes('loaded') || n.includes('peri peri fries')) {
      return 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('fries')) {
      return 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80';
    }
    return 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80';
  }

  // 3. Pasta
  if (category === 'pasta') {
    if (n.includes('red sauce') || n.includes('arrabiata')) {
      return 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('white sauce') || n.includes('alfredo')) {
      return 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('mix sauce') || n.includes('pink')) {
      return 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('tandoori')) {
      return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80';
    }
    // peri peri pasta or other pasta
    return 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=600&q=80';
  }

  // 4. Wraps
  if (category === 'wraps') {
    if (n.includes('chicken')) {
      return 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('paneer')) {
      return 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80';
    }
    return 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80';
  }

  // 5. Sandwiches
  if (category === 'sandwiches') {
    if (n.includes('paneer')) {
      return 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('cheese') || n.includes('corn')) {
      return 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('chicken')) {
      return 'https://images.unsplash.com/photo-1603903631889-b5f3ba4d5b9b?auto=format&fit=crop&w=600&q=80';
    }
    return 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80';
  }

  // 6. Burgers
  if (category === 'burgers') {
    if (n.includes('paneer')) {
      return 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('chicken') || n.includes('zinger')) {
      return 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('king') || n.includes('cheese') || n.includes('spicy cheese')) {
      return 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80';
    }
    return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80';
  }

  // 7. Beverages & Shakes
  if (category === 'beverages_shakes') {
    if (n.includes('coffee')) {
      return 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('current') || n.includes('berry')) {
      return 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('tea')) {
      return 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('mojito')) {
      return 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('strawberry')) {
      return 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('chocolate')) {
      return 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('mango')) {
      return '/images/mango_shake.jpg';
    }
    if (n.includes('butterscotch')) {
      return '/images/butterscotch_shake.jpg';
    }
    if (n.includes('pineapple')) {
      return '/images/pineapple_shake.jpg';
    }
    if (n.includes('oreo')) {
      return 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80';
    }
    if (n.includes('kit kat')) {
      return 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=600&q=80';
    }
    return 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80';
  }

  return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
};

export const menuData: MenuData = {
  pizzas: rawData.pizzas.map(p => ({
    id: slugify(p.name),
    name: p.name,
    description: p.description,
    image: assignImage('pizzas', p.name),
    sizes: {
      S: normalizePrice(p.sizes.S),
      M: normalizePrice(p.sizes.M),
      L: normalizePrice(p.sizes.L),
    }
  })),
  mini_pizzas: rawData.mini_pizzas_single_size.map(p => ({
    ...p,
    id: slugify(p.name),
    image: assignImage('mini_pizzas', p.name),
  })),
  sides_starters: rawData.sides_starters.map(p => ({
    ...p,
    id: slugify(p.name),
    image: assignImage('sides_starters', p.name),
  })),
  pasta: rawData.pasta.map(p => ({
    ...p,
    id: slugify(p.name),
    image: assignImage('pasta', p.name),
  })),
  wraps: rawData.wraps.map(p => ({
    ...p,
    id: slugify(p.name),
    image: assignImage('wraps', p.name),
  })),
  sandwiches: rawData.sandwiches.map(p => ({
    ...p,
    id: slugify(p.name),
    image: assignImage('sandwiches', p.name),
  })),
  burgers: rawData.burgers.map(p => ({
    ...p,
    id: slugify(p.name),
    image: assignImage('burgers', p.name),
  })),
  beverages_shakes: rawData.beverages_shakes.map(p => ({
    ...p,
    id: slugify(p.name),
    image: assignImage('beverages_shakes', p.name),
  })),
};
