import { MapPin, Phone, Clock } from 'lucide-react';

export default function LocationHours() {
  return (
    <section id="location" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Find Us
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <div className="space-y-10">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center flex-shrink-0 border border-zinc-800">
                <MapPin className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-zinc-400 leading-relaxed max-w-sm">
                  Gali, Street No. 3, near A Square Mall, Sarfabad Village, 
                  Sarfabad, Sector 73, Noida, Uttar Pradesh 201316
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center flex-shrink-0 border border-zinc-800">
                <Phone className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
                <a 
                  href="tel:9953675338" 
                  className="text-zinc-400 hover:text-orange-400 transition-colors text-lg"
                >
                  +91 99536 75338
                </a>
                <p className="text-zinc-500 text-sm mt-1">Available for calls and WhatsApp</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center flex-shrink-0 border border-zinc-800">
                <Clock className="w-5 h-5 text-orange-500" />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold text-white mb-4">Hours</h3>
                <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800 space-y-4">
                  <div className="flex justify-between items-center border-b border-zinc-800/50 pb-4">
                    <span className="text-zinc-400">Dine-in (All 7 Days)</span>
                    <span className="text-white font-medium">12:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800/50 pb-4">
                    <span className="text-zinc-400">Delivery</span>
                    <span className="text-white font-medium">10:00 AM - 11:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Takeout</span>
                    <span className="text-white font-medium">10:00 AM - 10:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-full min-h-[400px] rounded-3xl overflow-hidden border border-zinc-800 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223954.4657946763!2d77.06309395090852!3d28.71092211520664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef717e7b90c7%3A0x3658f8359a96bedd!2sJio%20Pizza!5e0!3m2!1sen!2sin!4v1789063895488!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
              title="Jio Pizza Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
