"use client";

import Section from "@/components/Section";
import { events } from "@/data/events";
import Image from "next/image";

export default function Events() {
  const eventTypes = [
    "Expositions",
    "Concerts",
    "Conférences",
    "Ateliers",
    "Vernissages",
    "Festivals",
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/10 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Agenda Culturel
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Ne manquez aucun rendez-vous majeur. Suivez le rythme effréné de la
            création et des échanges artistiques.
          </p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Legend/Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {eventTypes.map((type) => (
              <span
                key={type}
                className="px-4 py-1.5 rounded-full border border-neutral-200 text-neutral-600 font-medium hover:border-orange-600 hover:text-orange-600 transition-colors cursor-pointer text-[11px] uppercase tracking-wider"
              >
                {type}
              </span>
            ))}
          </div>

          <div className="space-y-10">
            {events.map((event) => (
              <div
                key={event.id}
                className="group relative flex flex-col md:flex-row bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
              >
                {/* Visual */}
                <div className="w-full md:w-80 relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={event.imageUrl || "/b-0.jpg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      event.status === "À venir"
                        ? "bg-orange-600 text-white"
                        : event.status === "En cours"
                          ? "bg-green-600 text-white"
                          : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    {event.status}
                  </div>
                </div>

                {/* Content */}
                <div className="grow p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                    <div>
                      <span className="text-orange-600 font-bold text-[11px] uppercase tracking-widest">
                        {event.type}
                      </span>
                      <h2 className="text-xl font-bold text-neutral-800 mt-1">
                        {event.title}
                      </h2>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-xl font-black text-neutral-800 tracking-tighter">
                        {event.date.split(" ")[0]}
                      </div>
                      <div className="text-neutral-400 font-medium text-[11px] uppercase tracking-wider">
                        {event.date.split(" ").slice(1).join(" ")}
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-sm mb-6 leading-relaxed max-w-3xl font-light">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-neutral-500 font-medium pt-5 border-t border-neutral-50">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-orange-600"
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
                      <span className="text-[13px]">{event.location}</span>
                    </div>
                    {event.status === "À venir" && (
                      <button className="ml-auto bg-neutral-950 text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-all shadow-md text-[11px] uppercase tracking-widest">
                        En savoir plus
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
