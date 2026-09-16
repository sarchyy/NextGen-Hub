"use client";

import React, { useState } from "react";
import Link from "next/link";

const dogadjajiData = [
  {
    id: 1,
    naslov: "DevTalk: Šta donosi Next.js u 2026. godini?",
    datum: "25. Septembar 2026.",
    vrijeme: "18:00 h",
    tip: "Meetup uživo",
    lokacija: "NextGen Hub",
    predavac: "Gost predavač iz struke",
    prijavljeno: 42,
  },
  {
    id: 2,
    naslov: "Workshop: Izrada prve Full-Stack aplikacije",
    datum: "10. Oktobar 2026.",
    vrijeme: "17:00 h",
    tip: "Online radionica",
    lokacija: "Google Meet",
    predavac: "NextGen Tim",
    prijavljeno: 85,
  },
];

const slikeProstoraData = [
  {
    id: 1,
    naslov: "Glavna sala za meetupe",
    opis: "Prostor opremljen za predavanja, radionice i hakatone.",
    slika: "/pictures/hero.jpg",
  },
  {
    id: 2,
    naslov: "Coworking zona",
    opis: "Udobna mjesta za individualni rad i učenje.",
    slika: "/pictures/hero.jpg",
  },
  {
    id: 3,
    naslov: "Relax & Networking corner",
    opis: "Mjesto za pauze, kafu i razgovor sa kolegama.",
    slika: "/pictures/hero.jpg",
  },
  {
    id: 4,
    naslov: "Timski rad i mentorstvo",
    opis: "Rad na realnim projektima uz podršku mentora.",
    slika: "/pictures/hero.jpg",
  },
];

const sponzoriData = [
  { id: 1, naziv: "REZ - Regionalna razvojna agencija", logo: "/pictures/REZ.jpg" },
  { id: 2, naziv: "Vlada FBiH - Federalno ministarstvo raseljenih osoba i izbjeglica", logo: "/pictures/vladafederacije.png" },
  { id: 3, naziv: "Caritas Schweiz", logo: "/pictures/caritas.jpg" },
  { id: 4, naziv: "Zeničko-dobojski kanton", logo: "/pictures/ZDK.png" },
  { id: 5, naziv: "Općina Kakanj", logo: "/pictures/opcinakakanj.png" },
];

export default function ZajednicaPage() {
  const [prijavljeniDogadjaji, setPrijavljeniDogadjaji] = useState<number[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [odabraniDogadjaj, setOdabraniDogadjaj] = useState<{ id: number; naslov: string } | null>(null);

  const [formaIme, setFormaIme] = useState("");
  const [formaEmail, setFormaEmail] = useState("");
  const [formaMreza, setFormaMreza] = useState("LinkedIn");
  const [formanivo, setFormanivo] = useState("");
  const [formaPoruka, setFormaPoruka] = useState("");

  const [poslano, setPoslano] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const otvoriModalOpsti = () => {
    setOdabraniDogadjaj(null);
    setIsModalOpen(true);
    setPoslano(false);
    setErrorMsg("");
  };

  const otvoriModalZaDogadjaj = (dogadjaj: { id: number; naslov: string }) => {
    setOdabraniDogadjaj(dogadjaj);
    setIsModalOpen(true);
    setPoslano(false);
    setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formaIme || !formaEmail) return;

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ime: formaIme,
          email: formaEmail,
          mreza: formaMreza,
          nivo: formanivo,
          poruka: formaPoruka,
          dogadjaj: odabraniDogadjaj ? odabraniDogadjaj.naslov : "Opšti upit za zajednicu",
        }),
      });

      if (response.ok) {
        setPoslano(true);
        if (odabraniDogadjaj && !prijavljeniDogadjaji.includes(odabraniDogadjaj.id)) {
          setPrijavljeniDogadjaji((prev) => [...prev, odabraniDogadjaj.id]);
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        setErrorMsg(errorData.message || "Došlo je do greške prilikom slanja podataka.");
      }
    } catch (err) {
      console.error("Greška pri slanju forme:", err);
      setErrorMsg("Došlo je do greške na mreži. Pokušajte ponovo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const zatvoriModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setPoslano(false);
      setOdabraniDogadjaj(null);
      setFormaIme("");
      setFormaEmail("");
      setFormaMreza("LinkedIn");
      setFormanivo("");
      setFormaPoruka("");
      setErrorMsg("");
    }, 300);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0070b1] selection:text-white">
      {/* 100% Neprovidno zaglavlje */}
      <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex w-1/4 justify-start">
            <Link href="/" className="group flex items-center">
              <img
                src="/pictures/nextgenhub.png"
                alt="IT Hub logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14 lg:h-16"
              />
            </Link>
          </div>

          <nav className="hidden w-2/4 items-center justify-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <Link href="/" className="whitespace-nowrap transition hover:text-[#0070b1]">
              Početna
            </Link>
            <Link href="/programi" className="whitespace-nowrap transition hover:text-[#0070b1]">
              Programi & Edukacija
            </Link>
            <Link href="/zajednica" className="whitespace-nowrap font-bold text-[#0070b1] transition">
              Zajednica
            </Link>
            <Link href="/kontakt" className="whitespace-nowrap transition hover:text-[#0070b1]">
              Kontakt
            </Link>
          </nav>

          <div className="flex w-1/4 justify-end"></div>
        </div>
      </header>

      {/* Hero Sekcija s mekim prijelazom nabolje */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white pt-36 pb-20 lg:pt-44 lg:pb-28">
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
            IT HUB 2026
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Mjesto gdje IT zajednica <br className="hidden sm:inline" />
            <span className="text-[#0070b1]">raste i sarađuje</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            NextGen Hub zajednica okuplja početnike, iskusne developere i mentore. Obratite nam se, pošaljite svoje podatke i ubrzo ćemo vas kontaktirati sa pozivnicom za naše grupe.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={otvoriModalOpsti}
              className="rounded-full bg-[#0070b1] px-8 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#005587] hover:shadow-md"
            >
              Obrati nam se
            </button>
            <a
              href="#dogadjaji"
              className="rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-bold text-slate-700 transition hover:border-[#0070b1] hover:text-[#0070b1]"
            >
              Pogledaj događaje
            </a>
          </div>
        </div>
      </section>

      {/* Nadolazeći Događaji */}
      <section id="dogadjaji" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0070b1]">
                Kalendar
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Nadolazeći <span className="text-[#0070b1]">događaji i meetupi</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-500">
              Svi naši meetupi su besplatni i otvoreni za sve ljubitelje tehnologije uz prethodnu prijavu.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {dogadjajiData.map((item) => {
              const jePrijavljen = prijavljeniDogadjaji.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:border-[#0070b1]/30 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-[#0070b1]/10 px-3 py-1 text-xs font-bold text-[#0070b1]">
                        {item.tip}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {item.lokacija}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {item.naslov}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <svg className="h-4 w-4 text-[#0070b1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {item.datum} u {item.vrijeme}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="h-4 w-4 text-[#0070b1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {item.predavac}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                    <span className="text-xs text-slate-500">
                      Prijavljeno: <strong className="text-slate-800">{item.prijavljeno + (jePrijavljen ? 1 : 0)}</strong> osoba
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        if (!jePrijavljen) {
                          otvoriModalZaDogadjaj(item);
                        }
                      }}
                      disabled={jePrijavljen}
                      className={`rounded-full px-5 py-2 text-xs font-bold transition ${
                        jePrijavljen
                          ? "cursor-default border border-slate-200 bg-slate-100 text-slate-700"
                          : "cursor-pointer bg-[#0070b1] text-white shadow-sm hover:bg-[#005587] hover:shadow"
                      }`}
                    >
                      {jePrijavljen ? "Prijavljeni ste ✓" : "Sačuvaj mjesto"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galerija Prostora s mekom podlogom */}
      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070b1]">
              Galerija i Atmosfera
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Kako izgleda <span className="text-[#0070b1]">naš prostor i zajednica</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
              Upoznajte ambijent u kojem učimo, sarađujemo i stvaramo nove mogućnosti za buduće IT stručnjake.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {slikeProstoraData.map((item) => (
              <div
                key={item.id}
                className="group relative h-64 w-full overflow-hidden rounded-3xl bg-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl sm:h-72"
              >
                <img
                  src={item.slika}
                  alt={item.naslov}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent p-6 text-white">
                  <h3 className="text-base font-bold text-white sm:text-lg">{item.naslov}</h3>
                  <p className="mt-1 text-xs text-slate-200">{item.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponzori & Partneri */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070b1]">
              Podrška i partnerstvo
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Naši <span className="text-[#0070b1]">sponzori i partneri</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
              Zahvaljujemo se partnerima i institucijama koje podržavaju naš rad i razvoj lokalne IT zajednice.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {sponzoriData.map((sponzor) => (
              <div
                key={sponzor.id}
                className="flex h-24 w-44 items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0070b1]/30 hover:shadow-md"
              >
                <img
                  src={sponzor.logo}
                  alt={sponzor.naziv}
                  className="max-h-full max-w-full object-contain grayscale transition duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Poziv na dnu */}
      <section className="bg-gradient-to-b from-white to-slate-50/60 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm sm:p-12">
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Želiš postati dio naše IT priče?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
              Pošalji nam svoje podatke i ubrzo ćemo ti se javiti sa svim detaljima o novim grupama i radionicama.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                type="button"
                onClick={otvoriModalOpsti}
                className="rounded-full bg-[#0070b1] px-8 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#005587]"
              >
                Obrati nam se
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup Forma */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={zatvoriModal}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
            >
              ✕
            </button>

            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0070b1]">
                {odabraniDogadjaj ? "Rezervacija mjesta" : "Povežimo se"}
              </span>
              <h3 className="mt-1 text-2xl font-black text-slate-900">
                {odabraniDogadjaj ? odabraniDogadjaj.naslov : "Obrati nam se"}
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                {odabraniDogadjaj
                  ? "Popuni formu da sačuvaš svoje mjesto na događaju."
                  : "Popuni formu i javiti ćemo ti se sa informacijama za pristup zajednici."}
              </p>
            </div>

            {poslano ? (
              <div className="mt-6 rounded-2xl bg-[#0070b1]/10 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0070b1] text-white shadow-sm">
                  ✓
                </div>
                <h4 className="mt-3 text-lg font-bold text-slate-900">
                  {odabraniDogadjaj ? "Mjesto je sačuvano!" : "Hvala ti!"}
                </h4>
                <p className="mt-1 text-xs text-slate-600">
                  {odabraniDogadjaj ? (
                    <>
                      Uspješno ste se prijavili za <strong>{odabraniDogadjaj.naslov}</strong>, <strong>{formaIme}</strong>. Potvrdu i detalje poslati ćemo na tvoj email!
                    </>
                  ) : (
                    <>
                      Uspješno smo zaprimili tvoje podatke, <strong>{formaIme}</strong>. Kontaktirati ćemo te uskoro!
                    </>
                  )}
                </p>
                <button
                  type="button"
                  onClick={zatvoriModal}
                  className="mt-5 rounded-full bg-[#0070b1] px-6 py-2 text-xs font-bold text-white transition hover:bg-[#005587]"
                >
                  Zatvori
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {errorMsg && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-600">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label htmlFor="formaIme" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Ime i Prezime *
                  </label>
                  <input
                    id="formaIme"
                    name="formaIme"
                    type="text"
                    required
                    value={formaIme}
                    onChange={(e) => setFormaIme(e.target.value)}
                    placeholder="npr. Marko Marković"
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0070b1] focus:bg-white focus:ring-2 focus:ring-[#0070b1]/20"
                  />
                </div>

                <div>
                  <label htmlFor="formaEmail" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Email Adresa *
                  </label>
                  <input
                    id="formaEmail"
                    name="formaEmail"
                    type="email"
                    required
                    value={formaEmail}
                    onChange={(e) => setFormaEmail(e.target.value)}
                    placeholder="npr. marko@example.com"
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0070b1] focus:bg-white focus:ring-2 focus:ring-[#0070b1]/20"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="formaMreza" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Preferirana mreža
                    </label>
                    <select
                      id="formaMreza"
                      name="formaMreza"
                      value={formaMreza}
                      onChange={(e) => setFormaMreza(e.target.value)}
                      className="mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0070b1] focus:bg-white focus:ring-2 focus:ring-[#0070b1]/20"
                    >
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="WhatsApp / Viber">WhatsApp / Viber</option>
                      <option value="Email">Email</option>
                      <option value="Instagram">Instagram</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="formanivo" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Nivo znanja
                    </label>
                    <input
                      id="formanivo"
                      name="formanivo"
                      type="text"
                      value={formanivo}
                      onChange={(e) => setFormanivo(e.target.value)}
                      placeholder="Početnik, Student..."
                      className="mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0070b1] focus:bg-white focus:ring-2 focus:ring-[#0070b1]/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="formaPoruka" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Poruka / Pitanje (opcionalno)
                  </label>
                  <textarea
                    id="formaPoruka"
                    name="formaPoruka"
                    rows={3}
                    value={formaPoruka}
                    onChange={(e) => setFormaPoruka(e.target.value)}
                    placeholder="Napiši nam nešto o sebi ili šta te zanima..."
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0070b1] focus:bg-white focus:ring-2 focus:ring-[#0070b1]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-full bg-[#0070b1] py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-[#005587] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Slanje..." : odabraniDogadjaj ? "Potvrdi i sačuvaj mjesto" : "Pošalji podatke"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Potpuno centriran Footer */}
      <footer className="bg-slate-50/60 py-10 text-center text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center">
          <p>© {new Date().getFullYear()} NextGen HUB. Sva prava zadržana.</p>
        </div>
      </footer>
    </main>
  );
}