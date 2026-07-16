import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="mx-auto max-w-6xl px-5 py-16 sm:py-20 md:px-6 md:py-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6b52]">
            Mindset Coaching & Energy Healing
          </p>

          <h1 id="hero-title"
            className="font-display max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-[#2f2a26] sm:text-6xl md:text-7xl">
            A softer space to feel clear again.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#6f625a] md:text-lg">
            Gentle one-on-one support for people who feel stuck, overwhelmed, or
            ready to reconnect with their own pace, clarity, and inner steadiness.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-full bg-[#2f2a26] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-[#2f2a26]/10 transition motion-safe:hover:-translate-y-0.5 hover:bg-[#4a4038]"
            >
              Explore support
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#c8b8a8] bg-white/40 px-7 py-3.5 text-center text-sm font-semibold text-[#2f2a26] transition motion-safe:hover:-translate-y-0.5 hover:bg-[#f0e7dd]"
            >
              Send a gentle note
            </a>
          </div>

          <p className="mt-6 max-w-md text-sm leading-6 text-[#78685f]">
            Designed for private online sessions, reflective personal growth,
            and emotionally grounded support without pressure.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 -top-6 h-32 w-32 rounded-full bg-[#d6c3b1]/50 blur-2xl xl:-left-6" />
          <div className="absolute -bottom-8 right-0 h-40 w-40 rounded-full bg-[#8faf9f]/30 blur-3xl xl:-right-8" />

          <div className="soft-card relative overflow-hidden rounded-[2.2rem] p-5">
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.7rem] bg-[#efe7dc] sm:min-h-[460px] lg:min-h-[520px]">
              <Image
                src="/images/hero-wellness.jpg"
                alt="Calm wellness setting with soft natural light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2f2a26]/55 via-[#2f2a26]/10 to-transparent" />

              <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] bg-white/82 p-5 shadow-xl shadow-[#2f2a26]/10 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6b52]">
                  Gentle First Step
                </p>

                <h2 className="font-display mt-3 text-3xl font-semibold leading-tight">
                  Begin with a simple, pressure-free note.
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#6f625a]">
                  Share only what feels comfortable to name right now.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-6 hidden rounded-2xl bg-white px-5 py-4 shadow-xl shadow-[#2f2a26]/10 md:block">
            <p className="text-sm font-semibold text-[#2f2a26]">
              Online session friendly
            </p>
            <p className="mt-1 text-xs text-[#6f625a]">
              Built for remote wellness services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
