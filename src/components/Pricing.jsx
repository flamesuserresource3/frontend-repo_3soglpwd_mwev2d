function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Simple, affordable pricing</h2>
        <p className="mt-2 text-gray-600">₹70 per tiffin. Pick a plan that suits your routine.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6 bg-white">
            <p className="text-sm font-semibold text-gray-500">Per Meal</p>
            <h3 className="mt-2 text-4xl font-extrabold">₹70</h3>
            <p className="mt-2 text-gray-600">Order on demand, pay per tiffin.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Fresh veg meal</li>
              <li>• Delivery across Jaipur</li>
              <li>• Pay online or COD</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full justify-center rounded-md bg-gray-900 text-white px-4 py-2 font-semibold hover:bg-black">Order Now</a>
          </div>

          <div className="rounded-2xl border-2 border-green-500 p-6 bg-white shadow-lg">
            <p className="text-sm font-semibold text-green-600">Weekly</p>
            <h3 className="mt-2 text-4xl font-extrabold">₹490</h3>
            <p className="mt-2 text-gray-600">7 meals • Save ₹0 (flat price)</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• 1 balanced veg meal/day</li>
              <li>• Free menu rotation</li>
              <li>• Pause anytime</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full justify-center rounded-md bg-green-600 text-white px-4 py-2 font-semibold hover:bg-green-700">Start Weekly</a>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 bg-white">
            <p className="text-sm font-semibold text-gray-500">Monthly</p>
            <h3 className="mt-2 text-4xl font-extrabold">₹2100</h3>
            <p className="mt-2 text-gray-600">30 meals • Best for regulars</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• 1 balanced veg meal/day</li>
              <li>• Priority support</li>
              <li>• Flexible start date</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full justify-center rounded-md bg-gray-900 text-white px-4 py-2 font-semibold hover:bg-black">Start Monthly</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;