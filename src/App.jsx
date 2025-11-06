import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Pricing />
        <Contact />
      </main>
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Tiffin World • Jaipur, Rajasthan • Vegetarian Tiffin Service</p>
          <p>
            Made with love. Price inclusive of taxes. Delivery charges may apply based on distance.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
