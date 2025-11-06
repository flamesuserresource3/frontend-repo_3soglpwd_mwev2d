function Menu() {
  const items = [
    { day: "Monday", dishes: "Dal Tadka, Jeera Rice, Mix Veg, Chapati, Salad" },
    { day: "Tuesday", dishes: "Chole, Jeera Rice, Aloo Gobi, Chapati, Salad" },
    { day: "Wednesday", dishes: "Rajma, Jeera Rice, Bhindi Masala, Chapati, Salad" },
    { day: "Thursday", dishes: "Kadhi Pakora, Jeera Rice, Aloo Matar, Chapati, Salad" },
    { day: "Friday", dishes: "Paneer Butter Masala, Jeera Rice, Chapati, Salad" },
    { day: "Saturday", dishes: "Veg Pulao, Raita, Aloo Jeera, Chapati, Salad" },
  ];

  return (
    <section id="menu" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Sample Weekly Menu</h2>
        <p className="mt-2 text-gray-600">Balanced, home-style vegetarian meals. Menu may vary slightly based on seasonal veggies.</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <div key={it.day} className="p-5 rounded-lg border border-gray-200 hover:border-green-400 transition">
              <p className="text-sm text-gray-500 font-medium uppercase">{it.day}</p>
              <p className="mt-1 text-gray-800">{it.dishes}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;