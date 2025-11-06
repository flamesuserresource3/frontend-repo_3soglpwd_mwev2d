import { Phone, Mail, MapPin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact & Delivery</h2>
          <p className="mt-2 text-gray-600">We deliver vegetarian tiffins across Jaipur city limits. Call or WhatsApp to place orders or start your subscription.</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-50 text-green-700 grid place-items-center"><Phone size={18}/></div>
              <div>
                <p className="font-semibold">Phone & WhatsApp</p>
                <a href="tel:+919999999999" className="text-gray-700">+91 99999 99999</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-50 text-green-700 grid place-items-center"><Mail size={18}/></div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:order@tiffinworld.in" className="text-gray-700">order@tiffinworld.in</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-green-50 text-green-700 grid place-items-center"><MapPin size={18}/></div>
              <div>
                <p className="font-semibold">Service Area</p>
                <p className="text-gray-700">Jaipur, Rajasthan — major neighborhoods covered. Delivery timings 12:00–3:00 PM & 7:00–9:30 PM.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input required className="mt-1 w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500" placeholder="Your name" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input required type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500" placeholder="Mobile number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Plan</label>
                <select className="mt-1 w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500">
                  <option>Per Meal (₹70)</option>
                  <option>Weekly (₹490)</option>
                  <option>Monthly (₹2100)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea rows="3" className="mt-1 w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500" placeholder="Area, landmark, pincode"></textarea>
            </div>
            <button className="w-full inline-flex justify-center rounded-md bg-green-600 text-white px-4 py-2 font-semibold hover:bg-green-700">Request Callback</button>
            <p className="text-xs text-gray-500 text-center">We will confirm your address and start date on call/WhatsApp.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;