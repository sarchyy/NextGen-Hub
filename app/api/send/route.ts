import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Nedostaju Supabase varijable u .env.local fajlu.");
      return NextResponse.json(
        { success: false, error: "Server nije ispravno konfigurisan (nedostaju Supabase ključevi)." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const body = await req.json();

    // Prihvatanje svih polja (uključujući dogadjaj sa frontend forme)
    const { ime, email, telefon, napomena, kurs, mreza, nivoZnanja, poruka, dogadjaj } = body;

    // Osnovna validacija obaveznih polja
    if (!ime || !email) {
      return NextResponse.json(
        { success: false, error: "Ime i email su obavezni." },
        { status: 400 }
      );
    }

    // Detekcija tipa prijave
    const isKurs = Boolean(kurs);
    const tableName = isKurs ? "prijave_kursevi" : "prijave_zajednica";

    // Ujednačavanje napomene/poruke
    const unosNapomena = napomena || poruka || "";

    // Priprema podataka za bazu u zavisnosti od tabele
    const insertPayload = isKurs
      ? {
          ime,
          email,
          telefon: telefon || "",
          napomena: unosNapomena,
          kurs,
        }
      : {
          ime,
          email,
          mreza: mreza || "",
          nivo_znanja: nivoZnanja || "",
          poruka: unosNapomena,
          dogadjaj: dogadjaj || "Opšti upit za zajednicu",
        };

    // 1. Upis u Supabase bazu
    const { data, error } = await supabase.from(tableName).insert([insertPayload]).select();

    if (error) {
      console.error("Supabase greška pri upisu:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    // 2. Slanje e-mail obavještenja ako postoji Resend API ključ
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const emailSubject = isKurs
          ? `Nova prijava za kurs: ${kurs} (${ime})`
          : `Nova prijava za zajednicu: ${ime}`;

        const emailContent = isKurs
          ? `
            <h2>Nova prijava za kurs!</h2>
            <p><strong>Kurs:</strong> <span style="color: #0088cc; font-size: 16px; font-weight: bold;">${kurs}</span></p>
            <p><strong>Ime i prezime:</strong> ${ime}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${telefon || "Nije navedeno"}</p>
            <p><strong>Napomena:</strong> ${unosNapomena || "Nema napomene"}</p>
          `
          : `
            <h2>Nova prijava za zajednicu / događaj!</h2>
            <p><strong>Događaj / Svrha:</strong> <span style="color: #0088cc; font-size: 16px; font-weight: bold;">${dogadjaj || "Opšti upit za zajednicu"}</span></p>
            <p><strong>Ime i prezime:</strong> ${ime}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mreža / Profil:</strong> ${mreza || "Nije navedeno"}</p>
            <p><strong>Nivo znanja:</strong> ${nivoZnanja || "Nije navedeno"}</p>
            <p><strong>Poruka:</strong> ${unosNapomena || "Nema poruke"}</p>
          `;

        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: "sara.sljivo.22@size.ba",
          subject: emailSubject,
          html: emailContent,
        });
      } catch (emailErr) {
        console.error("Greška pri slanju emaila preko Resend-a:", emailErr);
      }
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("Neočekivana greška na serveru:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Došlo je do greške na serveru." },
      { status: 500 }
    );
  }
}