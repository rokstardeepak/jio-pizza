import { Flame, Music, Utensils } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Utensils className="w-8 h-8 text-orange-500" />,
      title: 'Happy-Hour Food',
      description: 'Special curated menus and discounts during our signature happy hours.'
    },
    {
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      title: 'Cozy Fireplace',
      description: 'Experience warm, inviting ambiance perfect for relaxed evenings.'
    },
    {
      icon: <Music className="w-8 h-8 text-orange-500" />,
      title: 'Live Music',
      description: 'Acoustic performances and curated playlists to set the perfect mood.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              More than just a <span className="text-orange-500">pizzeria.</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              At Jio Pizza, we believe that great food deserves a great atmosphere. 
              Located in the heart of Sector 73, Noida, we bring together premium 
              ingredients, artisanal recipes, and an unforgettable dining experience.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center flex-shrink-0 border border-zinc-800 group-hover:border-orange-500/50 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-orange-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800 relative">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-orange-600/20 rounded-full blur-3xl z-[-1]"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
