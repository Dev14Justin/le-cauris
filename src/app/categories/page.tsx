import Section from "@/components/Section";

export default function Categories() {
  const categories = [
    {
      title: "Arts visuels",
      items: ["Peinture", "Sculpture", "Mosaïque", "Gravure", "Dessin", "Photographie", "Graffiti", "Sérigraphie", "Installation", "Performance"]
    },
    {
      title: "Arts de la scène",
      items: ["Musique", "Slam", "Poésie", "Théâtre", "Danse", "Humour", "Comédie"]
    },
    {
      title: "Autres expressions artistiques",
      items: ["Art décoratif", "Art numérique", "Design créatif", "Etc."]
    }
  ];

  return (
    <>
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catégories Artistiques</h1>
          <p className="text-xl text-gray-400">Une diversité de domaines pour toutes les expressions.</p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                <h2 className="text-2xl font-bold mb-6 text-orange-600 border-b border-orange-200 pb-2">
                  {category.title}
                </h2>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
