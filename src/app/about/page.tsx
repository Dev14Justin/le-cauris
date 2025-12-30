import Section from "@/components/Section";

export default function About() {
  return (
    <>
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de Le Cauris</h1>
          <p className="text-xl text-gray-400">Notre histoire, notre mission et notre équipe.</p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Mission et Valeurs</h2>
          <p className="text-lg text-gray-700 mb-6">
            Notre mission est de révéler, accompagner et propulser les artistes africains, en mettant en lumière l’authenticité et la profondeur de leurs œuvres.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-12">
            <li>Promotion de la richesse culturelle africaine</li>
            <li>Rigueur, professionnalisme et créativité</li>
            <li>Encouragement des jeunes talents</li>
            <li>Accessibilité culturelle pour tous</li>
            <li>Transmission et sauvegarde du patrimoine artistique</li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 text-gray-800">Nos Objectifs</h2>
          <p className="text-lg text-gray-700 mb-6">
            Le site Le Cauris – Art Révolution vise à :
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-12">
            <li>Offrir une visibilité optimale aux artistes et acteurs culturels</li>
            <li>Faciliter l’accès aux informations culturelles et artistiques</li>
            <li>Favoriser la commercialisation des œuvres et prestations artistiques</li>
            <li>Constituer une base de données fiable sur les disciplines artistiques au Togo et en Afrique</li>
            <li>Créer un pont entre artistes, publics, institutions et partenaires</li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Histoire</h2>
          <div className="text-gray-700 space-y-4 mb-12">
            <p>
              Art Révolution est né d’une vision : celle de WOMI Koffi Arsène, convaincu que l’artiste, pour impacter, doit conjuguer talent, discipline et quête intérieure. Pour lui, l’art est un levier puissant de transformation sociale.
            </p>
            <p>
              Cette idéologie a trouvé un écho auprès de Cosmaskete, artiste plasticien engagé pour la valorisation de l’identité africaine.
            </p>
            <p>
              Le nom <strong>Le Cauris</strong> provient d’un tableau de KOUGBLENOU Marcel Kodzo, artiste plasticien, illustrant la richesse et la symbolique africaine. Cette œuvre a donné naissance à toute une collection et à la plateforme Le Cauris – Art Révolution.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-gray-800">L'Équipe</h2>
          <p className="text-lg text-gray-700 mb-12">
            Notre équipe est composée d’artistes, promoteurs culturels, communicateurs, rédacteurs et passionnés de l’art africain unis par une même vision : faire rayonner la créativité du continent.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-gray-800">Nos Partenaires</h2>
          <p className="text-lg text-gray-700">
            Nous collaborons avec des institutions culturelles, galeries, collectifs artistiques, organisations nationales et internationales soutenant l’art et l’innovation culturelle.
          </p>
        </div>
      </Section>
    </>
  );
}
