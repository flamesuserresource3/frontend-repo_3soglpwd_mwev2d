import { Phone, MapPin } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-green-600 text-white grid place-items-center font-bold">TW</div>
          <div>
            <p className="text-xl font-semibold tracking-tight">Tiffin World</p>
            <p className="text-xs text-gray-500 flex items-center gap-1"><MapPin size={14}/> Jaipur, Rajasthan</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#menu" className="text-gray-600 hover:text-gray-900">Menu</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Subscriptions</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <a href="https://wa.me/919999999999?text=Hi%20Tiffin%20World!%20I%20want%20to%20order%20a%20veg%20tiffin." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          <Phone size={16}/> Order Now
        </a>
      </div>
    </header>
  );
}

export default Navbar;