import Section from "@/components/Section";

export default function Events() {
  const eventTypes = [
    "Expositions et vernissages",
    "Concerts et performances live",
    "Conférences de presse",
    "Appels à candidatures (résidences, concours, pitch, etc.)",
    "Visites guidées",
    "Biennales et festivals",
    "Ateliers, masterclasses et formations artistiques",
  ];

  return (
    <>
      <div className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Événements</h1>
          <p className="text-xl text-white/90">L'actualité culturelle majeure.</p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 mb-12">
            Nous relayons et promouvons les activités culturelles majeures :
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {eventTypes.map((event, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                    {index + 1}
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-800 pt-1">{event}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-gray-100 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Vous organisez un événement ?</h3>
            <p className="text-gray-600 mb-6">Contactez-nous pour promouvoir votre événement sur notre plateforme.</p>
            <a href="/contact" className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition">
              Nous contacter
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
