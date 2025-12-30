import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Le Cauris - ArtRévolution</h3>
            <p className="text-gray-400">
              L’écho de la richesse culturelle africaine. Une plateforme engagée dans la valorisation des arts africains et des talents émergents.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">À propos</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition">Galerie</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: caurisle@gmail.com</p>
            <p className="text-gray-400">Tél: +228 71 10 44 92</p>
            <p className="text-gray-400">Tél: +228 92 60 43 76</p>
            <p className="text-gray-400">Tél: +228 97 16 89 61</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Le Cauris - ArtRévolution. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
