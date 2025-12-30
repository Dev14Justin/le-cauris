import Section from "@/components/Section";

export default function Articles() {
  // Placeholder data based on requirements
  const articles = [
    {
      title: "L'art contemporain au Togo : Une renaissance",
      category: "Analyse",
      excerpt: "Plongée au cœur de la scène artistique togolaise qui connaît une effervescence sans précédent...",
      date: "12 Oct 2023"
    },
    {
      title: "Entretien avec Cosmaskete",
      category: "Interview",
      excerpt: "L'artiste plasticien nous parle de son engagement pour la valorisation de l'identité africaine.",
      date: "28 Sep 2023"
    },
    {
      title: "Retour sur l'exposition 'Racines'",
      category: "Critique",
      excerpt: "Une exploration visuelle des traditions ancestrales revisitées par la jeune garde artistique.",
      date: "15 Sep 2023"
    },
    {
      title: "Portrait : KOUGBLENOU Marcel Kodzo",
      category: "Portrait",
      excerpt: "Découvrez l'homme derrière l'œuvre emblématique 'Le Cauris'.",
      date: "02 Sep 2023"
    }
  ];

  return (
    <>
      <div className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Articles</h1>
          <p className="text-xl text-white/90">Analyses, portraits, et actualités culturelles.</p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
           <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="bg-gray-200 h-48 w-full flex items-center justify-center text-gray-500">
                  {/* Placeholder for article image */}
                  [Image Article]
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{article.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <a href="#" className="text-orange-600 font-semibold hover:underline">Lire la suite &rarr;</a>
                </div>
              </div>
            ))}
           </div>
        </div>
      </Section>
    </>
  );
}
