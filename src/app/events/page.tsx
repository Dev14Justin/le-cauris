"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { events } from "@/data/events";
import Image from "next/image";
import Link from "next/link";

const eventTypes = [
  "Tous",
  "Festival",
  "Exposition",
  "Concert",
  "Talk Show",
  "Résidence Artistique",
  "Excursion Culturelle",
  "Lancement de Livre",
];

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [activeTab, setActiveTab] = useState<"all" | "avenir" | "passe">("all");

  const filteredEvents = events.filter((e) => {
    const matchType =
      activeFilter === "Tous" ||
      e.type.toLowerCase().includes(activeFilter.toLowerCase());
    const matchTab =
      activeTab === "all" ||
      (activeTab === "avenir" && e.status === "À venir") ||
      (activeTab === "passe" && e.status === "Passé");
    return matchType && matchTab;
  });

  const upcomingCount = events.filter((e) => e.status === "À venir").length;
  const passedCount = events.filter((e) => e.status === "Passé").length;

  return (
    <>
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/10 -skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl -mb-32 -ml-32"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Agenda Culturel
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Ne manquez aucun rendez-vous majeur. Suivez le rythme effréné de la
            création et des échanges artistiques.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-orange-600">
                {upcomingCount}
              </span>
              <span className="text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1">
                À venir
              </span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block self-center"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-neutral-400">
                {passedCount}
              </span>
              <span className="text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1">
                Passés
              </span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block self-center"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-white">
                {events.length}
              </span>
              <span className="text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1">
                Total
              </span>
            </div>
          </div>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Status Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {(["all", "avenir", "passe"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-600/20"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {tab === "all"
                  ? "Tous les événements"
                  : tab === "avenir"
                    ? "À venir"
                    : "Passés"}
              </button>
            ))}
          </div>

          {/* Type Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === type
                    ? "border-orange-600 text-orange-600 bg-orange-50"
                    : "border-neutral-200 text-neutral-600 hover:border-orange-600 hover:text-orange-600"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Events Grid – Card Layout */}
          {filteredEvents.length === 0 ? (
            <div className="text-center py-24 text-neutral-400">
              <p className="text-xl font-light">
                Aucun événement pour cette sélection.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group flex flex-col bg-white border border-neutral-100 rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                >
                  {/* Poster Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={event.imageUrl || "/b-0.jpg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>

                    {/* Status Badge */}
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow ${
                        event.status === "À venir"
                          ? "bg-orange-600 text-white"
                          : event.status === "En cours"
                            ? "bg-green-500 text-white"
                            : "bg-white/20 backdrop-blur-sm text-white border border-white/30"
                      }`}
                    >
                      {event.status}
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-neutral-950/60 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest border border-white/10">
                      {event.type}
                    </div>

                    {/* Bottom info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">
                        {event.date}
                      </p>
                      <h2 className="text-white font-black text-base leading-tight tracking-tight">
                        {event.title}
                      </h2>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 text-neutral-500 text-xs mb-3">
                      <svg
                        className="w-3.5 h-3.5 text-orange-500 shrink-0"
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
                      <span className="font-medium line-clamp-1">
                        {event.location}
                      </span>
                    </div>

                    <p className="text-neutral-500 text-xs leading-relaxed font-light line-clamp-3 flex-1">
                      {event.description}
                    </p>

                    {event.status === "À venir" && (
                      <Link
                        href="/contact"
                        className="mt-4 block text-center bg-orange-600 text-white py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-700 transition-all shadow-md shadow-orange-600/20"
                      >
                        Je m&apos;inscris
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* Organizer CTA */}
      <Section className="bg-neutral-50">
        <div className="max-w-4xl mx-auto bg-white rounded-[24px] p-8 md:p-12 shadow-md text-center relative overflow-hidden border border-neutral-100">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-neutral-800">
              Vous organisez un événement ?
            </h3>
            <p className="text-base text-neutral-500 mb-8 leading-relaxed font-light">
              Donnez à votre projet la visibilité qu&apos;il mérite. Art
              Révolution est le partenaire idéal pour toucher un public
              passionné et engagé.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg text-[11px] uppercase tracking-widest"
            >
              Proposer un événement
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
