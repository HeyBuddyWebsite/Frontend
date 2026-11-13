import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const LINKS = [
  ["/", "Home"],
  ["/services/ai-development", "AI Development"],
  ["/services/game-development", "Game Development"],
  ["/services/ar-development", "AR Development"],
  ["/services/cgi", "CGI"],
  ["/casestudies", "Case Studies"],
  ["/blog", "Blog"],
  ["/contactus", "Contact Us"],
];

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-32 text-center text-white">
      <p className="text-sm tracking-widest uppercase text-white/50">404</p>
      <h1 className="mt-3 text-3xl lg:text-5xl">This page doesn&apos;t exist</h1>
      <p className="mt-4 max-w-xl text-white/70">
        The link may be old or mistyped. Here are the most useful places to go next.
      </p>
      <nav aria-label="Popular pages" className="mt-10 flex flex-wrap justify-center gap-3">
        {LINKS.map(([href, label]) => (
          <Link key={href} href={href} className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white hover:text-black transition-colors">
            {label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
