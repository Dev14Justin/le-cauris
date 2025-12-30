import Section from "@/components/Section";

export default function Gallery() {
  const gallerySections = [
    {
      title: "Collection Le Cauris",
      description: "Œuvres d’art de notre collection permanente.",
      items: [1, 2, 3]
    },
    {
      title: "Artistes Partenaires",
      description: "Travaux d’artistes partenaires.",
      items: [1, 2, 3]
    },
    {
      title: "Expositions Virtuelles",
      description: "Visites immersives.",
      items: [1, 2]
    },
    {
      title: "Événements & Projets",
      description: "Photographies d’événements et projets artistiques.",
      items: [1, 2, 3, 4]
    }
  ];

  return (
    <>
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galerie</h1>
          <p className="text-xl text-gray-400">Découvrez nos collections et expositions.</p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          {gallerySections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{section.title}</h2>
              <p className="text-gray-600 mb-6">{section.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {section.items.map((item) => (
                  <div key={item} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      [Image {section.title} {item}]
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                       <span className="text-white opacity-0 group-hover:opacity-100 font-bold">Voir</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
