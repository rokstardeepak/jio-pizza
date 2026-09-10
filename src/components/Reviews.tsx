import React, { useState, useEffect } from 'react';
import { Star, Quote, CheckCircle2, MessageSquarePlus, X, ThumbsUp, MapPin } from 'lucide-react';

interface CustomerReview {
  id: string;
  name: string;
  avatarText: string;
  rating: number;
  date: string;
  location: string;
  platform: 'Zomato' | 'Swiggy' | 'Google' | 'Direct';
  favoriteDish: string;
  comment: string;
  likes: number;
}

const DEFAULT_REVIEWS: CustomerReview[] = [
  {
    id: '1',
    name: 'Rohan Sharma',
    avatarText: 'RS',
    rating: 5,
    date: '2 days ago',
    location: 'Sector 71, Noida',
    platform: 'Swiggy',
    favoriteDish: 'Paneer Makhani Pizza & Cheese Garlic Bread',
    comment: 'Hands down the best Paneer Makhani Pizza in Noida! The crust was super crispy on the outside, soft inside, and they loaded it with flavorful makhani paneer and cheese. Arrived piping hot within 25 minutes. A must-try!',
    likes: 24,
  },
  {
    id: '2',
    name: 'Pooja Verma',
    avatarText: 'PV',
    rating: 5,
    date: '4 days ago',
    location: 'Gaur City 1, Greater Noida West',
    platform: 'Zomato',
    favoriteDish: 'Cheese Garlic Bread & Chicken Tikka Pizza',
    comment: 'The Cheese Garlic Bread is an absolute game-changer! Authentic roasted garlic herb aroma with an incredible cheese pull. Ordered for our family movie night and everyone loved every slice. Much better quality and pricing than big commercial chains.',
    likes: 19,
  },
  {
    id: '3',
    name: 'Amitabh Sen',
    avatarText: 'AS',
    rating: 5,
    date: '1 week ago',
    location: 'Sector 76, Noida',
    platform: 'Google',
    favoriteDish: 'Mango Shake & Farmhouse Pizza',
    comment: 'Our go-to spot for weekend pizza cravings. The Mango Shake is rich, thick, and topped with real sweet mango chunks. Pizza toppings were super fresh and crunch was spot on. Highly recommended for late night treats!',
    likes: 15,
  },
  {
    id: '4',
    name: 'Simran Kaur',
    avatarText: 'SK',
    rating: 5,
    date: '1 week ago',
    location: 'Sector 62, Noida',
    platform: 'Swiggy',
    favoriteDish: 'Mini Tandoori Paneer Pizza & Peri Peri Fries',
    comment: 'Ordered their mini pizzas and peri peri fries for office lunch. Portion size is ideal, packaging was neat and spill-proof, and spices were perfectly balanced. The crust stays soft even after 20 minutes.',
    likes: 12,
  },
  {
    id: '5',
    name: 'Vikram Malhotra',
    avatarText: 'VM',
    rating: 5,
    date: '2 weeks ago',
    location: 'Sector 50, Noida',
    platform: 'Zomato',
    favoriteDish: 'Chicken Zinger Burger & Choco Lava Cake',
    comment: 'Surprised by how good their burgers and starters are! The Chicken Zinger was huge, crunchy, and juicy. Finished off with the warm Choco Lava cake that had gooey melted chocolate flowing out. 10/10 experience.',
    likes: 18,
  },
  {
    id: '6',
    name: 'Neha Choudhary',
    avatarText: 'NC',
    rating: 5,
    date: '3 weeks ago',
    location: 'Sector 75, Noida',
    platform: 'Google',
    favoriteDish: 'Double Cheese Pizza & Red Sauce Pasta',
    comment: 'Great taste, pocket-friendly prices, and polite staff! The Double Cheese Pizza gave serious Domino’s competition at half the price. My kids are in love with Jio Pizza now!',
    likes: 9,
  },
];

const PLATFORM_BADGES: Record<string, { bg: string; text: string }> = {
  Zomato: { bg: 'bg-[#E23744]/20 border-[#E23744]/40 text-[#E23744]', text: 'Zomato' },
  Swiggy: { bg: 'bg-[#FC8019]/20 border-[#FC8019]/40 text-[#FC8019]', text: 'Swiggy' },
  Google: { bg: 'bg-blue-500/20 border-blue-500/40 text-blue-400', text: 'Google' },
  Direct: { bg: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400', text: 'Verified Foodie' },
};

export default function Reviews() {
  const [reviews, setReviews] = useState<CustomerReview[]>(() => {
    const saved = localStorage.getItem('jio_pizza_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_REVIEWS;
      }
    }
    return DEFAULT_REVIEWS;
  });

  const [activeFilter, setActiveFilter] = useState<'All' | 'Zomato' | 'Swiggy' | 'Google'>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('Sector 71, Noida');
  const [newRating, setNewRating] = useState(5);
  const [newFavorite, setNewFavorite] = useState('');
  const [newComment, setNewComment] = useState('');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  useEffect(() => {
    localStorage.setItem('jio_pizza_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleLike = (id: string) => {
    if (likedReviews[id]) return;
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    );
    setLikedReviews((prev) => ({ ...prev, [id]: true }));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const initials = newName
      .trim()
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const userReview: CustomerReview = {
      id: Date.now().toString(),
      name: newName.trim(),
      avatarText: initials || 'FP',
      rating: newRating,
      date: 'Just now',
      location: newLocation.trim() || 'Noida Local',
      platform: 'Direct',
      favoriteDish: newFavorite.trim() || 'Jio Pizza Special',
      comment: newComment.trim(),
      likes: 1,
    };

    setReviews([userReview, ...reviews]);
    setNewName('');
    setNewFavorite('');
    setNewComment('');
    setIsModalOpen(false);
  };

  const filteredReviews = reviews.filter((r) => {
    if (activeFilter === 'All') return true;
    return r.platform === activeFilter;
  });

  return (
    <section id="reviews" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Loved by Locals & Foodies
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Over <span className="text-orange-400 font-bold">10,000+ pizzas delivered</span> across Sector 71 & Noida.
            Here is what our loyal customers have to say about our flavors, fresh crusts, and quick service!
          </p>
        </div>

        {/* Rating Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          <a
            href="https://www.zomato.com/ncr/jio-pizza-sector-71-noida"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/80 border border-zinc-800/80 hover:border-[#E23744]/50 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(226,55,68,0.15)] group"
          >
            <div className="inline-block px-3 py-0.5 rounded-full bg-[#E23744] text-white text-xs font-bold uppercase tracking-wider mb-3">
              Zomato
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl font-black text-white">4.4</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-400 group-hover:text-zinc-300">
              280+ Verified Ratings & Reviews
            </p>
          </a>

          <a
            href="https://www.swiggy.com/restaurants/noida-1/sector-71/jio-pizza-687552/dineout"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/80 border border-zinc-800/80 hover:border-[#FC8019]/50 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(252,128,25,0.15)] group"
          >
            <div className="inline-block px-3 py-0.5 rounded-full bg-[#FC8019] text-white text-xs font-bold uppercase tracking-wider mb-3">
              Swiggy
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl font-black text-white">4.5</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-400 group-hover:text-zinc-300">
              340+ Verified Delivery Reviews
            </p>
          </a>

          <div className="bg-zinc-900/80 border border-zinc-800/80 rounded-2xl p-6 text-center">
            <div className="inline-block px-3 py-0.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
              Google Reviews
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl font-black text-white">4.8</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-400">
              Top Rated Pizzeria in Sector 71
            </p>
          </div>
        </div>

        {/* Filter Bar & Add Review Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
            {(['All', 'Zomato', 'Swiggy', 'Google'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {filter === 'All' ? 'All Reviews' : `${filter} Reviews`}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/20 transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => {
            const badge = PLATFORM_BADGES[review.platform] || PLATFORM_BADGES.Direct;
            const isLiked = likedReviews[review.id];

            return (
              <div
                key={review.id}
                className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-zinc-700 hover:shadow-xl relative group"
              >
                <div>
                  {/* Top Bar: Reviewer Info & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 text-white font-black text-sm flex items-center justify-center shadow-md">
                        {review.avatarText}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-white text-sm">{review.name}</h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                          <MapPin className="w-3 h-3 text-orange-400" />
                          <span>{review.location}</span>
                          <span>•</span>
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badge.bg}`}>
                      {badge.text}
                    </span>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-700 fill-zinc-700'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-zinc-300 ml-1.5">
                      {review.rating}.0
                    </span>
                  </div>

                  {/* Favorite dish badge */}
                  {review.favoriteDish && (
                    <div className="mb-3 inline-block">
                      <span className="text-[11px] font-medium text-orange-300 bg-orange-950/60 border border-orange-800/40 px-2.5 py-1 rounded-md">
                        ❤️ Favorite: {review.favoriteDish}
                      </span>
                    </div>
                  )}

                  {/* Review Text */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    "{review.comment}"
                  </p>
                </div>

                {/* Footer of Card */}
                <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60 text-xs text-zinc-500">
                  <span className="flex items-center gap-1 text-zinc-400">
                    <Quote className="w-3.5 h-3.5 text-orange-500/70" />
                    Verified Customer
                  </span>
                  <button
                    onClick={() => handleLike(review.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                      isLiked
                        ? 'text-orange-400 bg-orange-950/40'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>{review.likes}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Writing a Review */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Share Your Jio Pizza Experience
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Tell fellow pizza lovers in Noida what you loved the most!
                </p>
              </div>

              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Ankit Gupta"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Your Area in Noida
                    </label>
                    <input
                      type="text"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      placeholder="e.g. Sector 71, Noida"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Rating
                    </label>
                    <div className="flex items-center gap-2 py-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newRating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-zinc-700'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Favorite Dish / Order
                  </label>
                  <input
                    type="text"
                    value={newFavorite}
                    onChange={(e) => setNewFavorite(e.target.value)}
                    placeholder="e.g. Paneer Makhani Pizza & Mango Shake"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="How was the taste, crust crispness, delivery speed, or cheese pull?"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-orange-500 resize-none"
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-zinc-800 text-zinc-300 hover:bg-zinc-800 text-sm font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-600/30 transition-all"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
