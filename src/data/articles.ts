export interface Article {
  id: string;
  title: string;
  category: "Exposition" | "Biographie" | "Événement" | "Culture" | "Musique";
  excerpt: string;
  date: string;
  imageUrl?: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Exposition au Musée Paul Ahyi",
    category: "Exposition",
    excerpt: "Retour sur l'exposition mémorable au musée Paul Ahyi, mettant en lumière la convergence des talents africains.",
    date: "Mars 2024",
    imageUrl: "/Œuvre Mon environnement_.jpg" // Placeholder using available image
  },
  {
    id: "2",
    title: "Cosmaskete : L'engagement par l'art plasticien",
    category: "Biographie",
    excerpt: "Portrait de Cosmaskete, artiste plasticien engagé pour la valorisation de l'identité africaine et co-fondateur d'Art Révolution.",
    date: "Février 2024",
    imageUrl: "/Œuvre Nouvelle vie_.jpg"
  },
  {
    id: "3",
    title: "Café Littéraire : La poésie de Kodjo",
    category: "Culture",
    excerpt: "Une soirée d'échange et de déclamation poétique célébrant la richesse verbale et l'esprit Togolais.",
    date: "Janvier 2024",
    imageUrl: "/Œuvre Simplicité_.jpg"
  },
  {
    id: "4",
    title: "Art et Mémoires Ras",
    category: "Culture",
    excerpt: "Exploration des liens entre mémoire collective et création contemporaine à travers le projet Ras.",
    date: "Décembre 2023",
    imageUrl: "/Œuvre Mon environnement_.jpg"
  },
  {
    id: "5",
    title: "Espoir FADU : Le grand lancement",
    category: "Événement",
    excerpt: "Célébration et promotion des talents avec le lancement officiel du projet Espoir FADU.",
    date: "Novembre 2023",
    imageUrl: "/b-0.jpg"
  },
  {
    id: "6",
    title: "Biographie : Lekid, l'étoile montante",
    category: "Biographie",
    excerpt: "Découvrez le parcours atypique et inspirant de Lekid sur la scène artistique locale.",
    date: "Octobre 2023",
    imageUrl: "/Œuvre Femme cascade_.jpg"
  },
  {
    id: "7",
    title: "Talakaka : Le nouvel album",
    category: "Musique",
    excerpt: "Analyse et réception du dernier opus musical de Talakaka, une fusion entre tradition et modernité.",
    date: "Septembre 2023",
    imageUrl: "/Œuvres le cauris dans la bible_.jpg"
  },
  {
    id: "8",
    title: "Lancement Parfait TOKE",
    category: "Événement",
    excerpt: "Retour sur l'événement de lancement de Parfait TOKE, un moment fort pour la communauté Art Révolution.",
    date: "Août 2023",
    imageUrl: "/b-0.jpg"
  },
  {
    id: "9",
    title: "KOUGBLENOU Marcel : Le maître du Cauris",
    category: "Biographie",
    excerpt: "Portrait du plasticien Marcel KOUGBLENOU, dont l'œuvre a inspiré le nom et la vision de notre plateforme.",
    date: "Juillet 2023",
    imageUrl: "/Œuvres le cauris dans la bible_.jpg"
  }
];
