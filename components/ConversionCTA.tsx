export function ConversionCTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-6 md:px-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#2f2a26] px-6 py-12 text-white md:px-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#8faf9f]/20" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#d6c3b1]/20" />

        <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d6c3b1]">
              Not sure where to begin?
            </p>

            <h2 className="font-display max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
              Start with a short message and receive a gentle next-step
              recommendation.
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#faf7f2] px-7 py-3.5 text-sm font-semibold text-[#2f2a26] transition hover:-translate-y-0.5 hover:bg-white"
          >
            Contact SerenPath
          </a>
        </div>
      </div>
    </section>
  );
}