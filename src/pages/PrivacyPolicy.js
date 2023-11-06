import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import logo from "../assets/images/DeepClean-Logo.png";
import whitelogo from "../assets/images/DeepClean-LogoWhite.png";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <>
      <HelmetProvider>
        <Helmet></Helmet>
      </HelmetProvider>
      <section class="py-8 px-4 lg:px-10 border-green-700 border-b-2">
        <nav class="relative">
          <div class="flex justify-between items-center">
            <Link class="text-xl text-white font-semibold" to="#">
              <img
                src={logo}
                alt=""
                class="h-16"
              />
            </Link>
          </div>
        </nav>
      </section>
      <section class="py-12">
        <div class="container px-4 mx-auto">
          <div class="max-w-3xl mx-auto">
            <h3 class="text-2xl font-medium mb-8 text-green-700">
              Politica de confidențialitate
            </h3>
            <p class="text-lg font-medium mb-6 text-green-700">
              Data ultimei actualizări:{" "}
            </p>
            <p class="text-lg font-medium mb-6 text-green-700">
              Înțelegem importanța protejării confidențialității datelor
              personale și ne angajăm să respectăm și să protejăm drepturile
              utilizatorilor noștri în ceea ce privește confidențialitatea și
              securitatea datelor. Această Politică de Confidențialitate explică
              cum colectăm, utilizăm, stocăm și protejăm informațiile pe care le
              primim de la utilizatorii noștri în timpul vizitării și utilizării
              site-ului nostru.
            </p>
            <p class="leading-8 mb-6 text-green-700">
              Informații colectate
              <br />
              Prin utilizarea site-ului nostru, putem colecta informații
              personale și non-personale în diferite moduri și în următoarele
              contexte:
              <br />
              1.1 Informații furnizate voluntar de utilizatori:
              <br />
              Prin intermediul formularelor de contact sau înregistrare, puteți
              furniza informații precum numele, adresa de e-mail, numărul de
              telefon și alte date relevante.
              <br />
              1.2 Informații colectate automat:
              <br />
              Atunci când accesați site-ul nostru, automat colectăm anumite
              informații non-personale, cum ar fi adresa IP, tipul de browser,
              sistemul de operare și pagina web de proveniență.
            </p>
            <p class="leading-8 mb-6 text-green-700">
              Utilizarea informațiilor
              <br />
              Informațiile colectate pot fi utilizate în următoarele scopuri:
              <br />
              2.1 Personalizarea și îmbunătățirea experienței utilizatorilor:
              <br />
              Utilizăm informațiile colectate pentru a personaliza și îmbunătăți
              experiența utilizatorilor noștri pe site-ul nostru, pentru a oferi
              conținut relevant și pentru a adapta comunicările noastre.
              <br />
              2.2 Comunicare și suport:
              <br />
              Utilizăm adresele de e-mail și alte informații de contact
              furnizate pentru a răspunde la solicitările utilizatorilor noștri
              și pentru a le oferi asistență în legătură cu întrebări sau
              probleme.
              <br />
              Divulgarea informațiilor către terțe părți
              <br />
              Noi nu vindem, închiriem sau partajăm informațiile personale ale
              utilizatorilor noștri cu terțe părți în scopuri de marketing sau
              publicitate. Cu toate acestea, putem dezvălui informații în
              următoarele situații:
              <br />
              3.1 Furnizori de servicii:
              <br />
              Putem partaja informații cu furnizorii de servicii care ne ajută
              în desfășurarea afacerii noastre și în îndeplinirea scopurilor
              menționate anterior.
              <br />
              3.2 Obligații legale:
              <br />
              Putem dezvălui informații în cazul în care suntem obligați de lege
              să o facem sau în cazul în care considerăm în mod rezonabil că
              dezvăluirea este necesară pentru a respecta procese juridice sau
              pentru a ne proteja drepturile, securitatea sau proprietatea.
            </p>
            <p class="leading-8 mb-6 text-green-700">
              Securitatea informațiilor
              <br />
              Ne angajăm să protejăm informațiile personale ale utilizatorilor
              noștri și să implementăm măsuri de securitate adecvate pentru a
              preveni accesul neautorizat, utilizarea incorectă, modificarea sau
              distrugerea acestora.
            </p>

            <p class="leading-8 mb-6 text-green-700">
              Drepturile utilizatorilor
              <br />
              Utilizatorii noștri au dreptul de a solicita accesul, rectificarea
              sau ștergerea informațiilor personale pe care le-am colectat.
              Pentru a exercita aceste drepturi, utilizatorii pot contacta
              echipa noastră prin intermediul informațiilor de contact furnizate
              mai jos.
            </p>
            <p class="leading-8 text-green-700">
              Modificări ale politicii de confidențialitate
              <br />
              Această Politică de Confidențialitate poate fi actualizată
              periodic pentru a reflecta eventuale modificări ale practicilor
              noastre de confidențialitate. Vă rugăm să revizuiți periodic
              această pagină pentru a fi la curent cu cele mai recente
              informații. Pentru orice întrebări sau nelămuriri referitoare la
              această Politică de Confidențialitate, vă rugăm să ne contactați
              prin intermediul informațiilor de contact furnizate mai jos. Vă
              mulțumim pentru încrederea acordată și pentru utilizarea site-ului
              nostru!
            </p>
          </div>
        </div>
      </section>
      <section class="py-24 bg-green-700">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-between -mx-2">
            <div class="w-full lg:w-2/6 px-2">
              <Link
                class="inline-block mb-6 text-white text-lg font-semibold"
                href="#"
              >
                <img
                  class="h-16"
                  src={whitelogo}
                  alt=""
                  width="auto"
                />
              </Link>
              <p class="hidden lg:block text-sm text-blue-300">
                Toate drepturile rezervate © Deep Clean Services 2023
              </p>
            </div>
            <div class="w-full lg:w-4/6 px-2">
              <p class="mt-6 lg:hidden text-sm text-blue-300">
                Toate drepturile rezervate © Deep Clean Services 2023
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
