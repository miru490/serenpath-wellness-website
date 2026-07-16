import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-padding bg-[#f3ece4] px-5 md:px-6"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="soft-card rounded-[2rem] p-5">
            <div className="relative h-80 overflow-hidden rounded-[1.5rem] bg-[#e8ddd2] md:h-[460px]">
              <Image
                src="/images/about-coach.jpg"
                alt="Warm coaching environment for a wellness practitioner"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2f2a26]/50 via-transparent to-transparent" />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/72 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6b52]">
                  Visual Direction
                </p>
                <p className="font-display mt-2 text-2xl font-semibold">
                  Warm, grounded, and human-centered.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-5 top-10 hidden rounded-2xl bg-[#8faf9f] px-5 py-4 text-[#2f2a26] shadow-xl shadow-[#2f2a26]/10 md:block">
            <p className="font-display text-3xl font-semibold">Calm</p>
            <p className="text-xs uppercase tracking-[0.2em]">Brand Mood</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6b52]">
            About
          </p>

          <h2
            id="about-title"
            className="font-display max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
          >
            A softer path back to yourself
          </h2>

          <p className="mt-7 text-lg leading-8 text-[#6f625a]">
            SerenPath was created around a simple belief: meaningful change
            begins when people feel safe enough to slow down, listen inward, and
            reconnect with what matters.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#6f625a]">
            This concept focuses on warmth, trust, simplicity, and emotional
            clarity for a wellness practitioner who supports clients through
            mindset coaching and intuitive reflection.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#e0d4c7] bg-[#faf7f2]/70 p-5">
              <p className="font-semibold">Built for trust</p>
              <p className="mt-2 text-sm leading-6 text-[#6f625a]">
                Gentle language, soft colors, and clear service explanations.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e0d4c7] bg-[#faf7f2]/70 p-5">
              <p className="font-semibold">Designed for gentle action</p>
              <p className="mt-2 text-sm leading-6 text-[#6f625a]">
                Visitors can understand the support options and make contact without pressure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}