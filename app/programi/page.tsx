"use client";

import React, { useState } from "react";

const programiData = [
  {
    id: 1,
    naslov: "Kurs Njemački jezik",
    kategorija: "A1, A2, B1, B2",
    status: "U toku prijave",
    statusBoja: "bg-sky-50 text-[#0077b6] border-sky-200",
    trajanje: "50 časova",
    opis: "Upoznajte osnove njemačkog jezika, proširite vokabular, unaprijedite komunikacijske vještine i steknite sigurnost u svakodnevnom razgovoru.",
    predavac: "Lejla Karavdić",
    pocetak: "15. oktobar 2026.",
    istaknuto: false,
    ikona: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 2,
    naslov: "Python & Algoritamsko Razmišljanje",
    kategorija: "Srednji nivo",
    status: "U toku prijave",
    statusBoja: "bg-sky-50 text-[#0077b6] border-sky-200",
    trajanje: "8 sedmica",
    opis: "Osnove programiranja kroz Python. Naučite pisanje koda, funkcije, rad sa podacima i izradu prvih praktičnih skripti.",
    predavac: "Predavač",
    pocetak: "20. oktobar 2026.",
    istaknuto: true,
    ikona: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 3,
    naslov: "Web Development: HTML, CSS & JS",
    kategorija: "Početnički do Srednji",
    status: "Uskoro",
    statusBoja: "bg-amber-50 text-amber-700 border-amber-200",
    trajanje: "6 sedmica",
    opis: "Naučite kako kreirati moderne i odazivne (responsive) web stranice od nule koristeći savremene web tehnologije.",
    predavac: "Predavač",
    pocetak: "01. novembar 2026.",
    istaknuto: false,
    ikona: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 4,
    naslov: "Kurs Engleski jezik",
    kategorija: "A1, A2, B1, B2",
    status: "Uskoro",
    statusBoja: "bg-amber-50 text-amber-700 border-amber-200",
    trajanje: "5 sedmica",
    opis: "Upoznajte osnove engleskog jezika, proširite vokabular, unaprijedite komunikacijske vještine i steknite sigurnost u svakodnevnom razgovoru.",
    predavac: "Aida Gavrić",
    pocetak: "10. novembar 2026.",
    istaknuto: false,
    ikona: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 5,
    naslov: "Kurs Turski jezik",
    kategorija: "A1, A2, B1, B2",
    status: "Uskoro",
    statusBoja: "bg-amber-50 text-amber-700 border-amber-200",
    trajanje: "5 sedmica",
    opis: "Upoznajte osnove turskog jezika, proširite vokabular, unaprijedite komunikacijske vještine i steknite sigurnost u svakodnevnom razgovoru.",
    predavac: "Mirnesa Gadžun",
    pocetak: "10. novembar 2026.",
    istaknuto: false,
    ikona: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function ProgramiPage() {
  const [aktivniFilter, setAktivniFilter] = useState("Svi");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [izabraniKurs, setIzabraniKurs] = useState<string>("");
  
  const [statusSlanja, setStatusSlanja] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    telefon: "",
    napomena: ""
  });

  const filterKategorije = [
    { id: "Svi", naziv: `Svi programi (${programiData.length})` },
    { id: "Početnički", naziv: "Početnički nivo" },
    { id: "Srednji", naziv: "Srednji nivo" },
    { id: "Napredni", naziv: "Napredni nivo" }
  ];

  const filtriraniProgrami = programiData.filter((item) => {
    if (aktivniFilter === "Svi") return true;
    return item.kategorija.toLowerCase().includes(aktivniFilter.toLowerCase());
  });

  const otvoriFormu = (naslovKursa: string) => {
    setIzabraniKurs(naslovKursa);
    setIsModalOpen(true);
  };

  const zatvoriFormu = () => {
    setIsModalOpen(false);
    setStatusSlanja(false);
    setErrorMessage("");
    setFormData({ ime: "", email: "", telefon: "", napomena: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tip: "kurs",
          ime: formData.ime,
          email: formData.email,
          telefon: formData.telefon,
          kurs: izabraniKurs,
          poruka: formData.napomena
        })
      });

      const contentType = response.headers.get("content-type");
      let result: any = {};

      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        throw new Error("Putanja /api/send nije pronađena ili vraća grešku na serveru.");
      }

      if (response.ok && result.success) {
        setStatusSlanja(true);
      } else {
        setErrorMessage(result.error || result.message || "Došlo je do greške pri slanju prijave. Pokušajte ponovo.");
      }
    } catch (error: any) {
      console.error("Greška pri slanju:", error);
      setErrorMessage(error.message || "Mrežna greška. Provjerite konekciju i pokušajte ponovo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0077b6] selection:text-white">
      {/* Header */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-sky-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex w-1/4 justify-start">
            <a href="/" className="flex items-center group">
              <img
                src="/pictures/nextgenhub.png"
                alt="IT Hub logo"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          <nav className="hidden md:flex w-2/4 justify-center items-center gap-8 text-sm font-medium text-slate-700">
            <a href="/" className="hover:text-[#0070b1] transition">
              Početna
            </a>
            <a href="/programi" className="hover:text-[#0070b1] transition">
              Programi & Edukacija
            </a>
            <a href="zajednica" className="hover:text-[#0070b1] transition">
              Zajednica
            </a>
            <a href="/kontakt" className="hover:text-[#0070b1] transition">
              Kontakt
            </a>
          </nav>

          <div className="flex w-1/4 justify-end"></div>
        </div>
      </header>

      {/* Hero Sekcija sa blijedom pozadinskom slikom */}
      <section className="relative overflow-hidden bg-white pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none select-none"
          style={{ backgroundImage: "url('/pictures/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-12">

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {filterKategorije.map((filter) => {
              const isSelected = aktivniFilter === filter.id;
              return (
                <button
                  key={`filter-${filter.id}`}
                  onClick={() => setAktivniFilter(filter.id)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? "bg-[#0077b6] text-white shadow-sm"
                      : "border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-600 hover:border-[#0077b6] hover:text-[#0077b6]"
                  }`}
                >
                  {filter.naziv}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid Kartica sa Edukacijama */}
      <section className="bg-white mx-auto max-w-7xl px-6 pb-24 lg:px-12">
        {filtriraniProgrami.length === 0 ? (
          <div className="py-12 text-center text-slate-500">
            Nema dostupnih programa za izabranu kategoriju.
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:gap-8">
            {filtriraniProgrami.map((item) => (
              <div
                key={`program-${item.id}`}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  item.istaknuto
                    ? "border-[#0077b6] ring-1 ring-[#0077b6]/20 shadow-md"
                    : "border-slate-200 shadow-sm hover:border-[#0077b6]/40"
                }`}
              >
                {item.istaknuto && (
                  <div className="absolute top-0 right-0 rounded-bl-2xl bg-[#0077b6] px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Preporučeno
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0077b6] transition-transform duration-300 group-hover:scale-105">
                        {item.ikona}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {item.kategorija}
                      </span>
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${item.statusBoja}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {item.naslov}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.opis}
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-2 rounded-2xl border border-slate-100 bg-white p-4 text-center">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Trajanje
                      </p>
                      <p className="mt-1 text-xs font-bold text-slate-800 sm:text-sm">
                        {item.trajanje}
                      </p>
                    </div>
                    <div className="border-x border-slate-200/60">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#0077b6]">
                        Početak
                      </p>
                      <p className="mt-1 text-xs font-bold text-slate-800 sm:text-sm">
                        {item.pocetak}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Mentor
                      </p>
                      <p className="mt-1 truncate text-xs font-bold text-slate-800 sm:text-sm px-1">
                        {item.predavac}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => otvoriFormu(item.naslov)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0077b6] py-3.5 text-center text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-[#005f9e] hover:shadow-md cursor-pointer"
                  >
                    <span>Prijavi se na kurs</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* MODAL FORMA ZA PRIJAVU */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={zatvoriFormu}
              className="absolute top-5 right-5 text-slate-400 transition hover:text-slate-600"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {statusSlanja ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Prijava uspješno poslata!</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Hvala vam na prijavi za <strong>{izabraniKurs}</strong>. Vaša prijava je sačuvana i kontaktiraćemo vas uskoro.
                </p>
                <button
                  onClick={zatvoriFormu}
                  className="mt-6 rounded-full bg-[#0077b6] px-6 py-2.5 text-xs font-bold text-white transition hover:bg-[#005f9e]"
                >
                  Zatvori
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0077b6]">
                    Prijava za kurs
                  </span>
                  <h3 className="mt-1 text-2xl font-extrabold text-slate-900">{izabraniKurs}</h3>
                </div>

                {errorMessage && (
                  <div className="mb-4 rounded-xl bg-red-50 p-3 text-xs text-red-600 border border-red-200">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Ime i Prezime
                    </label>
                    <input
                      type="text"
                      name="ime"
                      value={formData.ime}
                      onChange={handleChange}
                      required
                      placeholder="npr. Marko Marković"
                      className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Email adresa
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="npr. marko@example.com"
                      className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Broj telefona
                    </label>
                    <input
                      type="tel"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      required
                      placeholder="+387 6X XXX XXX"
                      className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Napomena (opcionalno)
                    </label>
                    <textarea
                      name="napomena"
                      value={formData.napomena}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Dodatna pitanja ili napomene..."
                      className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#0077b6] py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#005f9e] disabled:opacity-50"
                  >
                    {isSubmitting ? "Slanje prijave..." : "Potvrdi prijavu"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Sekcija: Prednosti */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Zašto odabrati <span className="text-[#0077b6]">naše programe?</span>
            </h2>
            <p className="mt-3 text-slate-600">
              Sve što vam je potrebno za uspješan ulazak i napredak u IT sektoru.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0077b6]/40 hover:shadow-lg hover:shadow-sky-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0077b6] transition-all duration-300 group-hover:bg-[#0077b6] group-hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#0077b6]">
                100% Praktičan Rad
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Fokusirani smo na izradu stvarnih projekata umjesto same teorije.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0077b6]/40 hover:shadow-lg hover:shadow-sky-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0077b6] transition-all duration-300 group-hover:bg-[#0077b6] group-hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#0077b6]">
                Iskusni Mentori
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Učite direktno od stručnjaka koji aktivno rade u IT industriji.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0077b6]/40 hover:shadow-lg hover:shadow-sky-900/5 sm:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0077b6] transition-all duration-300 group-hover:bg-[#0077b6] group-hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#0077b6]">
                Certifikat o Završetku
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Nakon uspješno završenog kursa dobijate sertifikat i pripremljen portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white px-6 py-8 text-sm text-slate-500 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:center">
          <p>© {new Date().getFullYear()} IT Hub. Sva prava zadržana.</p>
        </div>
      </footer>
    </main>
  );
}