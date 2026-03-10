"use client";

import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { artworks } from "@/data/artworks";
import { articles } from "@/data/articles";

export default function Home() {
  const featuredArtworks = artworks.slice(0, 3);
  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Œuvres le cauris dans la bible_.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-40 scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-neutral-950/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            <span className="text-orange-600"> Le Cauris : </span>  Plateforme engagée dans la valorisation des arts africains
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            Au-delà des formes, l&apos;écho d&apos;une culture. Découvrez une
            plateforme dédiée à la propulsion des talents et à la sauvegarde du
            patrimoine artistique.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Link
              href="/gallery"
              className="bg-orange-600 text-white px-10 py-4 rounded-full font-black hover:bg-orange-700 transition-all uppercase tracking-widest text-xs shadow-xl shadow-orange-600/20"
            >
              Explorer la Galerie
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-black hover:bg-white hover:text-neutral-950 transition-all uppercase tracking-widest text-xs"
            >
              Notre Vision
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Mission Quick Look */}
      <Section className="bg-white py-16">
        <h2 className="text-5xl md:text-5xl lg:text-5xl text-center mb-12 font-black text-neutral-800 tracking-tighter leading-tight">
          Notre Mission
        </h2>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-600/5 rounded-[30px] transform group-hover:rotate-2 transition-transform duration-500"></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-xl">
              <Image
                src="/les_jumeaux.jpeg"
                alt="Mission"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-600 rounded-[20px] flex items-center justify-center p-5 shadow-xl skew-y-3">
              <p className="text-white font-black text-center text-sm leading-tight">
                9+
                <br />
                <span className="text-[9px] font-normal uppercase tracking-widest opacity-80">
                  Collections thématiques
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="w-12 h-1 bg-orange-600 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-800 tracking-tighter leading-tight">
              Révéler l&apos;Authenticité.
            </h2>
            <p className="text-base text-neutral-500 font-light leading-relaxed">
              Nous ne nous contentons pas d&apos;exposer. Nous créons un pont
              entre les artistes émergents et le monde, en mettant en lumière la
              profondeur de chaque œuvre et l&apos;histoire qu&apos;elle porte.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 text-neutral-800">
              {/* Promotion Culturelle */}
              <div className="flex items-start gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-600 mt-1.5 flex-shrink-0"></span>
                <div className="space-y-1.5">
                  <span className="block uppercase tracking-[0.2em] font-black text-[11px]">
                    Promotion Culturelle
                  </span>
                  <p className="text-sm font-light text-neutral-500 leading-relaxed max-w-[280px]">
                    Valorisation de la richesse culturelle africaine et
                    accompagnement des talents émergents.
                  </p>
                </div>
              </div>

              {/* Support aux Artistes */}
              <div className="flex items-start gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-600 mt-1.5 flex-shrink-0"></span>
                <div className="space-y-1.5">
                  <span className="block uppercase tracking-[0.2em] font-black text-[11px]">
                    Support aux Artistes
                  </span>
                  <p className="text-sm font-light text-neutral-500 leading-relaxed max-w-[280px]">
                    Accompagnement personnalisé pour développer le talent et la
                    visibilité internationale.
                  </p>
                </div>
              </div>

              {/* Accès au Marché */}
              <div className="flex items-start gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-600 mt-1.5 flex-shrink-0"></span>
                <div className="space-y-1.5">
                  <span className="block uppercase tracking-[0.2em] font-black text-[11px]">
                    Accès au Marché
                  </span>
                  <p className="text-sm font-light text-neutral-500 leading-relaxed max-w-[280px]">
                    Ouverture de nouveaux débouchés commerciaux pour les
                    créations artistiques authentiques.
                  </p>
                </div>
              </div>

              {/* Héritage Artisanal */}
              <div className="flex items-start gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-600 mt-1.5 flex-shrink-0"></span>
                <div className="space-y-1.5">
                  <span className="block uppercase tracking-[0.2em] font-black text-[11px]">
                    Héritage Artisanal
                  </span>
                  <p className="text-sm font-light text-neutral-500 leading-relaxed max-w-[280px]">
                    Préservation et transmission des savoir-faire ancestraux
                    dans un monde moderne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Gallery Snippet */}
      <Section className="bg-neutral-50" title="Dernières Œuvres">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredArtworks.map((art) => (
            <div
              key={art.id}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <Image
                src={art.imageUrl}
                alt={art.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end">
                <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-[8px] mb-1">
                  {art.artist}
                </p>
                <h3 className="text-white text-lg font-black">{art.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center text-neutral-950 font-black uppercase tracking-widest text-[10px] group"
          >
            Voir toute la collection
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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
      </Section>

      {/* Univers Carousel / Preview */}
      <section className="relative text-white py-12 md:py-24 overflow-hidden bg-neutral-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Œuvre Femme cascade_.jpg"
            alt="Background"
            fill
            className="object-cover scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter">
                Nos Univers Artistiques
              </h2>
              <p className="text-lg text-neutral-400 font-light mb-10 leading-relaxed">
                Une diversité d&apos;expressions regroupées pour une expérience
                immersive complète, des traditions ancestrales aux avant-gardes
                numériques.
              </p>
              <Link
                href="/categories"
                className="inline-block bg-orange-600 text-white px-10 py-4 rounded-full font-black hover:bg-orange-700 transition shadow-xl shadow-orange-600/20 text-xs uppercase tracking-[0.2em]"
              >
                Découvrir
              </Link>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[32px] hover:bg-orange-600 transition-all duration-500 group cursor-default">
                  <h3 className="text-xl md:text-2xl font-black mb-2 tracking-tight">
                    Arts Visuels
                  </h3>
                  <p className="text-xs text-neutral-400 group-hover:text-white uppercase tracking-widest font-bold">
                    Peinture, Sculpture, Mosaïque
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[32px] hover:bg-orange-600 transition-all duration-500 group cursor-default">
                  <h3 className="text-xl md:text-2xl font-black mb-2 tracking-tight">
                    Arts Scéniques
                  </h3>
                  <p className="text-xs text-neutral-400 group-hover:text-white uppercase tracking-widest font-bold">
                    Musique, Danse, Théâtre
                  </p>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[32px] hover:bg-orange-600 transition-all duration-500 group cursor-default h-40 flex flex-col justify-end">
                  <h3 className="text-xl md:text-2xl font-black mb-2 tracking-tight">
                    Digital
                  </h3>
                  <p className="text-xs text-neutral-400 group-hover:text-white uppercase tracking-widest font-bold">
                    Art numérique & Design
                  </p>
                </div>
                <div className="bg-orange-600 p-8 rounded-[32px] flex flex-col justify-end h-64 shadow-2xl shadow-orange-600/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <p className="text-white font-black text-2xl md:text-3xl leading-tight mb-4 tracking-tighter relative z-10">
                    La voix de
                    <br />
                    la nouvelle
                    <br />
                    génération.
                  </p>
                  <div className="w-12 h-1.5 bg-white/40 rounded-full relative z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Snippet */}
      <Section className="bg-white" title="L'Écho du Cauris (Articles)">
        <div className="grid md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Link
              href={`/articles/${article.id}`}
              key={article.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all duration-500">
                {article.imageUrl && (
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-orange-600 text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full shadow-sm">
                  {article.category}
                </div>
              </div>
              <h3 className="text-lg font-black text-neutral-800 group-hover:text-orange-600 transition-colors mb-2 leading-tight">
                {article.title}
              </h3>
              <p className="text-sm text-neutral-500 line-clamp-2 font-medium">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Big CTA */}
      <div className="bg-orange-600 py-16 text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter">
            Partagez l&apos;Aventure.
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Que vous soyez artiste, collectionneur ou simple passionné,
            rejoignez Art Révolution pour construire l&apos;avenir culturel de
            l&apos;Afrique.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              href="/contact"
              className="bg-neutral-950 text-white px-8 py-3.5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-neutral-900 transition shadow-lg"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
