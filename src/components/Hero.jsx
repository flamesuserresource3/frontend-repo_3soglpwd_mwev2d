import { Star } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-green-50 text-green-700 px-3 py-1 text-xs font-medium mb-4">
            100% Vegetarian • Fresh, Home-style Meals
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Tiffin World — Jaipur's trusted veg tiffin service
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Wholesome, home-like food delivered across Jaipur every day. Just ₹70 per tiffin. Choose weekly or monthly plans and never worry about lunch again.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700">
              Start Subscription
            </a>
            <a href="#menu" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">
              View Sample Menu
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
            <Star className="text-yellow-500 fill-yellow-400" size={16} />
            Loved by students, working professionals and families in Jaipur
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1542367597-8849eb9001d3?q=80&w=1600&auto=format&fit=crop"
            alt="Vegetarian Indian thali"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur rounded-lg shadow p-4 hidden sm:flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=200&auto=format&fit=crop" alt="chef" className="h-10 w-10 rounded-full object-cover"/>
            <div>
              <p className="text-sm font-semibold">Freshly cooked daily</p>
              <p className="text-xs text-gray-500">Hygienic kitchen • Quality ingredients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;