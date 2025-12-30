import Section from "@/components/Section";

export default function Contact() {
  return (
    <>
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-400">Une question, un projet ? N'hésitez pas.</p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Nos Coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                 <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-4">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-800">Email</h3>
                   <p className="text-gray-600">caurisle@gmail.com</p>
                 </div>
              </div>

              <div className="flex items-start">
                 <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-4">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-800">Téléphone</h3>
                   <p className="text-gray-600">+228 71 10 44 92</p>
                   <p className="text-gray-600">+228 92 60 43 76</p>
                   <p className="text-gray-600">+228 97 16 89 61</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="Sujet de votre message" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="Votre message..."></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition">
                Envoyer
              </button>
            </form>
          </div>

        </div>
      </Section>
    </>
  );
}
