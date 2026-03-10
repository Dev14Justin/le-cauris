"use client";

import Section from "@/components/Section";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/b-0.jpg" alt="Bg" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Restons Connectés
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Une question sur une œuvre ? Un projet de collaboration ? Notre
            équipe est à votre écoute pour faire rayonner l&apos;art africain.
          </p>
        </div>
      </div>

      <Section className="bg-neutral-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-neutral-800">
                  Nos Coordonnées
                </h2>
                <p className="text-neutral-500 mb-6 text-sm leading-relaxed font-light">
                  N&apos;hésitez pas à nous contacter directement ou à nous
                  rendre visite à l&apos;Atelier ARTKOPÉ.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Section */}
                <div className="group flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-1">
                      Email
                    </h3>
                    <p className="text-base font-bold text-neutral-800">
                      caurisle@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="group flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-1">
                      Téléphone
                    </h3>
                    <div className="space-y-0.5">
                      <p className="text-base font-bold text-neutral-800">
                        +228 71 10 44 92
                      </p>
                      <p className="text-base font-bold text-neutral-800">
                        +228 92 60 43 76
                      </p>
                      <p className="text-base font-bold text-neutral-800">
                        +228 97 16 89 61
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div className="group flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-1">
                      Localisation
                    </h3>
                    <p className="text-base font-bold text-neutral-800">
                      Lomé, Togo
                    </p>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">
                      Quartier Totsi, Espace Art Révolution
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-lg relative overflow-hidden border border-neutral-100">
                <h2 className="text-xl font-bold mb-6 text-neutral-800">
                  Envoyez-nous un message
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest pl-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-100 rounded-lg focus:ring-1 focus:ring-orange-600 focus:bg-white focus:outline-none transition-all text-sm"
                      placeholder="Ex: Koffi Mensah"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest pl-1">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-100 rounded-lg focus:ring-1 focus:ring-orange-600 focus:bg-white focus:outline-none transition-all text-sm"
                      placeholder="Ex: koffi@mail.com"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest pl-1">
                      Sujet
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-100 rounded-lg focus:ring-1 focus:ring-orange-600 focus:bg-white focus:outline-none transition-all text-sm"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest pl-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-100 rounded-lg focus:ring-1 focus:ring-orange-600 focus:bg-white focus:outline-none transition-all resize-none text-sm"
                      placeholder="Votre message ici..."
                    />
                  </div>
                  <div className="md:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-all shadow-md uppercase tracking-widest text-[11px]"
                    >
                      Envoyer le message
                    </button>
                    <p className="text-center text-[10px] text-neutral-400 mt-4 italic">
                      En envoyant ce message, vous acceptez d&apos;être
                      recontacté par notre équipe.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
