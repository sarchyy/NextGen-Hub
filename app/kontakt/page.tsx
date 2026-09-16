import React from "react";

export default function KontaktPage() {
  const mapUrl =
    "https://maps.google.com/maps?q=44.123806,18.116028&hl=bs&z=15&output=embed";

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0070b1] selection:text-white">
      {/* 100% Neprovidno Zaglavlje */}
      <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex w-1/4 justify-start">
            <a href="/" className="group flex items-center">
              <img
                src="/pictures/nextgenhub.png"
                alt="IT Hub logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14 lg:h-16"
              />
            </a>
          </div>

          <nav className="hidden w-2/4 items-center justify-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="/" className="whitespace-nowrap transition hover:text-[#0070b1]">
              Početna
            </a>
            <a href="/programi" className="whitespace-nowrap transition hover:text-[#0070b1]">
              Programi & Edukacija
            </a>
            <a href="/zajednica" className="whitespace-nowrap transition hover:text-[#0070b1]">
              Zajednica
            </a>
            <a href="/kontakt" className="whitespace-nowrap font-bold text-[#0070b1] transition">
              Kontakt
            </a>
          </nav>

          <div className="flex w-1/4 justify-end"></div>
        </div>
      </header>

      {/* Hero Sekcija sa slikom u pozadini */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white pt-36 pb-12 lg:pt-44 lg:pb-16">
        <div className="pointer-events-none absolute inset-0 z-0">
          <img
            src="/pictures/hero.jpg"
            alt="Hero Pozadina"
            className="h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/90 to-white" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0070b1]/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-[#0070b1]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#0070b1]" />
            Povežimo se
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Tu smo za sva vaša <br className="hidden sm:inline" />
            <span className="text-[#0070b1]">pitanja i saradnju</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Imate pitanja o našim programima, radionicama ili zajednici? Posjetite nas na našoj lokaciji ili stupite u kontakt s nama.
          </p>
        </div>
      </section>

      {/* Glavni Sadržaj: Split Layout (Kartice + Mapa rame uz rame) */}
      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
            
            {/* Lijeva strana: Informacije i Mreže */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-5">
              <div className="space-y-4">
                {/* Lokacija */}
                <div className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#0070b1]/30 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0070b1]/10 text-[#0070b1] transition-colors duration-300 group-hover:bg-[#0070b1] group-hover:text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0070b1]">Naša Lokacija</h3>
                      <p className="mt-1 text-sm text-slate-600">Ulica Šehida 6, Kakanj 72240</p>
                      <p className="text-xs font-semibold text-[#0070b1]">Bosna i Hercegovina</p>
                      <a
                        href="https://maps.google.com/?q=44.123806,18.116028"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0070b1] hover:underline"
                      >
                        Prikaži na navigaciji &rarr;
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direktan Kontakt */}
                <div className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#0070b1]/30 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0070b1]/10 text-[#0070b1] transition-colors duration-300 group-hover:bg-[#0070b1] group-hover:text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0070b1]">Direktan Kontakt</h3>
                      <div className="mt-1 space-y-1 text-sm text-slate-600">
                        <p>
                          Email:{" "}
                          <a href="mailto:info@it-hub.ba" className="font-medium text-[#0070b1] hover:underline">
                            info@it-hub.ba
                          </a>
                        </p>
                        <p>
                          Telefon:{" "}
                          <a href="tel:+38733000000" className="font-medium text-[#0070b1] hover:underline">
                            +387 33 000 000
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Radno Vrijeme */}
                <div className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#0070b1]/30 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0070b1]/10 text-[#0070b1] transition-colors duration-300 group-hover:bg-[#0070b1] group-hover:text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0070b1]">Radno Vrijeme</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Pon - Pet: <span className="font-medium text-slate-800">08:00 - 17:00</span>
                      </p>
                      <p className="text-sm text-slate-600">
                        Sub - Ned: <span className="font-medium text-slate-800">Zatvoreno</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Društvene Mreže */}
              <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm lg:text-left">
                <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Pratite nas na društvenim mrežama
                </span>
                <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                  {["LinkedIn", "Instagram", "Facebook"].map((mreza) => (
                    <a
                      key={mreza}
                      href="#"
                      className="rounded-full border border-slate-200 bg-slate-50/50 px-5 py-2 text-xs font-bold text-slate-700 transition hover:border-[#0070b1] hover:bg-white hover:text-[#0070b1]"
                    >
                      {mreza}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Desna strana: Mapa (automatski se prilagođava visini kartica) */}
            <div className="flex min-h-[420px] flex-col lg:col-span-7 lg:min-h-full">
              <div className="h-full w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
                <iframe
                  title="Lokacija IT Hub"
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  className="min-h-[420px] h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Potpuno centriran Footer */}
      <footer className="bg-slate-50/60 py-10 text-center text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-6 text-center">
          <p>© {new Date().getFullYear()} NextGen HUB. Sva prava zadržana.</p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="/programi" className="transition hover:text-slate-600">Programi</a>
            <a href="/zajednica" className="transition hover:text-slate-600">Zajednica</a>
            <a href="/kontakt" className="transition hover:text-slate-600">Kontakt</a>
          </div>
        </div>
      </footer>
    </main>
  );
}