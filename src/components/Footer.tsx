import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 items-start">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/logo.jpg"
                  alt="Le Cauris Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tighter">
                  Le Cauris
                </span>
                <span className="text-orange-600 font-bold text-[10px] uppercase tracking-[0.3em] -mt-1">
                  ArtRévolution
                </span>
              </div>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm font-light">
              L&apos;écho de la richesse culturelle africaine. Une plateforme
              engagée dans la valorisation des arts africains et des talents
              émergents, au service d&apos;une renaissance culturelle durable.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-orange-600 hover:text-white transition-all shadow-lg border border-white/5 group"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-orange-600 hover:text-white transition-all shadow-lg border border-white/5 group"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.032 2.612.019 3.9.155.031 1.285.456 2.538 1.252 3.563q.154.195.334.372c.463.456.998.84 1.587 1.137.589.297 1.24.469 1.905.51v3.911c-.534-.055-1.062-.163-1.574-.32a5.5 5.5 0 0 1-2.312-1.2c-.522-.444-.954-.984-1.272-1.588V16.32a6.3 6.3 0 0 1-2.14 4.75 6.3 6.3 0 0 1-9.06-.41 6.3 6.3 0 0 1-.41-9.06 6.3 6.3 0 0 1 4.75-2.14c.338 0 .673.028 1.004.084V13.6c-.333-.122-.683-.183-1.034-.183a2.3 2.3 0 0 0-2.3 2.3 2.3 2.3 0 0 0 2.3 2.3 2.3 2.3 0 0 0 2.3-2.3V0h3.511z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold mb-6 uppercase tracking-widest text-neutral-300">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: "À propos", href: "/about" },
                { label: "Événements", href: "/events" },
                { label: "Galerie", href: "/gallery" },
                { label: "Contact", href: "/contact" },
                { label: "Points de Vente", href: "/points-of-sale" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-500 hover:text-orange-600 transition text-[11px] font-medium uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold mb-6 uppercase tracking-widest text-neutral-300">
              Contact
            </h3>
            <div className="space-y-4">
              <p className="text-neutral-500 text-xs font-medium">
                <span className="text-orange-600 block mb-1">Email</span>
                caurisle@gmail.com
              </p>
              <div className="text-neutral-500 text-xs font-medium">
                <span className="text-orange-600 block mb-1">Téléphones</span>
                +228 71 10 44 92
                <br />
                +228 92 60 43 76
                <br />
                +228 97 16 89 61
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} Le Cauris - ArtRévolution. Tous
            droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://p5sog.vercel.app/"
              className="text-neutral-600 hover:text-white transition text-[10px] uppercase tracking-widest font-bold"
            >
              Propulsé par <span className="text-orange-600">P5OOG</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
