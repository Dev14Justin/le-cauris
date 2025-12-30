import Section from "@/components/Section";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-orange-600 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Le Cauris - ArtRévolution</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            L’écho de la richesse culturelle africaine. 
          </p>
          <p className="text-lg mb-8 max-w-3xl">
            Plateforme engagée dans la valorisation des arts africains, en particulier les créations togolaises. 
            Espace de découverte, d’inspiration et de promotion des talents émergents.
          </p>
          <div className="flex space-x-4">
            <Link href="/gallery" className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
              Découvrir la Galerie
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-orange-600 transition">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>

      {/* Mission Teaser */}
      <Section className="bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Révéler, accompagner et propulser les artistes africains, en mettant en lumière l’authenticité et la profondeur de leurs œuvres.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">Promotion</h3>
              <p className="text-gray-600">Promotion de la richesse culturelle africaine et des talents émergents.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">Accessibilité</h3>
              <p className="text-gray-600">Faciliter l’accès à la culture et aux informations artistiques pour tous.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">Patrimoine</h3>
              <p className="text-gray-600">Transmission et sauvegarde du patrimoine artistique africain.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Categories Teaser */}
      <Section className="bg-gray-100" title="Nos Univers Artistiques">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Arts Visuels</h3>
            <p className="text-gray-600 mb-6">Peinture, sculpture, mosaïque, photographie, et plus encore.</p>
            <Link href="/categories" className="text-orange-600 font-semibold hover:underline">Voir plus &rarr;</Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Arts de la Scène</h3>
            <p className="text-gray-600 mb-6">Musique, slam, théâtre, danse, humour.</p>
            <Link href="/categories" className="text-orange-600 font-semibold hover:underline">Voir plus &rarr;</Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Autres Expressions</h3>
            <p className="text-gray-600 mb-6">Art décoratif, art numérique, design créatif.</p>
            <Link href="/categories" className="text-orange-600 font-semibold hover:underline">Voir plus &rarr;</Link>
          </div>
        </div>
      </Section>

      {/* Events Teaser */}
      <Section className="bg-white" title="Événements à Venir">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-8">
            Expositions, concerts, ateliers, et festivals. Ne manquez rien de l'actualité culturelle.
          </p>
          <Link href="/events" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition">
            Voir le calendrier
          </Link>
        </div>
      </Section>
    </>
  );
}
