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
  {
    id: "e1",
    title: "Exposition Musée Paul Ahyi",
    type: "Exposition",
    date: "15 Avril 2024",
    location: "Lomé, Togo",
    description: "Une rétrospective exceptionnelle célébrant les maîtres de l'art contemporain.",
    status: "À venir",
    imageUrl: "/b-0.jpg"
  },
  {
    id: "e2",
    title: "Café Littéraire & Poésie",
    type: "Performance",
    date: "22 Mars 2024",
    location: "Espace Art Révolution",
    description: "Une soirée d'échange littéraire et de déclamation poétique.",
    status: "À venir",
    imageUrl: "/Œuvre Simplicité_.jpg"
  },
  {
    id: "e3",
    title: "Lancement Espoir FADU",
    type: "Événement",
    date: "10 Janvier 2024",
    location: "Palais des Congrès",
    description: "Cérémonie officielle de lancement pour soutenir l'entrepreneuriat culturel.",
    status: "Passé",
    imageUrl: "/Œuvre Mon environnement_.jpg"
  },
  {
    id: "e4",
    title: "Vernissage Talakaka",
    type: "Musique / Live",
    date: "05 Décembre 2023",
    location: "Hôtel 2 Février",
    description: "Présentation exclusive du nouvel album dans un cadre prestigieux.",
    status: "Passé",
    imageUrl: "/Œuvres le cauris dans la bible_.jpg"
  }
];
