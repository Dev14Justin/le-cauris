"use client";

import Section from "@/components/Section";
import { articles } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";

export default function Articles() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-500 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-700 rounded-full opacity-50 blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              L&apos;Écho Culturel
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light leading-relaxed">
              Plongez dans les récits, les analyses et les portraits qui font
              battre le cœur de l&apos;art africain contemporain.
            </p>
          </div>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col bg-white border border-neutral-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Wrapper */}
                <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
                  {article.imageUrl ? (
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-orange-50 text-orange-200">
                      <svg
                        className="w-16 h-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div> 
                  )}
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-orange-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <div className="text-sm text-neutral-400 mb-3 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {article.date}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-neutral-800 group-hover:text-orange-600 transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-sm text-neutral-600 mb-5 line-clamp-3 font-light leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-neutral-50">
                    <Link
                      href={`/articles/${article.id}`}
                      className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors group/link text-sm"
                    >
                      Lire l&apos;article
                      <svg
                        className="w-5 h-5 ml-2 transform transition-transform group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter / CTA */}
      <Section className="bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ne manquez aucun écho
          </h2>
          <p className="text-lg text-neutral-400 mb-10">
            Inscrivez-vous pour recevoir les dernières actualités sur les
            artistes, les expositions et les événements culturels majeurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="px-5 py-3 rounded-full bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-orange-600 transition-colors w-full sm:w-72 text-sm"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg text-sm">
              S&apos;abonner
            </button>
          </div>
        </div>
      </Section>
    </>
  );
}
