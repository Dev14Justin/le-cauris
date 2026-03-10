import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  const otherArticles = articles.filter((a) => a.id !== id).slice(0, 3);

  const paragraphs = article.content.split("\n\n").filter((p) => p.trim());

  return (
    <>
      {/* Hero – Cover Image */}
      <div className="relative h-[55vh] min-h-[380px] bg-neutral-950 overflow-hidden">
        {article.imageUrl && (
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover opacity-60"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <div className="max-w-4xl">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-orange-400 text-xs font-black uppercase tracking-widest mb-6 hover:text-orange-300 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Retour aux articles
            </Link>
            <span className="inline-block bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Meta Bar */}
      <div className="bg-neutral-950 border-b border-white/5">
        <div className="container mx-auto px-4 py-4 max-w-4xl flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {article.author}
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {article.date}
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Lead / Excerpt */}
            <p className="text-xl md:text-2xl text-neutral-600 font-light leading-relaxed mb-12 pb-12 border-b border-neutral-100 italic">
              {article.excerpt}
            </p>

            {/* Body Paragraphs */}
            <div className="prose prose-neutral max-w-none space-y-6">
              {paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-lg text-neutral-700 leading-[1.9] font-light"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Photo Gallery */}
            {article.images && article.images.length > 1 && (
              <div className="mt-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-0.5 bg-orange-600"></div>
                  <h2 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">
                    Galerie photos
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {article.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] rounded-[20px] overflow-hidden bg-neutral-100 group"
                    >
                      <Image
                        src={img}
                        alt={`${article.title} — photo ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Share / Back */}
            <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-orange-600 font-bold text-xs uppercase tracking-widest transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Tous les articles
              </Link>
              <span className="text-xs text-neutral-300 uppercase tracking-widest font-bold">
                © {new Date().getFullYear()} Le Cauris – ArtRévolution
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {otherArticles.length > 0 && (
        <div className="bg-neutral-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-1 bg-orange-600 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-black text-neutral-800 tracking-tighter">
                  À lire aussi
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {otherArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/articles/${related.id}`}
                    className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="relative h-52 overflow-hidden">
                      {related.imageUrl ? (
                        <Image
                          src={related.imageUrl}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-orange-50 flex items-center justify-center text-orange-200">
                          <svg
                            className="w-12 h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur text-orange-600 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                          {related.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs text-neutral-400 font-bold uppercase tracking-widest mb-2">
                        {related.date}
                      </span>
                      <h3 className="text-base font-black text-neutral-800 group-hover:text-orange-600 transition-colors leading-tight mb-3 tracking-tight">
                        {related.title}
                      </h3>
                      <p className="text-sm text-neutral-500 font-light line-clamp-2 leading-relaxed flex-1">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-orange-600 font-black text-xs uppercase tracking-widest mt-4">
                        Lire
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
