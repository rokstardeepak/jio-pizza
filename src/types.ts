export type Size = 'S' | 'M' | 'L';

export interface PriceDetails {
  price: number;
  mrp?: number;
}

export interface PizzaItem {
  id: string;
  name: string;
  description: string;
  image: string;
  sizes: {
    S: PriceDetails;
    M: PriceDetails;
    L: PriceDetails;
  };
}

export interface RegularItem {
  id: string;
  name: string;
  price: number;
  image: string;
  mrp?: number;
  note?: string;
  description?: string;
}

export interface MenuData {
  pizzas: PizzaItem[];
  mini_pizzas: RegularItem[];
  sides_starters: RegularItem[];
  pasta: RegularItem[];
  wraps: RegularItem[];
  sandwiches: RegularItem[];
  burgers: RegularItem[];
  beverages_shakes: RegularItem[];
}

export interface CartItem {
  id: string;
  name: string;
  size?: Size;
  price: number;
  quantity: number;
}
