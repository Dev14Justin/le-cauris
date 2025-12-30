import Section from "@/components/Section";

export default function PointsOfSale() {
  return (
    <>
      <div className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Points de Vente</h1>
          <p className="text-xl text-white/90">Où trouver nos œuvres.</p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-orange-600">
               <h2 className="text-2xl font-bold mb-4 text-gray-800">Atelier ARTKOPÉ</h2>
               <p className="text-gray-600 mb-4">
                 Notre espace principal de création et d'exposition. Retrouvez la majorité de nos collections permanentes ici.
               </p>
               <button className="text-orange-600 font-semibold hover:underline">Voir sur la carte &rarr;</button>
             </div>

             <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-gray-800">
               <h2 className="text-2xl font-bold mb-4 text-gray-800">Espaces Partenaires</h2>
               <p className="text-gray-600 mb-4">
                 Nos œuvres sont également disponibles dans une sélection de galeries et boutiques partenaires à Lomé et dans la région.
               </p>
               <button className="text-orange-600 font-semibold hover:underline">Liste des partenaires &rarr;</button>
             </div>

             <div className="md:col-span-2 bg-orange-50 p-8 rounded-xl border border-orange-100">
               <h2 className="text-2xl font-bold mb-4 text-gray-800">Expositions Temporaires</h2>
               <p className="text-gray-700">
                 Lors de nos événements, vernissages et festivals, des points de vente éphémères sont mis en place. 
                 Consultez notre <a href="/events" className="text-orange-600 underline">agenda</a> pour savoir où nous trouver prochainement.
               </p>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
}
