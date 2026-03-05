"use client";

import Section from "@/components/Section";
import { artworks } from "@/data/artworks";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Header Section */}
      <div className="bg-neutral-900 text-white py-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-neutral-900"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Galerie d&apos;Émotions
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Une immersion au cœur de la création africaine. Découvrez les œuvres
            emblématiques qui façonnent l&apos;identité de Le Cauris.
          </p>
        </div>
      </div>

      <Section className="bg-neutral-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedImage(artwork.imageUrl)}
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                  <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                    <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase mb-1">
                      {artwork.category}
                    </span>
                    <h3 className="text-white text-lg font-bold mb-1">
                      {artwork.title}
                    </h3>
                    <p className="text-white/80 text-[10px] line-clamp-2">
                      {artwork.description}
                    </p>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-base font-bold text-neutral-800 group-hover:text-orange-600 transition-colors">
                      {artwork.title}
                    </h3>
                    {artwork.year && (
                      <span className="text-[9px] text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded">
                        {artwork.year}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-neutral-500 font-medium uppercase tracking-wider">
                    {artwork.artist}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors z-20"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            title="Fermer la galerie"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative w-full max-w-5xl h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const artwork = artworks.find(
                (a) => a.imageUrl === selectedImage,
              );
              return (
                artwork && (
                  <div className="flex flex-col items-center">
                    <div className="relative w-full max-h-[70vh] aspect-auto flex justify-center">
                      <Image
                        src={selectedImage}
                        alt={artwork.title}
                        width={1200}
                        height={800}
                        className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                      />
                    </div>
                    <div className="mt-6 text-center text-white max-w-2xl">
                      <h2 className="text-2xl font-bold text-orange-500 mb-1">
                        {artwork.title}
                      </h2>
                      <p className="text-base text-white/60 mb-2">
                        {artwork.artist}
                      </p>
                      <p className="text-sm text-white/80 font-light leading-relaxed">
                        {artwork.description}
                      </p>
                    </div>
                  </div>
                )
              );
            })()}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <Section className="bg-orange-600 text-white text-center py-16">
        <h2 className="text-xl md:text-2xl font-bold mb-3">
          Inspiré par une œuvre ?
        </h2>
        <p className="text-base mb-6 opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
          Toutes nos collections sont des invitations au voyage. Pour plus
          d&apos;informations sur une pièce ou une commande spécifique,
          n&apos;hésitez pas à nous contacter.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-neutral-100 transition-all shadow-md text-[11px] uppercase tracking-widest"
        >
          Nous Contacter
        </a>
      </Section>
    </>
  );
}
