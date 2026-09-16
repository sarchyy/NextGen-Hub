export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#001a33]">
      {/* Header - Sada sa punom (100%) bijelom pozadinom */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          {/* Lijeva strana: Logo */}
          <div className="flex w-1/4 justify-start">
            <a href="/" className="flex items-center group">
              <img
                src="/pictures/nextgenhub.png"
                alt="IT Hub logo"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Sredina: Navigacija (Centrirana) */}
          <nav className="hidden md:flex w-2/4 justify-center items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#o-nama" className="hover:text-[#0070b1] transition">
              O Hub-u
            </a>
            <a href="/programi" className="hover:text-[#0070b1] transition">
              Programi & Edukacija
            </a>
            <a href="/zajednica" className="hover:text-[#0070b1] transition">
              Zajednica
            </a>
            <a href="/kontakt" className="hover:text-[#0070b1] transition">
              Kontakt
            </a>
          </nav>

          {/* Desna strana: Prazan prostor za balans */}
          <div className="flex w-1/4 justify-end"></div>
        </div>
      </header>

      {/* Hero Sekcija */}
      <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden px-6 pt-32 pb-24 text-center">
        {/* Slika u pozadini */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pictures/hero.jpg')" }}
        />

        {/* Slojevi za prelazak iz slike u bijelu pozadinu */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-white" />

        {/* Sadržaj Hero sekcije */}
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#0070b1]">
            Otvoreni Centar Za Tehnologiju
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-[#001a33] md:text-7xl lg:text-8xl">
            Mjesto gdje ideje postaju stvarnost.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-700 md:text-lg">
            Otvoreni prostori, savremena oprema i mentori na jednom mjestu. Bilo da pravite prvi korak u svijetu računara ili razvijate napredna softverska rješenja - NextGen Hub je vaš prostor za rast.
          </p>
        </div>
      </section>

      {/* Statistički pokazatelji */}
      <section className="w-full bg-white px-6 py-6 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-sky-50/60 via-[#f0f7fc] to-sky-50/60 p-8 border border-sky-100/80 shadow-sm">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
            <div className="p-2">
              <p className="text-3xl font-extrabold text-[#0070b1] lg:text-4xl">100%</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wider">Pristupačno svima</p>
            </div>
            <div className="p-2">
              <p className="text-3xl font-extrabold text-[#0070b1] lg:text-4xl">50+</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wider">Edukovanih polaznika</p>
            </div>
            <div className="p-2">
              <p className="text-3xl font-extrabold text-[#0070b1] lg:text-4xl">24/7</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wider">Mrežna podrška</p>
            </div>
            <div className="p-2">
              <p className="text-3xl font-extrabold text-[#0070b1] lg:text-4xl">100%</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wider">Besplatno učlanjenje</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trodijelni stubovi edukacije */}
      <section id="o-nama" className="w-full bg-white px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#001a33] sm:text-4xl lg:text-5xl">
              Edukacija prilagođena svakom nivou
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Naša misija je eliminisati digitalnu jaz i omogućiti svakom pojedincu usavršavanje tehnoloških vještina.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3 items-stretch">
            {/* Stub 1 */}
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-sky-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#005587] text-2xl font-bold">
                🖥️
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#001a33]">Digitalna Pismenost</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Osnove rada na računaru, korištenje internet alata, digitalna bezbjednost i rad u MS Office / Google radnom okruženju za sve uzraste.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-medium text-slate-500">
                <li className="flex items-center gap-2"><span className="text-[#0070b1]">✓</span> Rad na operativnim sistemima</li>
                <li className="flex items-center gap-2"><span className="text-[#0070b1]">✓</span> Osnove internet sigurnosti</li>
                <li className="flex items-center gap-2"><span className="text-[#0070b1]">✓</span> Kancelarijski softverski alati</li>
              </ul>
            </div>

            {/* Stub 2 */}
            <div className="rounded-3xl border border-sky-200/80 bg-gradient-to-b from-sky-50/70 to-sky-50/30 p-8 shadow-md transition hover:shadow-lg relative overflow-hidden">
              <div className="absolute top-4 right-4 rounded-full bg-sky-200/60 px-3 py-1 text-xs font-bold text-[#005587]">
                Najpopularnije
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0070b1] text-white text-2xl font-bold shadow-sm">
                💻
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#001a33]">Programski jezici i programiranje</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Razvoj logičkog razmišljanja kroz programske jezike - od pisanja prvih linija koda do automatizacije procesa, izrade web aplikacija i analize podataka.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-medium text-slate-600">
                <li className="flex items-center gap-2"><span className="text-[#0070b1]">✓</span> Algoritmi i strukture podataka</li>
                <li className="flex items-center gap-2"><span className="text-[#0070b1]">✓</span> Web development (Django/Flask)</li>
                <li className="flex items-center gap-2"><span className="text-[#0070b1]">✓</span> Osnove Data Science & AI</li>
              </ul>
            </div>

            {/* Stub 3 */}
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-sky-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#005587] text-2xl font-bold">
                🚀
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#001a33]">Edukativni kursevi</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Stičite praktična znanja kroz interaktivnu nastavu, ostvarite popuste za porodicu i osigurajte besplatnu literaturu za uspješno usavršavanje stranih jezika i programiranja.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-medium text-slate-500">
                <li className="flex items-center gap-2"><span className="text-[#0070b1]">✓</span> Interaktivna nastava u grupama</li>
                <li className="flex items-center gap-2"><span className="text-[#0070b1]">✓</span> Priprema za certifikaciju i ispite</li>
                <li className="flex items-center gap-2"><span className="text-[#0070b1]">✓</span> Besplatna literatura i popusti za porodicu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Praktični prikaz rada */}
      <section className="w-full bg-white px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full bg-sky-50 px-4 py-1.5 text-xs font-bold text-[#005587] uppercase tracking-wider border border-sky-100">
              Praktičan pristup
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#001a33] sm:text-4xl lg:text-5xl">
              Učite kroz kod, rad i konkretne rezultate
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Teorija bez prakse ne stvara stručnjake. Zato je svaki kurs u NextGen Hub-u koncipiran tako da od prvog dana primjenjujete naučeno kroz praktične zadatke.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-sky-50 p-2.5 text-[#0070b1] font-bold border border-sky-100">01</div>
                <div>
                  <h4 className="font-bold text-[#001a33]">Savremeni kurikulum</h4>
                  <p className="text-sm text-slate-600">Gradivo prati aktuelne standarde IT industrije.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-sky-50 p-2.5 text-[#0070b1] font-bold border border-sky-100">02</div>
                <div>
                  <h4 className="font-bold text-[#001a33]">Individualni pristup</h4>
                  <p className="text-sm text-slate-600">Mentori prate vaš napredak i prilagođavaju tempo.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/programi"
                className="inline-flex items-center gap-2 rounded-full bg-[#0070b1] px-8 py-3.5 font-semibold text-white transition hover:bg-[#005587] shadow-md"
              >
                Pregledaj sve module
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Terminal Showcase */}
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-[#0d1117] shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#161b22] px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full bg-red-500/80" />
                <span className="h-3.5 w-3.5 rounded-full bg-yellow-500/80" />
                <span className="h-3.5 w-3.5 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-xs text-slate-400">it_hub_learning.py</span>
            </div>
            <div className="p-6 md:p-8 font-mono text-sm leading-relaxed text-slate-300 overflow-x-auto">
              <p className="text-slate-500"># NextGen - Inovativna platforma za učenje</p>
              <p>
                <span className="text-purple-400">class</span>{" "}
                <span className="text-yellow-300">Polaznik</span>:
              </p>
              <p className="pl-4">
                <span className="text-purple-400">def</span>{" "}
                <span className="text-blue-400">__init__</span>(self, ime):
              </p>
              <p className="pl-8">self.ime = ime</p>
              <p className="pl-8">self.vjestine = []</p>
              <br />
              <p className="pl-4">
                <span className="text-purple-400">def</span>{" "}
                <span className="text-blue-400">nauci_tehnologiju</span>(self, modul):
              </p>
              <p className="pl-8">self.vjestine.append(modul)</p>
              <p className="pl-8">
                <span className="text-purple-400">return</span>{" "}
                <span className="text-[#00cfe0]">{'f"{self.ime} je savladao/la: {modul}!"'}</span>
              </p>
              <br />
              <p className="text-slate-500"># Pokretanje simulacije napretka</p>
              <p>novi_clan = Polaznik(<span className="text-[#00cfe0]">&quot;Korisnik&quot;</span>)</p>
              <p>print(novi_clan.nauci_tehnologiju(<span className="text-[#00cfe0]">&quot;Python Osnove&quot;</span>))</p>
              <div className="mt-4 rounded-xl border border-[#00cfe0]/30 bg-[#001a33]/60 p-4 text-[#00cfe0] font-semibold">
                &gt; Output: Korisnik je savladao/la: Python Osnove!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sekcija */}
      <section className="w-full bg-white px-6 py-20 lg:px-16 text-center">
        <div className="mx-auto max-w-4xl rounded-3xl border border-sky-100 bg-gradient-to-b from-sky-50/70 via-[#f0f7fc]/50 to-white p-10 shadow-lg lg:p-16">
          <h2 className="text-3xl font-extrabold text-[#001a33] sm:text-4xl">
            Spremni da unaprijedite svoje digitalne vještine?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Pridružite se NextGen zajednici već danas. Radionice i resursi su otvoreni za sve koji žele učiti i razvijati se.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/kontakt"
              className="rounded-full border border-sky-200 bg-white px-8 py-3.5 font-semibold text-[#001a33] transition hover:bg-sky-50 shadow-sm"
            >
              Kontaktirajte nas
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white px-6 py-12 lg:px-16 text-sm text-slate-600">
        <div className="mx-auto max-w-7xl flex flex-col justify-between items-center gap-6 text-center">
          <p>© {new Date().getFullYear()} NextGen Hub. Sva prava zadržana. Edukacija i tehnologija za sve.</p>
        </div>
      </footer>
    </main>
  );
}