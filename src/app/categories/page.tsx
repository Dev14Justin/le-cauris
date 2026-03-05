"use client";

import Section from "@/components/Section";
import { categories } from "@/data/categories";
import Image from "next/image";

export default function Categories() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/Œuvres le cauris dans la bible_.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/80"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Univers Artistiques
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Découvrez la diversité des expressions qui habitent notre
            plateforme, des traditions ancestrales aux innovations numériques.
          </p>
        </div>
      </div>

      <Section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 relative h-[300px] md:h-[350px] rounded-[24px] overflow-hidden shadow-xl group">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-xl font-bold text-white mb-1">
                      {category.title}
                    </h2>
                    <p className="text-white/80 max-w-sm text-xs font-light">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div
                    className={`w-12 h-1 ${category.color} rounded-full`}
                  ></div>
                  <h3 className="text-xl font-bold text-neutral-800">
                    Disciplines & Spécialités
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.items.map((item, i) => (
                      <div
                        key={i}
                        className="bg-white border border-neutral-100 p-2.5 rounded-xl shadow-sm hover:border-orange-200 hover:text-orange-600 transition-all cursor-default text-center font-medium text-neutral-700 text-xs"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <button className="bg-neutral-950 text-white px-7 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-md text-[11px] uppercase tracking-widest">
                    Explorer les œuvres
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Diversity Section */}
      <Section className="bg-orange-600 text-white overflow-hidden relative py-16">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            Une vision sans frontières
          </h2>
          <p className="text-lg mb-0 opacity-90 leading-relaxed font-light">
            Chez Art Révolution, nous croyons que l&apos;art ne peut être
            confiné à une seule boîte. Notre mission est de soutenir toutes les
            formes de créativité qui célèbrent l&apos;identité et
            l&apos;innovation africaines.
          </p>
        </div>
      </Section>
    </>
  );
}
