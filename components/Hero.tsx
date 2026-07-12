import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#a98467]">
            Mindset Coaching & Energy Healing
          </p>

          <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#2f2a26] md:text-7xl">
            Find clarity, balance, and a deeper connection with yourself.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#6f625a] md:text-lg">
            Gentle one-on-one support for people who feel stuck, overwhelmed, or
            ready to reconnect with a calmer and more intentional version of
            themselves.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-full bg-[#2f2a26] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-[#2f2a26]/10 transition hover:-translate-y-0.5 hover:bg-[#4a4038]"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#c8b8a8] bg-white/40 px-7 py-3.5 text-center text-sm font-semibold text-[#2f2a26] transition hover:-translate-y-0.5 hover:bg-[#f0e7dd]"
            >
              Start with a Message
            </a>
          </div>

          <p className="mt-6 max-w-md text-sm leading-6 text-[#8a7a70]">
            Designed for private online sessions, gentle personal growth work,
            and emotionally grounded support.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#d6c3b1]/50 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#8faf9f]/30 blur-3xl" />

          <div className="soft-card relative overflow-hidden rounded-[2.2rem] p-5">
            <div className="relative min-h-[520px] overflow-hidden rounded-[1.7rem]">
              <Image
                src="/images/hero-wellness.jpg"
                alt="Calm wellness setting with soft natural light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2f2a26]/55 via-[#2f2a26]/10 to-transparent" />

              <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] bg-white/78 p-5 shadow-xl shadow-[#2f2a26]/10 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a98467]">
                  First Step
                </p>

                <h2 className="font-display mt-3 text-3xl font-semibold leading-tight">
                  Begin with a simple clarity conversation.
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#6f625a]">
                  Share what feels heavy, unclear, or ready to shift.
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