"use client";

import Section from "@/components/Section";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/Œuvres le cauris dans la bible_.jpg"
            alt="Hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Notre Vision
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Un pont entre tradition et modernité, au service de
            l&apos;excellence artistique africaine.
          </p>
        </div>
      </div>

      <Section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
            <div className="space-y-8">
              <div className="w-16 h-1.5 bg-orange-600"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-800 tracking-tighter">
                Mission & Valeurs
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
                Notre mission est de révéler, accompagner et propulser les
                artistes africains, en mettant en lumière l&apos;authenticité et
                la profondeur de leurs œuvres.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Promotion de la richesse culturelle",
                  "Rigueur et professionnalisme",
                  "Encouragement des jeunes talents",
                  "Transmission du patrimoine",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-base text-neutral-500 font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-600 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-xl border border-neutral-100">
              <Image
                src="/oeuvre.png"
                alt="Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-neutral-50 p-10 md:p-16 rounded-[40px] border border-neutral-100 mb-24">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-neutral-800 text-center tracking-tighter">
              Nos Objectifs Stratégiques
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Visibilité optimale des artistes",
                "Accès facilité aux informations",
                "Commercialisation des œuvres",
                "Base de données fiable",
                "Pont institutionnel & public",
                "Sauvegarde de l'héritage",
              ].map((obj, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all group"
                >
                  <p className="text-base font-bold text-neutral-700 group-hover:text-orange-600 transition-colors">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-1 gap-16">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-neutral-800 tracking-tighter">
                  Notre Histoire
                </h2>
                <div className="text-lg md:text-xl text-neutral-600 space-y-6 font-light leading-relaxed">
                  <p>
                    Art Révolution est né d&apos;une vision : celle de WOMI
                    Koffi Arsène, convaincu que l&apos;artiste, pour impacter,
                    doit conjuguer talent, discipline et quête intérieure. Pour
                    lui, l&apos;art est un levier puissant de transformation
                    sociale.
                  </p>
                  <p>
                    Cette idéologie a trouvé un écho auprès de Cosmaskete,
                    artiste plasticien engagé pour la valorisation de
                    l&apos;identité africaine.
                  </p>
                  <p className="bg-orange-50 p-8 rounded-3xl border-l-[6px] border-orange-600 italic text-neutral-800 shadow-sm">
                    Le nom{" "}
                    <strong className="text-orange-600 font-black">
                      Le Cauris
                    </strong>{" "}
                    provient d&apos;un tableau de KOUGBLENOU Marcel Kodzo,
                    artiste plasticien, illustrant la richesse et la symbolique
                    africaine. Cette œuvre a donné naissance à toute une
                    collection.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-neutral-100">
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-neutral-800 tracking-tighter">
                  L&apos;Équipe
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
                  Notre équipe est composée d&apos;artistes, promoteurs
                  culturels, communicateurs, rédacteurs et passionnés de
                  l&apos;art africain unis par une même vision : faire rayonner
                  la créativité du continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
