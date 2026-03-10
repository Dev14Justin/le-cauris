export interface Artwork {
  id: string;
  title: string;
  artist: string;
  description: string;
  imageUrl: string;
  category: string;
  year?: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Femme cascade",
    artist: "Artiste Partenaire",
    description: "Une œuvre explorant la fluidité et la force féminine à travers des formes organiques et des contrastes saisissants.",
    imageUrl: "/Œuvre Femme cascade_.jpg",
    category: "Peinture / Sculpture",
    year: "2023"
  },
  {
    id: "2",
    title: "Mon environnement",
    artist: "Artiste Partenaire",
    description: "Une réflexion visuelle sur la relation entre l'homme et son milieu naturel, capturant l'essence du paysage togolais.",
    imageUrl: "/Œuvre Mon environnement_.jpg",
    category: "Arts Visuels",
    year: "2023"
  },
  {
    id: "3",
    title: "Nouvelle vie",
    artist: "Artiste Partenaire",
    description: "Symbole de renaissance et de renouveau, cette œuvre utilise des textures riches pour illustrer le cycle de la vie.",
    imageUrl: "/Œuvre Nouvelle vie_.jpg",
    category: "Art Contemporain",
    year: "2023"
  },
  {
    id: "4",
    title: "Simplicité",
    artist: "Artiste Partenaire",
    description: "La beauté réside dans l'épuration. Cette pièce met en avant l'élégance des formes minimalistes.",
    imageUrl: "/Œuvre Simplicité_.jpg",
    category: "Art Minimaliste",
    year: "2023"
  },
  {
    id: "5",
    title: "Le cauris dans la bible",
    artist: "KOUGBLENOU Marcel Kodzo",
    description: "Œuvre emblématique explorant le lien entre l'objet traditionnel (le cauris) et la spiritualité, à l'origine de la collection Le Cauris.",
    imageUrl: "/Œuvres le cauris dans la bible_.jpg",
    category: "Art Spirituel / Traditionnel",
    year: "2023"
  },
  {
    id: "6",
    title: "Les deux Jumelles",
    artist: "KOUGBLENOU Marcel Kodzo",
    description: "Œuvre mettant en valeur la complicité entre deux soeurs jumelles.",
    imageUrl: "/jumeaux.jpeg",
    category: "Art Spirituel / Traditionnel",
    year: "2023"
  },
];
