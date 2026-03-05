export interface Category {
  id: string;
  title: string;
  description: string;
  items: string[];
  imageUrl: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: "arts-visuels",
    title: "Arts Visuels",
    description: "L'expression par l'image, la forme et la matière.",
    items: ["Peinture", "Sculpture", "Mosaïque", "Gravure", "Dessin", "Photographie", "Graffiti", "Sérigraphie", "Installation", "Performance"],
    imageUrl: "/Œuvre Femme cascade_.jpg",
    color: "bg-orange-600"
  },
  {
    id: "arts-scene",
    title: "Arts de la Scène",
    description: "Le mouvement, la voix et l'émotion en direct.",
    items: ["Musique", "Slam", "Poésie", "Théâtre", "Danse", "Humour", "Comédie"],
    imageUrl: "/b-0.jpg",
    color: "bg-neutral-800"
  },
  {
    id: "autres-expressions",
    title: "Autres Expressions",
    description: "Le design et les nouvelles formes d'art numérique.",
    items: ["Art décoratif", "Art numérique", "Design créatif", "Artisanat d'art"],
    imageUrl: "/Œuvre Simplicité_.jpg",
    color: "bg-orange-500"
  }
];
