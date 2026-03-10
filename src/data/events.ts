export interface Event {
  id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
  status: "Passé" | "À venir" | "En cours";
}

export const events: Event[] = [
  // ── 2026 ───────────────────────────────────────────────
  {
    id: "e16",
    title: "Festival EMOME'ART – 8ème Édition",
    type: "Festival",
    date: "Juin – Juillet 2026",
    location: "Lomé, Tsévié, Kpalimé – Togo",
    description:
      "Huitième édition du festival EMOME'ART, célébration pluridisciplinaire de la création artistique africaine contemporaine à travers plusieurs villes du Togo.",
    imageUrl: "/event/event 16.jpg",
    status: "À venir",
  },
  {
    id: "e15",
    title: "Togo Art Festival – 2ème Édition",
    type: "Festival",
    date: "11 – 18 Avril 2026",
    location: "Arcueil, France",
    description:
      "Deuxième édition du Togo Art Festival sous le thème \"Racines et Modernités\". Une vitrine de l'art togolais à l'international, à Arcueil, France.",
    imageUrl: "/event/event 15.jpg",
    status: "À venir",
  },
  {
    id: "e14",
    title: "Redécouvrir Aného – Excursion Culturelle",
    type: "Excursion Culturelle",
    date: "14 Mars 2026",
    location: "Aného, Togo",
    description:
      "Excursion culturelle pour redécouvrir la ville historique d'Aného : visite du Palais de Lolan, Glidji et d'autres sites du patrimoine togolais.",
    imageUrl: "/event/event 14.jpg",
    status: "À venir",
  },
  {
    id: "e13",
    title: "Exposition « Herbe Bleue du Togo »",
    type: "Exposition",
    date: "06 – 15 Mars 2026",
    location: "Lomé, Togo",
    description:
      "Exposition artistique autour de la nature et de la biodiversité togolaise, à travers des œuvres qui célèbrent la flore et la relation de l'Homme à son environnement.",
    imageUrl: "/event/event 13.jpg",
    status: "À venir",
  },
  {
    id: "e12",
    title: "Festival Art & Mémoire 2026",
    type: "Festival",
    date: "Février – Mars 2026",
    location: "Togo – Pays invité : Haïti",
    description:
      "Troisième édition du Festival Art & Mémoire. Au programme : une soirée cinéma (27 fév), une marche mémorielle (1er mars). Pays invité : Haïti.",
    imageUrl: "/event/event 12.jpg",
    status: "À venir",
  },
  {
    id: "e11",
    title: "Résidence Internationale d'Art Contemporain",
    type: "Résidence Artistique",
    date: "10 – 25 Février 2026",
    location: "Agou & Lomé, Togo",
    description:
      "Résidence internationale sous le thème « Jusqu'à ce que la sève se brûle », réunissant 13 artistes venus de 12 pays pour une exploration artistique transnationale.",
    imageUrl: "/event/event 11.jpg",
    status: "À venir",
  },
  {
    id: "e10",
    title: "Talk Show – L'Art Contemporain au Quotidien",
    type: "Talk Show",
    date: "24 Janvier 2026",
    location: "Lomé, Togo",
    description:
      "Talk show animé par Kossi Assou autour de l'importance de l'art contemporain dans la vie quotidienne, avec des artistes et acteurs culturels invités.",
    imageUrl: "/event/event 10.jpg",
    status: "À venir",
  },
  // ── 2025 ───────────────────────────────────────────────
  {
    id: "e9",
    title: "Appel aux Sponsors – Mia Nyonu",
    type: "Appel à Partenaires",
    date: "2025",
    location: "Lomé, Togo",
    description:
      "Programme Mia Nyonu : recherche de partenaires et sponsors pour soutenir des expositions engagées et des rencontres éducatives dédiées à la création artistique.",
    imageUrl: "/event/event 9.jpg",
    status: "Passé",
  },
  {
    id: "e8",
    title: "Supremacy Art – 13ème Foire ADJAFI",
    type: "Foire d'Art",
    date: "21 Août – 07 Septembre 2025",
    location: "Lycée Agoè-Nyivé, Lomé, Togo",
    description:
      "Treizième édition de la Foire ADJAFI « Supremacy Art » : exposition d'art plastique regroupant des artistes confirmés et émergents dans un espace ouvert au grand public.",
    imageUrl: "/event/event 8.jpg",
    status: "Passé",
  },
  {
    id: "e7",
    title: "ASIWO KPE – Exposition-Vente",
    type: "Exposition-Vente",
    date: "02 – 28 Août 2025",
    location: "Musée Agnassan - Paul Ahyi, Cacaveli, Lomé",
    description:
      "Exposition-vente ASIWO KPE avec lancement officiel accompagné d'une performance artistique le 2 août. Au programme : ateliers pratiques et tables rondes tout au long du mois.",
    imageUrl: "/event/event 7.jpg",
    status: "Passé",
  },
  {
    id: "e6",
    title: "Une Journée à Kpalimé",
    type: "Excursion Culturelle",
    date: "01 Juin 2025",
    location: "Kpalimé & Mont Agou, Togo",
    description:
      "Excursion culturelle organisée par Miss Focus : randonnée au Mont Agou, atelier de poterie traditionnelle et déjeuner au Foufou. Prix : 25 000 Fcfa par personne.",
    imageUrl: "/event/event 6.jpg",
    status: "Passé",
  },
  {
    id: "e5",
    title: "Revalorisation des Valeurs Africaines",
    type: "Exposition",
    date: "25 Avril 2025 (Vernissage)",
    location: "CETEF TOGO 2000 – Pavillon Oti, Lomé",
    description:
      "Exposition de l'artiste plasticien Cosmaskete (Kete A.) dédiée à la revalorisation des valeurs africaines. Vernissage le 25 avril, exposition visible tout le mois d'avril.",
    imageUrl: "/event/event 5.jpg",
    status: "Passé",
  },
  {
    id: "e4",
    title: "Lancement du livre – Parfait K. Toke",
    type: "Lancement de Livre",
    date: "09 Avril 2025 à 18h00 GMT",
    location: "Open The Box, Lomé, Togo",
    description:
      "Cérémonie de lancement du livre « Un Pied à l'École, Un Pied sur LinkedIn » de l'auteur Parfait K. Toke, une rencontre entre entrepreneuriat, réseautage et jeunesse africaine.",
    imageUrl: "/event/event 4.jpg",
    status: "Passé",
  },
  {
    id: "e3",
    title: "GENTRI – Lekid 28 (EP Release)",
    type: "Sortie d'Album / Concert",
    date: "01 Février 2025",
    location: "Lomé, Togo",
    description:
      "Sortie de l'EP « Lekid 28 » de l'artiste GENTRI, composé de 5 titres : On My Way, Go Get Money, Correction, Alpha Omega, Password. Une performance musicale inédite.",
    imageUrl: "/event/event 3.jpg",
    status: "Passé",
  },
  {
    id: "e2",
    title: "S'organiser Suffira – Exposition Collective",
    type: "Exposition Collective",
    date: "25 Janvier – 22 Février 2025",
    location: "Musée Paul Ahyi, Agoè-Caccaveli, Lomé",
    description:
      "Exposition collective réunissant 11 artistes dont Manouchka Shams, Tesprit et Marius Dansou, autour du thème de l'organisation et de la solidarité comme moteur de changement.",
    imageUrl: "/event/event 2.jpg",
    status: "Passé",
  },
  {
    id: "e1",
    title: "Festival Art & Mémoires 2025",
    type: "Festival",
    date: "06 – 16 Février 2025",
    location: "Agbodrafo, Lomé, Kpalimé (Togo) & Guadeloupe",
    description:
      "Festival Art & Mémoires autour de la mémoire de la traite négrière et de l'unicité en héritage. Au programme : marche mémorielle (9 fév), conférences et concert de clôture (16 fév).",
    imageUrl: "/event/event 1.jpg",
    status: "Passé",
  },
];
