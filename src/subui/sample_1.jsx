import React from "react";

// Place the hero image at src/assets/hero-house.png (or update the import path below)
import heroHouse from "../assets/house-in-trees.jpg";

export default function RealEstateLanding() {
  const listings = [
    { id: 1, title: "Cozy Family House", price: "€1,200,000", image: heroHouse },
    { id: 2, title: "Modern Apartment", price: "€850,000", image: heroHouse },
    { id: 3, title: "Urban Condo", price: "€720,000", image: heroHouse },
  ];

  return (
    <div className="min-h-screen bg-emerald-50 text-slate-900">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main column (left) */}
        <main className="lg:col-span-2">
          {/* Header */}
          <header className="flex items-center justify-between mb-8">
            <div className="text-sm font-medium tracking-wide">TAL Enterprises</div>
            <nav className="hidden md:flex gap-6 text-sm text-slate-700">
              <a className="hover:underline" href="#">Development</a>
              <a className="hover:underline" href="#">Production</a>
              <a className="hover:underline" href="#">Construction</a>
              <a className="hover:underline" href="#">Services</a>
              <a className="hover:underline" href="#">Consulting</a>
            </nav>
            <button className="hidden md:inline-block bg-emerald-900 text-emerald-50 px-4 py-2 rounded-full text-sm">Sign up</button>
          </header>

          {/* Hero */}
          <section className="bg-emerald-50 rounded-2xl p-10 relative overflow-visible">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">Patient, Flexible, Permanent<br/>Capital for Enduring Real<br/>Estate Business</h1>
                <p className="text-slate-600 mb-6">People successfully got their dream house</p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex -space-x-3">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full ring-2 ring-emerald-50 overflow-hidden bg-white flex items-center justify-center text-xs">U{i}</div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 max-w-md">
                  <div className="text-center">
                    <div className="text-2xl font-bold">1400+</div>
                    <div className="text-xs text-slate-500">Premium Product</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">3200+</div>
                    <div className="text-xs text-slate-500">Happy Customer</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">160+</div>
                    <div className="text-xs text-slate-500">Property Ready</div>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                {/* Decorative arch + house image */}
                <div className="w-[320px] h-[360px] md:w-[380px] md:h-[420px] bg-white rounded-3xl shadow-xl flex items-center justify-center relative">
                  <div className="absolute -top-6 -right-6 w-72 h-96 rounded-tl-[160px] rounded-tr-[160px] overflow-hidden">
                    <img src={heroHouse} alt="house" className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partners band */}
          <section className="mt-10 bg-emerald-800 rounded-lg py-10 px-6 text-emerald-50">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-lg font-semibold">Trusted by</div>
              <div className="flex items-center gap-8 opacity-90">
                <div className="uppercase text-sm">VISA</div>
                <div className="uppercase text-sm">Bank BRI</div>
                <div className="uppercase text-sm">Apple Pay</div>
                <div className="uppercase text-sm">HSBC</div>
                <div className="uppercase text-sm">PayPal</div>
                <div className="uppercase text-sm">Discover</div>
              </div>
            </div>
          </section>

          {/* Development / Cards */}
          <section className="mt-12">
            <h2 className="text-center text-2xl font-semibold mb-6">Development</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((l) => (
                <article key={l.id} className="bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
                  <div className="rounded-lg overflow-hidden h-40 mb-3">
                    <img src={l.image} alt={l.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-medium text-lg">{l.title}</h3>
                  <div className="text-sm text-slate-600">{l.price}</div>
                  <div className="mt-3 flex gap-2">
                    <button className="px-3 py-1 text-sm bg-emerald-900 text-white rounded">View</button>
                    <button className="px-3 py-1 text-sm border rounded">Contact</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        {/* Sidebar (right) */}
        <aside className="space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold mb-3">About us</h4>
            <p className="text-sm text-slate-600">We specialize in development and construction services. From project planning to delivery, our team ensures top quality and timely execution.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold mb-3">Contact us</h4>
            <form className="space-y-3">
              <input className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Full name" />
              <input className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Email address" />
              <textarea className="w-full rounded-md border px-3 py-2 text-sm" rows={4} placeholder="Message" />
              <button className="w-full bg-emerald-900 text-white px-4 py-2 rounded">Send</button>
            </form>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold mb-3">Find us</h4>
            <div className="w-full h-40 bg-slate-100 rounded">{/* Replace with embed map */}
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984."
                className="w-full h-full rounded"
              />
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-emerald-900 text-emerald-50 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <div className="font-bold">TAL Enterprises</div>
            <div className="text-sm mt-2 text-emerald-200">© TAL Enterprises. All rights reserved.</div>
          </div>

          <div className="flex gap-6">
            <div>
              <div className="text-sm font-semibold">Quick Links</div>
              <ul className="text-sm mt-2 space-y-1 text-emerald-200">
                <li>Development</li>
                <li>Production</li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold">Subscribe</div>
              <div className="mt-2 flex gap-2">
                <input className="rounded-md px-3 py-2 text-sm" placeholder="Email address" />
                <button className="bg-emerald-800 px-3 py-2 rounded text-white">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
