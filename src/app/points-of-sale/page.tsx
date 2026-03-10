"use client";

import Section from "@/components/Section";
import Image from "next/image";

export default function PointsOfSale() {
  const locations = [
    {
      name: "Atelier ARTKOPÉ",
      type: "Espace Principal",
      description:
        "Notre cœur battant. Un espace de création, de transmission et d'exposition permanente situé à Lomé.",
      address: "Quartier Totsi, Lomé, Togo",
      hours: "Lun - Ven: 09h00 - 18h00 / Sam: 10h00 - 16h00",
      contact: "+228 92 60 43 76",
      featured: true,
    },
    
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/b-0.jpg" alt="Bg" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Où nous trouver ?
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light leading-relaxed">
            Rencontrez les œuvres dans leur cadre réel. De notre atelier aux
            galeries partenaires, découvrez nos points de présence.
          </p>
        </div>
      </div>

      <Section className="bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-[24px] p-7 shadow-sm border-t-4 ${loc.featured ? "border-orange-600 scale-105 z-10 shadow-lg" : "border-neutral-800"} hover:translate-y-[-8px] transition-all duration-300`}
              >
                <span className="text-orange-600 font-bold text-[10px] uppercase tracking-widest">
                  {loc.type}
                </span>
                <h2 className="text-xl font-bold mb-4 text-neutral-800 mt-2">
                  {loc.name}
                </h2>
                <p className="text-sm text-neutral-500 mb-6 leading-relaxed font-light">
                  {loc.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-neutral-100 text-[13px] text-neutral-600">
                  <div className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-3 text-orange-600 shrink-0 mt-0.5"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {loc.address}
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-3 text-orange-600 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {loc.hours}
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-3 text-orange-600 shrink-0 mt-0.5"
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
                    {loc.contact}
                  </div>
                </div>

                <button className="mt-8 w-full py-3 rounded-xl border border-neutral-200 text-neutral-800 font-bold hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all text-[11px] uppercase tracking-widest">
                  Y aller via Maps
                </button>
              </div>
            ))}
          </div>

          {/* Special mention */}
          <div className="mt-16 flex flex-col md:flex-row items-center bg-white rounded-[30px] overflow-hidden shadow-xl border border-neutral-100">
            <div className="w-full md:w-1/3 relative h-64 md:h-[350px]">
              <Image
                src="/Œuvres le cauris dans la bible_.jpg"
                alt="Art"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-800">
                Partenariats & Distributions
              </h2>
              <p className="text-lg text-neutral-500 mb-8 leading-relaxed font-light">
                Vous possédez une galerie ou un espace d&apos;exposition et
                souhaitez intégrer les collections Le Cauris - Art Révolution ?
                Nous sommes toujours ouverts à de nouvelles collaborations.
              </p>
              <div className="flex space-x-4">
                <a
                  href="/contact"
                  className="bg-neutral-950 text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-600 transition-all shadow-md text-[11px] uppercase tracking-widest"
                >
                  Devenir partenaire
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
